App({
  onLaunch: function() {
    // Do something initial when launch.
  },
  onShow: function() {console.log("已经启动，蓄势待发")
      // Do something when show.
  },
  onHide: function() {
      // Do something when hide.
  },
  onError: function(msg) {
    console.log(msg)
  },
  globalData: 'I am global data'
})
