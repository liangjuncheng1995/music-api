const axios = require('axios')
const config = require('../config/index')
const util = require("util")

class Song {
    static async  getPlayUrl(params) {
        const url = config.music.getPlayUrl.url
        const headers = {
            referer: config.music.getPlayUrl.referer,
            origin: config.music.getPlayUrl.origin,
            'Content-type': 'application/x-www-form-urlencoded'
        }
        const result = await axios.post(url,params,headers)
        if(result.data.code === 0) {
            return result.data
        }
    }
}

module.exports = {
    Song
}