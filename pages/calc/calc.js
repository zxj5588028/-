const common = require('../../util/ajaxAPI.js');
Page({
  data: {
    url: "../calcDetail/calcDetail"
  },
  onLoad:function(options){
    let _that = this;
    common.wxLogin(_that);
  },
  goCalc: function(){
    common.wxNavigateTo(this.data.url);
  }
})
