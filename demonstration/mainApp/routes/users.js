var express = require('express');
var router = express.Router();
const usersService = require("../service/usersService")

/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.send(await usersService.getUsers());
});

module.exports = router;
