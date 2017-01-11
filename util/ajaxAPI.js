const mainUrl = 'http://api.douban.com/v2/movie/';
//请求资源接口，传入data，success，url，3个参数
function wxRequest(options) {
  let data = options.data ? options.data : '';
  wx.request({
    url: mainUrl + options.url,
    header: {
      'content-type': 'json'
    },
    data: options.data,
    method: 'GET',
    dataType: 'json',
    success: options.success,
    fail: function(){
      console.log('请求失败')
    },
    complete: function(){
      console.log('请求完成')
    }
  });
}
//登录
function wxLogin(that){
  wx.login({
    success: function(response){
      wx.getUserInfo({
        success: function(res){
          that.setData({
            userInfo: res.userInfo
          });
          console.log(that.data)
        }
      })
    }
  })
}
//跳转
function wxNavigateTo(url){console.log(url)
  wx.navigateTo({
    url: url
  });
}

module.exports = {
  wxRequest: wxRequest,
  wxLogin: wxLogin,
  wxNavigateTo: wxNavigateTo
}
