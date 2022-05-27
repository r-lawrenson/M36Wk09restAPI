const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
	},
	password: {
		type: String,
		required: true,
	}
	
})

// added this to the schema for use of jwt
userSchema.methods.generateAuthToken = async function () {
    const token = jwt.sign({_id: this._id}, process.env.SECRET, {});
    this.tokens.push({ token });
    await this.save();
    return token;
}
// ---------------------------------------
const User = mongoose.model('User', userSchema)
module.exports = User