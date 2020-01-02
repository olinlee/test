const mongoose = require("mongoose");
const usersModel = mongoose.model("users");

const getUsers = async()=> await usersModel.find();


module.exports = {getUsers}