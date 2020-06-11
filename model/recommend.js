const axios = require("axios")
const config = require('../config/index')
const util = require("util")

class Recommend {
    static async getBannerList() {
        const url = util.format(config.music.bannerDataUrl)
        const result = await axios.get(url)
        var banner = {
            code: 0,
            data: {
                slider: []
            }
        }
        
        if(result.data.code === 0) {
            var data = result.data.focus.data.shelf.v_niche[0].v_card
            data.forEach((element,index) => {
                var idurl = element.subid == "" ? element.id : element.subid
                if(idurl.indexOf('html') > 0) {
                    return
                }
                banner.data.slider.push({
                    id: element.miscellany.CfgID,
                    linkUrl: "https://y.qq.com/n/yqq/album/" + idurl + ".html",
                    picUrl: element.cover
                })
            });
        } else {
            return 400
        }
        return banner
    }

    static async getDiscList(params) {
        const url = util.format(config.music.getDiscListParameter.url)
        var headers = {
            "referer": config.music.getDiscListParameter.referer,
            "host": config.music.getDiscListParameter.host
        }
        const result = await axios.get(url,{params,headers})
        return result.data
    }
    //测试接口
    static async getBannerListtest() {
        const url = util.format(config.music.bannerDataUrl)
        const result = await axios.get(url)
        
        
        if(result.data.code === 0) {
            var data = result.data.focus.data.shelf.v_niche[0].v_card
          
        } else {
            return 400
        }
        return data
    }
}

module.exports = {
    Recommend
}