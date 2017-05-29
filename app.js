//app.js
// Import Leancloud.cn library to store objects on the cloud
const AV = require('./utils/av-weapp-min.js');

//  initialization of the application: leancloud
AV.init({ 
 appId: 't6hUVJfOwjHuWXuD9OE06r7r-gzGzoHsz', 
 appKey: 'HndT17mJ7wAIxsv8uQ97h3DT', 
});

App({
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
  onHide: function (){
    wx.clearStorage 
  }
})