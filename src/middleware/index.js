const bcrypt = require("bcryptjs");
const User = require("../user/userModel");
const jwt  = require("jsonwebtoken")

exports.hashPass = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message});
    }
};
// renamed login
exports.decryptUser = async (req, res, next) => {
    const b = req.body
	// const user = req.user // 500 error assignment to constant variable don't know where from
    try {
        if (!b.username || !b.password) {
            return res.status(400).send({message: `Please enter a username and password`});
        } else {    
            req.user = await User.findOne({username: b.username}); // error line 22
            if(req.user){
                const result = await bcrypt.compare( b.password, req.user.password );
                if(result) {
                // console.log(result);
					// moved to login
                    // const token = await jwt.sign({id: user._id}, process.env.SECRET);
                    // res.status(202).send({ username: user.username, token});
					next();
                } else {
                // console.log(result);
                    res.status(400).send({message: `Please enter vaild a username and password`});
                    }
            } else {
                res.status(406).send({error: `Enter a valid username AND password.`});
            }
        }
    } catch (error) {
        console.log(error);
        res.status(519).send({ error: error.message});
    }
};

// added token check----------------------------------
// this generates a unique token per user log in
exports.tokenCheck = async (req, res, next) => {
	try {
		const token = req.header('Authorization');
		const decodedToken = await jwt.verify(token, process.env.SECRET)
		req.user = await User.findById(decodedToken.id)
		if (req.user) {
			next()
		} else {
			throw new Error('Invalid token')
		}
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: error.message})
	}
}
