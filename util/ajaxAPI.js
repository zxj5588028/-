const mainUrl = 'http://api.douban.com/v2/movie/';
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
module.exports = {
  wxRequest: wxRequest
}
