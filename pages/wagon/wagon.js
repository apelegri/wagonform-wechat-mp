// wagon.js
Page({
  data: {
   logs: []
  },
  onLoad: function (option) {
    console.log('wagon page loaded')
    console.log(option)
    // Display toast if form success
    if(option.form == 1){
      wx.showToast({
       title: 'Review added. Thanks!',
       icon: 'success',
       duration: 3000
      });
    }
  },
  onShareAppMessage: function () {
    console.log('share')
    wx.showShareMenu({
      withShareTicket: true
    })
  }
})
