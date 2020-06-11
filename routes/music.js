
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

var { Recommend } = require("../model/recommend")
const { Song } = require("../model/song")

router.get('/getBannerList', async (req, res, next) => {//获取banner的数据
    const result = await Recommend.getBannerList()
    res.send(result)
})

router.get('/getDiscList', async (req, res) => {//获取热门歌单推荐的数据
    const result = await Recommend.getDiscList(req.query)
    res.send(result)
})



router.get('/getBannerListtest', async (req, res, next) => {
    const result = await Recommend.getBannerListtest()
    res.send(result)
})

router.post('/getPlayUrl', bodyParser.json() , async (req, res, next) => {
    const result = await Song.getPlayUrl(req.body)
    res.send(result)
})





module.exports = router;
