const  mongoose  = require("mongoose");
const  Schema  =  mongoose.Schema;

const  userObject  =  new Object({
    name: {
        type: String
    },
    lastName: {
        type: String
    },
    statusText: {
        type: String
    },
    image: {
        type: String
    }
});

const  chatSchema  =  new Schema({
        user: userObject,
        message: {
            type: String
        },
        event: {
            type: String
        },
        chatroomName: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

let  Chat  =  mongoose.model("Chat", chatSchema);
module.exports  =  Chat;