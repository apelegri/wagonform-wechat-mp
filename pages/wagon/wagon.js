Page({
data: {
    logs: []
  },
  // load data and log success
  onLoad: function (option) {

    console.log('wagon page loaded')
    console.log(option)

    // display toast if form success
    if(option.brief == 1){
      wx.showToast({
      title: 'Received. Thanks!',
      icon: 'success',
      duration: 3000
      });
    } 
  }
})