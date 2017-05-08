// pages/form/form.js
var app = getApp()
Page({
  data:{
    userInfo: {},
    loading: false,
  },
  // Retrieve user data
  onLoad: function () {
    console.log('form page loaded')
    var that = this
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      })
    })
  },

  // Form Submission
  bindFormSubmit: function(e) {
    // LOADING
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
    // Local Storage
    console.log(e)
    var overview = e.detail.value.overview
    var recommendation = e.detail.value.recommendation
    var learntocode = e.detail.value.learntocode
    var hearAbout = e.detail.value.hearAbout
    var nickName = e.detail.value.nickName
    var email = e.detail.value.email
    var phone = e.detail.value.phone
    var company = e.detail.value.company

  }
})
  


