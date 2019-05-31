const wrapper = require('../../utils/wrapper');
Page({

  data: {
   commodity:{
      CId: 2,
      commodityName: "八哥呵呵呵",
      numChoices: 2,
     commodityImage: ["/resources/test2.jpg","/resources/test2.jpg",
      "/resources/active1.png"],
      intro: "这shi宝贝",
      price: 233,
      place: "沙河校区"
    },
    indicatorDots: true,
    autoplay:true,
    interval:1500,
    duration:700
  },

  onLoad: function (options) {
  wrapper.request({
    url: "",
    data: {
      openid: wx.getStorageSync('openid'),
      cid:options.CId
    },
    method: "GET",
    header: {
      "content-type": "application/x-www-form-urlencoded"
    },
    success: res => {
      if (res.data.status) {
        this.setData({
      commodity:res.data
        })
      }
    }
  })
  },

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
