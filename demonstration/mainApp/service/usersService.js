const usersDao  = require("../dao/usersDao");

const getUsers = async()=>await usersDao.getUsers();


module.exports = {getUsers};