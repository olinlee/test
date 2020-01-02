const mongoose = require("mongoose");
const usersSchema = mongoose.Schema({
    username:String,
    password:String
}, {versionKey: false});
mongoose.model("users",usersSchema,"users");