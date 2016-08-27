var express = require('express');
var router = express.Router();

var ctrlMessages = require('../controllers/messages.controllers.js');

router
  .route('/messages')
  .get(ctrlMessages.messagesGetAll);

router
  .route('/messages/:messageId')
  .get(ctrlMessages.messagesGetOne);

router
  .route('/messages/new')
  .post(ctrlMessages.messagesAddOne);

module.exports = router;