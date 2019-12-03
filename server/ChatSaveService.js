const  Chat  = require('./ChatSchema');
const  connect  = require("./dbconnection");

//save chat to the database
module.exports  = (user, message, event, chatroomName) => {
    connect.then(db  =>  {
        console.log("connected correctly to the server");
        let  chatMessage  =  new Chat({ user: user, message: message, event: event, chatroomName:chatroomName});
        chatMessage.save();
    });
}