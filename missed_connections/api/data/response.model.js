var mongoose = require('mongoose');

var responseSchema = new mongoose.Schema({
	responder_id : //figure out how to call on user_id
	content : String 
});

mongoose.model('Response', responceSchema);
