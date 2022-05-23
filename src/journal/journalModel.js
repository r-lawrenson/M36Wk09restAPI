const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
	title:{
		type: 'string',
		required: true
	},
	entry: {
		type: String
	}

})

const Journal = mongoose.model('Journal' , journalSchema)
module.exports = Journal