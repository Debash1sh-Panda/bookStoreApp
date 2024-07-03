const User = require("../model/user.model.js");
const bcrypt = require("bcryptjs");

exports.signUp = async (req, res) => {
    try {
        const {fullname, email, password} = req.body;
        const user = await User.findOne({email})

        if (user) {
            return res.status(400).json({message:"User already exists, login please !"})
        }

        const hashingPassword = await bcrypt.hash(password, 10);
        const createdUser = new User({
            fullname:fullname,
            email:email,
            password:hashingPassword
        })

        await createdUser.save();

        res.status(200).json({
            success: true,
            message:"Account created Successfully :)"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message:"Intrnal issue",
            error: error.message
        })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message:"User not exists, signup please !"});
        }

        const isMatchPassword = await bcrypt.compare(password, user.password);

        if (!user || !isMatchPassword) {
            return res.status(404).json({message:"Invalid login details, try again please !"})
        }else{
            return res.status(200).json({message:"User login Successfully !", user:{
                _id: user._id,
                fullname: user.fullname,
                email: user.email
            }});
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message:"Intrnal issue",
            error: error.message
        })
    }
}