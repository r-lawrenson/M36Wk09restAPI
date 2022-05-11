// declare bcrypt to use bcryptjs library
const bcrypt = require("bcryptjs");
const User = require("../user/userModel");


exports.hashPass = async (req, res, next) => {
    const b = req.body
    try {
        b.pass = await bcrypt.hash(b.pass, 8);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message});
    }
};

exports.decrypt = async (req, res, next) => {
    const b = req.body
    try {
        const user = await User.findOne({username: b.username});
        if(user){
            const result = await bcrypt.compare( b.password, user.pass );
            if(result) {
            // console.log(result);
              res.status(202).send(`${b.username} Logged in successfully`);
              next();
              } else {
            // console.log(result);
              res.status(401).send(`Login failed, Invalid password.`);
              }
        } else {
            res.status(406).send({error: `Enter a valid username AND password.`});
        }
    } catch (error) {
        console.log(error);
        res.status(403).send({ error: error.message});
    }
};

// // removed code // //
// } else if (!(body.username && body.pass)) {
// res.status(418).send({ error: "Enter username AND password" });
// res.status(300).send(`Call decrypt`)