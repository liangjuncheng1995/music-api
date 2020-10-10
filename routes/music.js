
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

var { Recommend } = require("../model/recommend")
const { Song } = require("../model/song")
const { Search } = require("../model/search");
const { Turn } = require('../model/turn');
const { Singer } = require('../model/singer');
const { Rank } = require('../model/rank');

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

router.get('/gethotkey', async (req, res, next) => { //获取热词搜索的接口
    const result = await Search.gethotkey(req.query)
    res.send(result)
})


router.get('/turn', async (req, res, next) => { //获取小程序展示的开关
    const result = await Turn.getTurn()
    res.send({ switch: result })
})

router.get('/change', async (req, res, next) => {
    const result = await Turn.ChangeTurn()
    if (result) {
        res.send("更改成功")
    }
})

router.get('/getSingerList', async (req, res, next) => {
    const result = await Singer.getSingerList(req.query)
    res.send(result)
})

router.get('/getSingerDetail', async (req, res, next) => {
    const result = await Singer.getSingerDetail(req.query)
    res.send(result)
})

router.get('/getRankList', async (req, res, next) => {
    const result = await Rank.getRankList(req.query)
    res.send(result)
})

router.get('/getRankDetail', async (req, res, next) => {
    const result = await Rank.getRankDetail(req.query)
    res.send(result)
})





module.exports = router;
