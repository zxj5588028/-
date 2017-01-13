const common = require('../../util/ajaxAPI.js');
Page({
  data: {
    movies:[],
    requestData: {
      start: 0,
      count: 10,
      city: '杭州'
    },
    loadingHidden: true,//加载电影的loading
    isEnd: false,//是否加载完毕
    firstLoad: true//首次加载显示
  },
  onLoad: function() {
    common.wxGetNetWork(this.requestMovies);
  },
  /**
   * [onReachBottom 滚动到底部，显示加载动画，加载数据]
   */
  onReachBottom: function() {
    //判断是否加载完毕
    if (this.data.isEnd) {
      return false;
    }
    this.setData({
      loadingHidden: false
    })
    this.requestMovies();
  },
  /**
   * [requestMovies 请求电影资源]
   * @return {[type]} [description]
   */
  requestMovies: function(){
    let _that = this;
    let options = {
      url: "in_theaters",
      data: _that.data.requestData,
      success: function(res){
        _that.setData({
          movies: _that.data.movies.concat(res.data.subjects),
          'requestData.start': _that.data.requestData.start + 10,
          loadingHidden: true,
          firstLoad: false
        });
        if (_that.data.movies.length === res.data.total) {
          _that.setData({
            isEnd: true
          });
        }
      }
    }
    common.wxRequest(options);
  }
})
