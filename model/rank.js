const util = require("util")
const config = require("../config/index")
const axios = require("axios")

class Rank {
  static async getRankList(params) {
    const url = util.format(config.music.getRankList.url)
    let data = await axios.get(url, { params })
    let filterStr = data.data.split("MusicJsonCallback(")[1]
    filterStr = filterStr.substring(0, filterStr.lastIndexOf(')'))
    return filterStr
  }

  static async getRankDetail(params) {
    const url = util.format(config.music.getRankDetail.url)
    const result = await axios.get(url, { params })
    return result.data
  }
}
module.exports = {
  Rank
}
