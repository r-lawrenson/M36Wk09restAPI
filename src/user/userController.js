const User = require('./userModel')
const jwt = require('jsonwebtoken')

exports.addUser = async (req, res) => {
	try {
		const newUser = await User.create(req.body)
		const token = await jwt.sign({id: newUser._id}, process.env.SECRET)
		// use underscore because value should never be changed
		res.status(200).send({ newUser, token })
	} catch (error) {
		if(error.code== 11000){
			res.status(500).send({ message: "User already exists!"})
		} else {	
		console.log(error)
		res.status(500).send({ error: error.message })
	}
  }
}

exports.login = async (req, res) => {
	try {
		// const user = req.user // 500 error assignment to constant variable don't know where from
		const token = await jwt.sign({ id: req.user._id }, process.env.SECRET);
		// give me a username... finally
		res.status(202).send({ username: req.user.username, token});
		// res.status(202).send({ user: req.user, token});
		// res.status(200).send({user: req.user})
	} catch (error) {
		console.log(error)
		res.status(400).send({messgae: 'login failed'})
	}
}

exports.logout = async (req, res) => {
	try {
		req.user.tokens = req.user.tokens.filter((tokenObj) =>{
			return tokenObj.token !== req.token
		})
		await req.user.save()
		res.status(200).send({message: 'logged out'})
	} catch (error) {
		res.status(500).send({message:'unable tp log out, try again soon.'})
	}
}

// LIST ONE by username or email as username and email are unique there can be only one
exports.listUser = async (req, res) => {
	try {
		// rename users to user as only finding one
	  	const user = await User.find(req.body);
	  	if(!user || user.length === 0){
			// check if no users or empty array
			res.status(404).send({ message:`no user data found.` });
	  	} else {
		res.status(200).send({ user });
	  	}
	} 	catch (error) {
			console.log(error);
			res.status(550).send({ error: error.message });
	}
  };

// LIST ALL
// exports.listUsers = async (req, res) => {
// 	try {
// 		const users = await User.find({})
// 		res.status(200).send({ users })
// 	} catch (error) {
// 		console.log(error)
// 		res.status(500).send({ error: error.message })
// 	}
// }

exports.updateUser = async (req, res) => {
	try {
	const newUser = await User.updateOne(
		{ username: req.body.username }, 
		{$set: 
			{
			username: req.body.username, 
			email: req.body.email, 
			password: req.body.password}})
			res.status(200).send({ newUser })
    } catch (error) {
		console.log(error)
		res.status(500).send({ error: error.message })
	}
}

// DELETE operation DELETE
exports.deleteUser = async (req, res) => {
	// username, email AND password required
	const b = req.body;
	const id = req.params.id;
	try {
	  // check username, email and password are not null
	  if(!(b.username && b.email && b.password)) {
		res.status(418).send({ message: "Enter a username, email AND password" });
	  } else {
		// if email and password are not null
		const user = await User.findOne({ email: b.email });
		  // check email exists in database
		  if(user.username == b.username && user.email == b.email){
			// if username and email exists then delete user
			await user.deleteOne(id);
			console.log(`user ${user.email} deleted`);
			res.status(202).send({ message: `user ${user.email} deleted` });
		  } else {
			// else send error message
			res.status(404).send({ message: `user not found.` });
		  }
	  }
	} catch (error) {
	  console.log(error);
	  // if email dosent exist returns this error
	  res.status(550).send({ message: `user not found.` });
	};
  };

// 
// exports.deleteUser = async (req, res) => {
// 	try {
// 		const remove = await User.remove(
// 			{title: req.body.username})
// 			res.status(200).send({ remove })
// 	} catch (error) {
// 		console.log(error)
// 		res.status(500).send({ error: error.message })
// 	}
// }










// THIS IS WHAT WE HAD BEFORE INCASE CURRENT CHANGES DONT WORK

// exports.addUser = async (req, res) => {
// 	try {
// 		const newUser = await User.create(req.body)
// 		res.status(200).send({ user: newUser.username })
// 	} catch (error) {
// 		console.log(error)
// 		res.status(500).send({ error: error.message })
// 	}
// }

// exports.listUsers = async (req, res) => {
// 	try {
// 		const users = await User.find({})
// 		res.status(200).send({ users })
// 	} catch (error) {
// 		console.log(error)
// 		res.status(500).send({ error: error.message })
// 	}
// }

// exports.updateUser = async (req, res) => {
// 	try {
// 	const newUser = await User.updateOne(
// 		{ username: req.body.username }, 
// 		{$set: 
// 			{
// 			username: req.body.username, 
// 			email: req.body.email, 
// 			password: req.body.password}})
// 			res.status(200).send({ newUser })
//     } catch (error) {
// 		console.log(error)
// 		res.status(500).send({ error: error.message })
// 	}

// }

// exports.deleteUser = async (req, res) => {
// 	try {
// 		const remove = await User.remove(
// 			{title: req.body.username})
// 			res.status(200).send({ remove })
// 	} catch (error) {
// 		console.log(error)
// 		res.status(500).send({ error: error.message })
// 	}
// }

