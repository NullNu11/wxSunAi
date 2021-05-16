// pages/learn.js
let app = getApp();
Page({
  data: {
    btnName: "hello world",
    value: "hello world",
    isshow: true,
    arr: ["a", "b", "v", "d"],
    register: "register",
    user_id: "",
    user_name: "",
    user_introduction: "",
    return_msg: "",
    fansile:"hahhah",
    login_code:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  btn: function () {
    this.setData({
      btnName: "注册"
    })
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    console.log(this.data.isshow)
    if (this.data.isshow) {
      this.setData({
        isshow: false
      })
    }
    else {
      this.setData({
        isshow: true
      })
    }
  },
  phone: function (e) {
    this.setData({
      user_id: e.detail.value
    })
  },
  name: function (e) {
    this.setData({
      user_name: e.detail.value
    })
  },
  introduction: function (e) {
    this.setData({
      user_introduction: e.detail.value
    })
  },
  recordBtn: function () {
    wx.navigateTo({
      url: '/pages/record/record',
    })
  },
  register: function () {
    console.log("click register l"),
      wx.request({
        //url: 'http://3007h50y18.qicp.vip/register',
        url:'http://127.0.0.1:4863/register',
        data: {
          user_id: this.data.user_id,
          user_name: this.data.user_name,
          user_introduction: this.data.user_introduction
        },
        header: { 'content-type': 'application/json' },
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: (result) => {
          console.log(result.data),
            this.setData({
              return_msg: result.data.msg
            })

          if (result.data.state) {
            wx.showToast({
              title: this.data.return_msg,
            })
          } else {
            wx.showToast({
              title: this.data.return_msg,
            })
          }
        },
        fail: () => {
          console.log("error")
        },
        complete: () => {
          console.log("complete")
        }
      });

  },
  questionBtn:function(){
    console.log("question"),
    wx.navigateTo({
      url: '/pages/question/question',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });    
  },
  getphone:function(e)
  {
     console.log('iv111111111'+e.detail.iv),
     console.log('data111111111'+e.detail.encryptedData) ,
     wx.login({
       timeout:10000,
       success: (result) => {
         console.log('logincode111111111'+result.code),
         this.setData({
           login_code:result.code
         }),
         wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx9d880530b072f0fa&secret=1ba3e28a7b644031482688fcc3c27a5e&js_code='+this.data.login_code+'&grant_type=authorization_code',
          header: {'content-type':'application/json'},
          method: 'GET',
          dataType: 'json',
          responseType: 'text',
          success: (result) => {
            console.log('session111111111'+result.data.session_key)
            var d=JSON.stringify(result.data)
            console.log(d)
          },
          fail: () => {},
          complete: () => {}
        });
       },
       fail: () => {},
       complete: () => {}
     });
               
  }
})