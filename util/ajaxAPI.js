const mainUrl = 'http://api.douban.com/v2/movie/';
/**
 * [请求豆瓣电影数据]
 * @param  {[object]} options [传入data，success，url，3个参数]
 */
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
/**
 * [保留当前页面，跳转到其他非tab页面]
 * @param  {[string]} url [要跳转到的url]
 */
function wxNavigateTo(url){
  wx.navigateTo({
    url: url
  });
}
/**
 * [判断设备网络状态；如果为wifi，执行方法；如果不是wifi，点击确认执行方法。]
 * @param  {Function} fn [执行方法]
 */
function wxGetNetWork(fn){
    wx.getNetworkType({
      success: function(res){
        if (res.networkType == 'wifi') {
          fn();
        } else {
          wx.showModal({
            title:'提示',
            content:'非wifi环境下载会消耗流量，确认加载数据吗？',
            success: function(res){
              if (res.confirm) {
                fn();
              }
            }
          })
        }
      },
      fail: function(){
        wx.showToast({
          title:'欢迎进入二次元世界'
        })
      }
    })
}

module.exports = {
  wxRequest: wxRequest,
  wxNavigateTo: wxNavigateTo,
  wxGetNetWork: wxGetNetWork
}
