// declare bcrypt to use bcryptjs library
const bcrypt = require("bcryptjs");
const User = require("../user/userModel");

// 
exports.hashPass = async (req, res, next) => {
    try {
        req.body.pass = await bcrypt.hash(req.body.pass, 8);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message});
    }
};

exports.decrypt = async (req, res) => {
    try {
        const check = await bcrypt.compare( req.body.pass, User.pass)
        if(check == true) {
        res.status(201).send(`Login`)
        } else {
            res.status(501).send(`Login failed`)
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message});
    }
}