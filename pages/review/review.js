// pages/reviews/review.js
// Require leancloud library and object 
const AV = require('../../utils/av-weapp-min.js');
const Form = require('../../model/form.js');

var app = getApp()
Page({
  data: {
    userInfo: {},
    forms: []
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    // Call to the application instance to get data 
    app.getUserInfo(function (userInfo) {
      // Update data
      that.setData({
        userInfo: userInfo
      })
    })
  },
  onReady: function () {
    new AV.Query('Form')
      .descending('createdAt')
      .find()
      .then(forms => this.setData({ forms }))
      .catch(console.error);
  },
})