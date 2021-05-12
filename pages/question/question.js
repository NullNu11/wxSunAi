// pages/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     questionName:[10],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://127.0.0.1:4863/search_question?',
      data: {
        'type':"第一类问卷"
      },
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        console.log(result.data.data[0].question_data)
        result.data.data.forEach((element,index) => {
              this.data.questionName[index]=element
        });
       
        this.setData({
          questionName:this.data.questionName[0]
        }),
        console.log(this.data.questionName)
      },
      fail: () => {},
      complete: () => {}
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

  }
})