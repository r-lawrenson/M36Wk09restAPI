const Movie = require('./movieModel')

exports.addMovie = async (req, res) =>{
	try {
		const newMovie = await Movie.create(req.body)
		res.status(200).send({ movie: newMovie })
	} catch (error) {
		console.log(error)
		res.status(500).send({ error: error.message })
	}
}

exports.listMovies = async (req, res) =>{
	try {
	const movies = await Movie.find({})
	res.status(200).send({ movies })
} catch (error) {
	console.log(error)
	res.status(500).send({ error: error.message })
}
}

exports.updateMovie = async (req, res) => {
	try {
		const newMovie = await Movie.updateOne(
			{title: req.body.title}, 
			{$set: {actors: req.body.actors}})
			res.status(200).send({ newMovie })
	
	} catch (error) {
		console.log(error)
		res.status(500).send({ error: error.message })
	}
}

exports.deleteMovie = async (req, res) => {
	try {
		const remove = await Movie.remove(
			{title: req.body.title})
		res.status(200).send({ remove })
	} catch (error) {
		console.log(error)
		res.status(500).send({ error: error.message })
	}
}