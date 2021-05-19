// pages/record.js
let app = getApp();
Page({
  data: {
    
    emotion: [20],
    emotionData: ""
  },

  //返会
  backBtn: function () {
    // wx.reLaunch({
    //   url: '../logs/logs',
    //   success: (result) => {
        
    //   },
    //   fail: () => {},
    //   complete: () => {}
    // });
    //两种都行哈哈哈哈
    wx.navigateTo({
      url: '/pages/logs/logs',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
      
      
      
  },
  dataBtn1: function () {
    this.setData({
      emotionData: this.data.emotionData + " a"
    })
  },
  dataBtn2: function () {
    this.setData({
      emotionData: this.data.emotionData + " b"
    })
  },
  dataBtn3: function () {
    this.setData({
      emotionData: this.data.emotionData + " c"
    })
  },
  dataBtn4: function () {
    this.setData({
      emotionData: this.data.emotionData + " d"
    })
  },
  dataBtn5: function () {
    this.setData({
      emotionData: this.data.emotionData + " e"
    })
  },
  dataBtn6: function () {
    this.setData({
      emotionData: this.data.emotionData + " f"
    })
  },
  dataBtn7: function () {
    this.setData({
      emotionData: this.data.emotionData + " g"
    })
  },
  dataBtn8: function () {
    this.setData({
      emotionData: this.data.emotionData + " h"
    })
  },
  dataBtn9: function () {
    this.setData({
      emotionData: this.data.emotionData + " i"
    })
  },
  dataBtn10: function () {
    this.setData({
      emotionData: this.data.emotionData + " j"
    })
  },
  dataBtn11: function () {
    this.setData({
      emotionData: this.data.emotionData + " k"
    })
  },
  dataBtn12: function () {
    this.setData({
      emotionData: this.data.emotionData + " l"
    })
  },
  question:function(){
   
   wx.navigateTo({
     url: '/pages/question/question',
     success: (result) => {
       
     },
     fail: () => { 
     },
     complete: () => { }
   });
     
  },
  makeSure: function () {
    //更改全局变量实验
    //app.globalData.is_register=true,
    console.log(app.globalData.phoneNumber)
    wx.request({
      url: 'http://127.0.0.1:4863/add_record',
      data: {
        "user_id": "501215609",
        "record_data": this.data.emotionData
      },
      header: { 'content-type': 'application/json' },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
          console.log(result.data)
      },
      fail: () => { },
      complete: () => { }
    });

  }
})