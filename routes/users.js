var express = require('express');
var router = express.Router();

var URL = require('url')
var User = require('./user');
var { Recommend } = require("../model/recommend")

// var Recommend = require()


/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(req.query)
  res.send('respond with a resource');
});



router.get('/getUserInfo', function (req, res, next) {
  var user = new User()
  var params = URL.parse(req.url, true).query

  if (params.id == '1') {
    user.name = 'cheng'
    user.age = 15
    user.city = "广州"
  } else {
    user.name = "liang"
    user.age = 18
    user.city = "茂名"
  }

  var response = {
    status: 1,
    data: user
  }
  res.send(JSON.stringify(response))
})


module.exports = router;
