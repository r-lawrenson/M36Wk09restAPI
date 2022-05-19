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

// exports.unHash = async (req, res, next) => {
// 	try {
// 		bcrypt.compareSync(req.body.password, hashPass, (err, res) => {})
// 		if ( match ) {
// 			console.log(unHash)
// 		}
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).send({ error: error.message })
// 	}
// }

// exports.unHash = async (req, res, next) => {
// 	try {
// 		req.body.password = await unHash(req.body.password, 8);
// 		next();
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).send({ error:error.message});
// 	}
// }

// exports.unHash = async (req, res, next) => {
// 	try {
// 		const unHashPass = bcrypt.compare(req.body.password)
// 		if(isMatch) {
// 			console.log(unHashPass);
// 			console.log(hashPass)
// 		} if (!isMatch) {
// 			console.log(hashPass, 'is not encryption of ', password);
// 		}
// 	} catch (error) {
		
// 	}
// }