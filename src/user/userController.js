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
		res.status(200).send({user: req.user})
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

exports.listUsers = async (req, res) => {
	try {
		const users = await User.find({})
		res.status(200).send({ users })
	} catch (error) {
		console.log(error)
		res.status(500).send({ error: error.message })
	}
}

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

exports.deleteUser = async (req, res) => {
	try {
		const remove = await User.remove(
			{title: req.body.username})
			res.status(200).send({ remove })
	} catch (error) {
		console.log(error)
		res.status(500).send({ error: error.message })
	}
}










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

