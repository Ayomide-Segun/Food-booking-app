const { JsonWebTokenError } = require('jsonwebtoken');
const User = require('../Model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.register = async(req, res) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !email || !password) {
            return res.status(400).json({
                message: 'All fields required'
            });
        }
    
        const userExists = await User.findOne({username});
        if (userExists) {
            return res.status(400).json({
                message: 'Username has been taken'
            })
        }
        
        const emailExists = await User.findOne({email});
        if (emailExists) {
            return res.status(400).json({
                message: 'User already exists'
            })
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const user = await User.create({
            username,
            password: hashedPassword
        });
    
        res.status(201).json({
            message: 'User registered successfully'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error!'
        })
    }
}

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({
                message: 'Invalid credentials'
            })
        };
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: 'Invalid credentials'
            })
        };
    
        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            { expiresIn: '1d'}
        );
        res.json({ token });
    } catch (error) {
        res.status(500).json({
            message: 'Server error!'
        })
    };
}