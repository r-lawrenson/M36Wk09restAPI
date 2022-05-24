const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	website: {
		type: String,
		required: true,
		unique: true,
		
	},
	helpline: {
		type: String,
		
	}, 
    keywords: {
        type:String,
        required:true,
    }
})

const Resource = mongoose.model('Resource', resourceSchema)
module.exports = Resource