const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema ({
	title:{
		type: String,
		required: true,
		unique: true,
	},
	// square brackets allow an array, so more than one actor aslong as its a string
	actors:[
		{
			type: String
		}
	],
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;