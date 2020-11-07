module.exports = {
    //prod
    environment: 'dev',
    music: {
        bannerDataUrl: "https://u.y.qq.com/cgi-bin/musics.fcg?-=recom9606494041836398&g_tk=5381&sign=zza84g0e0ost14yff15c4441255ee9ef959d8dacccc3f88&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data=%7B%22comm%22%3A%7B%22ct%22%3A24%7D%2C%22category%22%3A%7B%22method%22%3A%22get_hot_category%22%2C%22param%22%3A%7B%22qq%22%3A%22%22%7D%2C%22module%22%3A%22music.web_category_svr%22%7D%2C%22recomPlaylist%22%3A%7B%22method%22%3A%22get_hot_recommend%22%2C%22param%22%3A%7B%22async%22%3A1%2C%22cmd%22%3A2%7D%2C%22module%22%3A%22playlist.HotRecommendServer%22%7D%2C%22playlist%22%3A%7B%22method%22%3A%22get_playlist_by_category%22%2C%22param%22%3A%7B%22id%22%3A8%2C%22curPage%22%3A1%2C%22size%22%3A40%2C%22order%22%3A5%2C%22titleid%22%3A8%7D%2C%22module%22%3A%22playlist.PlayListPlazaServer%22%7D%2C%22new_song%22%3A%7B%22module%22%3A%22newsong.NewSongServer%22%2C%22method%22%3A%22get_new_song_info%22%2C%22param%22%3A%7B%22type%22%3A5%7D%7D%2C%22new_album%22%3A%7B%22module%22%3A%22newalbum.NewAlbumServer%22%2C%22method%22%3A%22get_new_album_info%22%2C%22param%22%3A%7B%22area%22%3A1%2C%22sin%22%3A0%2C%22num%22%3A20%7D%7D%2C%22new_album_tag%22%3A%7B%22module%22%3A%22newalbum.NewAlbumServer%22%2C%22method%22%3A%22get_new_album_area%22%2C%22param%22%3A%7B%7D%7D%2C%22toplist%22%3A%7B%22module%22%3A%22musicToplist.ToplistInfoServer%22%2C%22method%22%3A%22GetAll%22%2C%22param%22%3A%7B%7D%7D%2C%22focus%22%3A%7B%22module%22%3A%22music.musicHall.MusicHallPlatform%22%2C%22method%22%3A%22GetFocus%22%2C%22param%22%3A%7B%7D%7D%7D",//获取轮播图的数据
        getDiscListParameter: {//获取推荐的歌单
            url: "https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg",
            referer: "https://c.y.qq.com/",
            host: "c.y.qq.com"
        },
        getSongList: { //获取推荐歌单的歌曲列表
            url: "https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg",
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
        },
        getPlayUrl: {//获取播放的链接
            url: "https://u.y.qq.com/cgi-bin/musicu.fcg",
            referer: "https://c.y.qq.com/",
            origin: 'https://y.qq.com',
        },
        getLyric: {//获取歌词
            url: "https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg",
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
        },
        search: {//获取搜索列表
            url: "https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp",
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com',
            origin: 'https://y.qq.com',
        },
        gethotkey: {//获取热门搜索
            url: "https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg"
        },
        getSingerList: {//获取歌手列表
            url: "https://c.y.qq.com/v8/fcg-bin/v8.fcg",
        },
        getSingerDetail: { //获取歌手详情数据
            url: "https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg"
        },
        getRankList: { //获取排行列表的数据
            url: "https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg"
        },
        getRankDetail: { //获取排行详情的数据
            url: "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg"
        }
    },
    database: {
        dbName: 'music',
        host: 'localhost',
        password: '数据库密码',
        port: 3306,
        user: 'root',
    }
}