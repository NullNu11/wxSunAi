// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs),
    console.log("sssssssssssss")
  },
  globalData: {
    global:"hello",
    is_register:false    
  },
  
})
//appid          wx9d880530b072f0fa
//appsecret      1ba3e28a7b644031482688fcc3c27a5e