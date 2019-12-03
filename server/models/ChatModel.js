const  ChatSchema  = require('./ChatSchema');

const ChatModel = mongoose.model('Chat', ChatSchema);

module.exports = ChatModel;