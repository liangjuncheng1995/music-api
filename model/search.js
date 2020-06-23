const axios = require('axios')
const config = require('../config/index')
const util = require("util")

class Search {
    static async getSearchList(params) {
        const url = util.format(config.music.search.url)
        const headers = {
            "referer": config.music.search.referer,
            "host": config.music.search.host,
            "origin": config.music.search.origin
        }
        const result = await axios.get(url, { params, headers })
        var ret = result.data
        if(typeof ret === 'string') {
            var reg = /^\w+\(({.+})\)$/
            var matches = ret.match(reg) 
            if(matches) {
                ret = JSON.parse(matches[1])
            }
        }
        return ret
    }
}

module.exports = {
    Search
}