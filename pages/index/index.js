//index.js
var app = getApp()
Page({
  data: {
    form: 'Give us feedback',
    userInfo: {},
    source: '',
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      })
    })
  },  
  onShareAppMessage: function () {
    return {
      title: 'Le Wagon coding school',
      path: 'pages/index/index'
    }
  },
  onReady: function (res) {
    console.log('ready')
  },
})