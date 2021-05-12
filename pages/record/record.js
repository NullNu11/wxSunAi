// pages/record.js
Page({
  data: {
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ],
    emotion: [20],
    emotionData: ""
  },

  //返会
  backBtn: function () {
    wx.navigateBack({
      delta: 0,
    })
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
  makeSure: function () {
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