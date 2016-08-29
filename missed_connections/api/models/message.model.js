var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	email : String,
	username : String,
	first_name : String,
	last_name : String,
	city : String,
	state : String,
	description : String 
});

var replySchema = new mongoose.Schema({
	response : String,
	responder : [userSchema],
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
