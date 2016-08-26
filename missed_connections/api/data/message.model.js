var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({ 
	user_id : String,//embed responses
	location : String,
	content : String 
});

mongoose.model('Message', messageSchema);
