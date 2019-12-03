
const  mongoose  = require("mongoose");
mongoose.Promise  = require("bluebird");
const  url  =  "mongodb+srv://dbLaura:batepapolaura@cluster0-nxedz.mongodb.net/test?retryWrites=true&w=majority";
const  connect  =  mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true });
module.exports  =  connect;

