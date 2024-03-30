import User from '../models/User.js';
import bcrypt from 'bcryptjs'
import { createError } from './../utiles/error.js';
import jwt from 'jsonwebtoken'
export const register = async (req, res) => {
    try {
        var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password:hash,
        });
        await newUser.save();
        res.status(200).send('User has been created successfully.');
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).send('An error occurred during registration.');
    }
};
export const login = async (req, res) => {
    try {
    const user  =await User.findOne({username : req.body.username});
    if(!user) return next(createError(404,"User not found!"))
    const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password)
    if(!isPasswordCorrect) return next(createError(400,"Wrong password or username!"))
    const token = jwt.sign({id:user._id,isAdmin : user.isAdmin},process.env.jwt)
    const {password,isAdmin,...otherdetails} = user._doc;
    res.cookie("access_token",token,{
        httpOnly : true,
    })
        res.status(200).json({...otherdetails});
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).send('An error occurred during registration.');
    }
};
