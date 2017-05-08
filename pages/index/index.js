//index.js
var app = getApp()
Page({
  data: {
    form: 'Give us feedback',
    userInfo: {}
  },
  //事件处理函数
  Tapped: function() {
    console.log("tapped");
    wx.navigateTo({
     url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
