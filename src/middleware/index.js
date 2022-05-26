const bcrypt = require("bcryptjs");
const User = require("../user/userModel");

exports.hashPass = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message});
    }
};

exports.login = async (req, res, next) => {
	try {
	const checkLogin = await User.findOne({ username: req.body.username });
	if (await bcrypt.compare(req.body.password, checkLogin.password)) {
		res.status(200).send({message: 'Login successful!'});
		next();
	} else {
		res.status(500).send({error: 'Login failed'})
	}
   } catch (error) {
	   console.log(error);
	   res.status(500).send({ error: error.message })
   }
}

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
