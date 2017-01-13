const common = require('../../util/ajaxAPI.js');
Page({
  data: {
    summaryText: "text-up",
    arrow: 'down'
  },
  /**
   * [onLoad 设置页面标题，获取电影id]
   * @param  {[object]} query [某个电影的id和标题]
   */
  onLoad: function(query) {
    this.setData({
      movieId: query.id,
      movieTitle: query.title
    });
    wx.setNavigationBarTitle({
      title: this.data.movieTitle
    })
    this.requestMovies();
  },
  /**
   * [requestMovies 请求单个电影的数据]
   */
  requestMovies: function(){
    let _that = this;
    let options = {
      url: "subject/" + _that.data.movieId,
      success: function(res){
        console.log(res);
        _that.setData({
          movie: res.data
        })
      },
    }
    common.wxRequest(options);
  },
  /**
   * [buy 购买电影票]
   */
  buy: function(){
    let options = {
      title: '啊哦，暂时还无法购买',
      icon: 'success',
      mask: true,
      success: function(){
        console.log("调用弹窗成功");
      }
    }
    wx.showToast(options);
  },
  /**
   * [showMore 电影内容简介的显示与隐藏]
   */
  showMore: function(){
    let arrow, summaryText;
    if (this.data.arrow === 'down') {
      arrow = 'up';
      summaryText = 'text-down'
    } else {
      arrow = 'down';
      summaryText = 'text-up'
    }
    this.setData({
      arrow: arrow,
      summaryText: summaryText
    })
  }
});
