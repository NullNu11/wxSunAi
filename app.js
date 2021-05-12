// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs),
    wx.login({
      timeout:10000,
      success: (result) => {
        console.log(result.Date)
      },
      fail: () => {},
      complete: () => {}
    });
      

  },
  globalData: {
    userInfo: null
    
  }
})
