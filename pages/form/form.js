//form.js
// Require leancloud library and object 
const AV = require('../../utils/av-weapp-min.js');
const Form = require('../../model/form.js');

var app = getApp()
Page({
  data:{
    userInfo: {},
    loading: false,
  },
  // Retrieve user info
  onLoad: function () {
    console.log('form page loaded')
    var that = this
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      })
      console.log(userInfo)
    })
  },
  // Form Submission
  bindFormSubmit: function(e) {
    // 1. enable the loading animation on send button
    this.setData({
      loading: !this.data.loading
    })
    // 2. show a Loading toast
    wx.showToast({
      title: 'Sending...',
      icon: 'loading',
      duration: 1500
    })
    // Local storage
    console.log(e)
    var review = e.detail.value.review
    var recommendation = e.detail.value.recommendation
    var learntocode = e.detail.value.learntocode
    var hearAbout = e.detail.value.hearAbout
    var nickName = e.detail.value.nickName
    var email = e.detail.value.email
    var phone = e.detail.value.phone
    // Leancloud permissions
    var acl = new AV.ACL();
    acl.setPublicReadAccess(true);
    acl.setPublicWriteAccess(true);
    setTimeout(function(){
    // Save data to leancloud object
    new Form({
          name: nickName,
          email: email,
          phone: phone,
          review: review,
          recommendation: recommendation,
          learn_to_code: learntocode,
          hear_about: hearAbout
        }).setACL(acl).save().catch(console.error);
    
    // Redirect user if form submitted
    wx.reLaunch({
      url: '/pages/wagon/wagon?form=1'
    });
   }, 2000);
  }
})
  


