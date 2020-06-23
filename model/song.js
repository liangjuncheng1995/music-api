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
        const result = await axios.post(url, params, headers)
        if (result.data.code === 0) {
            return result.data
        }
    }

    static async getLyric(params) {
        const url = util.format(config.music.getLyric.url)
        const headers = {
            referer: config.music.getLyric.referer,
            host: config.music.getLyric.host
        }
        const result = await axios.get(url,{params,headers})
        var ret = result.data
        if(typeof ret === 'string') {
            var reg = /^\w+\(({.+})\)$/
            var matches = ret.match(reg)
            if (matches) {
                ret = JSON.parse(matches[1])
            }
        }
        return ret
    }
}

module.exports = {
    Song
}