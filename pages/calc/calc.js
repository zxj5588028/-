const common = require('../../util/ajaxAPI.js');
Page({
  data: {
    url: "../calcDetail/calcDetail"
  },
  onLoad:function(options){
    var _that = this;
    wx.login({
      success: function(){
        wx.getUserInfo({
          success: function(res){
            _that.setData({
              userInfo: res.userInfo
            });
          }
        });
      }
    })
  },
  /**
   * [goCalc 跳转到计算器界面]
   */
  goCalc: function(){
    common.wxNavigateTo(this.data.url);
  }
})
