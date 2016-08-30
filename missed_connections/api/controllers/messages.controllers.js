module.exports.messagesGetAll = function(req, res) {

  console.log('GET the messages');
  console.log(req.query);

  var returnData;
  var offset = 0;
  var count = 5;

  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }
  
  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }

  // returnData = messageData.slice(offset,offset+count);

  res
    .status(200)
    .json(returnData);
};

module.exports.messagesGetOne = function(req, res) {
  console.log('GET messageID', req.params.messageId);
  res
    .status(200)
    .json(messageData[req.params.messageId]);
};

module.exports.messagesAddOne = function(req, res) {
  console.log("POST new message");
  console.log(req.body);
  res
    .status(200)
    .json(req.body);
};
