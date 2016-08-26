var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	user_id : String,
	username : {
		type : String,
		required : true
	};
	name : String,
	location : String,
	description : String 
});

mongoose.model('User', userSchema);
