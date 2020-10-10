const util = require("util")
const config = require("../config/index")
const axios = require("axios")

class Singer {
  static async getSingerList(params) {
    const url = util.format(config.music.getSingerList.url)
    const result = await axios.get(url, { params })
    return result.data
  }

  static async getSingerDetail(params) {
    const url = util.format(config.music.getSingerDetail.url)
    const result = await axios.get(url, { params })
    return result.data
  }

}

module.exports = {
  Singer
}