import _ from 'lodash'
import jsonwebtoken from 'jsonwebtoken';


import User from '../models/User.js'

const signToken = (id) => {
    return jsonwebtoken.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

export const registerUser = async (req, res) => {
    const { name, email, password, passwordConfirm } = req.body;

    // 1) Correct the names because user might be stupid
    const correctedName = _.capitalize(name);

    // 2) Create the user
    const user = await User.create({
        name: correctedName, 
        email, 
        password, 
        passwordConfirm
    });

    user.password = undefined

    // 3) Send response
    res.status(201).json({status: 'Sucess', data: { user }});
}

export const loginUser = async (req, res) => {
    console.log('Login user called: ', req.body)

    const { email, password } = req.body;

    // 1) Check if email and password exist
    if (!email || !password) {
        return res.status(400).json({status: 'Fail', message: 'Please provide email and password'});
    }

    // 2) Check if user exists && password is correct
    console.log('Looking for user: ', email)
    const user = await User.findOne
    ({ email
    }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
        return res.status(401).json({status: 'Fail', message: 'Incorrect email or password'});
    }

    // 3) Sign the token
    const token = signToken(user._id);
    user.password = undefined;
    
    // 4) Send response
    req.session.user = {
        user,
        token
    }
    await req.session.save();
    res.status(200).json({status: 'Success'});
}