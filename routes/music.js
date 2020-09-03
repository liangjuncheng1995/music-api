
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

var { Recommend } = require("../model/recommend")
const { Song } = require("../model/song")
const { Search } = require("../model/search") 

router.get('/getBannerList', async (req, res, next) => {//获取banner的数据
    const result = await Recommend.getBannerList()
    res.send(result)
})

router.get('/getDiscList', async (req, res) => {//获取热门歌单推荐的数据
    const result = await Recommend.getDiscList(req.query)
    res.send(result)
})

router.get('/getSongList', async (req, res) => {//获取热门歌单推荐的数据的歌曲列表
    const result = await Recommend.getSongList(req.query)
    res.send(result)
})



router.get('/getBannerListtest', async (req, res, next) => {
    const result = await Recommend.getBannerListtest()
    res.send(result)
})

router.post('/getPlayUrl', bodyParser.json(), async (req, res, next) => { //获取歌曲播放的url
    const result = await Song.getPlayUrl(req.body)
    res.send(result)
})

router.get('/getLyric', async (req, res, next) => { //获取歌词
    const result = await Song.getLyric(req.query)
    res.send(result)
})  


router.get('/search', async (req, res, next) => { //搜索接口
    const result = await Search.getSearchList(req.query)
    res.send(result)
})


// router.get('/turn', async ())




module.exports = router;
