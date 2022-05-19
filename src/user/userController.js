const User = require('./userModel')


exports.addUser = async (req, res) => {
	try {
		const newUser = await User.create(req.body)
		res.status(200).send({ user: newUser.username })
	} catch (error) {
		console.log(error)
		res.status(500).send({ error: error.message })
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

