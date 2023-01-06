import _ from 'lodash'

import User from '../models/User.mjs'

export const registerUser = async (req, res) => {
    console.log('Entre a la funcion')
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

