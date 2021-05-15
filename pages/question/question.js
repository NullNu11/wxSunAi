// pages/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionName: new Array(10),
    points: 0,
    answer_data: "",
    arr: [
      {
        num: 1,
        dataa: "hahah"
      },
      {
        num: 2,
        dataa: "wwaaw"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://127.0.0.1:4863/search_question?',
      data: {
        'type': "第一类问卷"
      },
      header: { 'content-type': 'application/json' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        console.log(result.data),
          this.setData({
            questionName: result.data.data
          })
        //wocao   shuitmfamingd foreach  yiyang dd xaingguo quebnegnyong 
        // result.data.data.forEach((element,index) => {
        //       this.data.questionName[index]=element
        // });

        // this.setData({
        //   questionName:this.data.questionName[0]
        // }),

      },
      fail: () => { },
      complete: () => { console.log(this.data.questionName) }
    });


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  answer6: function () {
    this.setData({
      points: this.data.points + 6
    })
  },
  answer5: function () {
    this.setData({
      points: this.data.points + 5
    })
  },
  answer4: function () {
    this.setData({
      points: this.data.points + 4
    })
  },
  answer3: function () {
    this.setData({
      points: this.data.points + 3
    })
  },
  answer2: function () {
    this.setData({
      points: this.data.points + 2
    })
  },
  answer1: function () {
    this.setData({
      points: this.data.points + 1
    })
  },
  answer0: function () {
    this.setData({
      points: this.data.points + 0
    })
  } ,
  submit: function () {
    console.log(this.data.points)
}
})