const common = require('../../util/ajaxAPI.js');
Page({
  data: {},
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
  }
});
