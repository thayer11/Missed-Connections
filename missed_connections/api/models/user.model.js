var mongoose = require('mongoose');

var replySchema = new mongoose.Schema({
	response : String,
	responder : [userSchema],
});

var userSchema = new mongoose.Schema({
	email : String,
	password : String,
	username : String,
	first_name : String,
	last_name : String,
	city : String,
	state : String,
	personal_bio : String 
});

var messageSchema = new mongoose.Schema({ 
	content : String 
	location : {
		name : String,
		address : String
	}
	user : [userSchema],
	reply : [replySchema]
});
mongoose.model('Message', messageSchema);
