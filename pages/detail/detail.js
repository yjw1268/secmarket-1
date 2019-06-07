const wrapper = require('../../utils/wrapper');
Page({

  data: {
   commodity:{
      No: 1,
      title: "商品丢失了",
      numChoices: 2,
     commodityImage: ["/resources/notfound.jpg","/resources/notfound.jpg",
      "/resources/notfound.jpg"],
      Introduction: "您走到了无人的摊位哦",
      price: 233,
      site: "bug的深渊"
    },
    indicatorDots: true,
    autoplay:true,
    interval:1500,
    duration:700
  },
  buyCommodity(){
    wx.request({
      url: wrapper.WCONST.apiBase + "buyCommodity.php",
      data: {
        openid: wx.getStorageSync('openid'),
        No: this.data.commodity.cNo
      },
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: res => {
        console.log(res)
        if (res.data) {
          wx.showToast({
            title: '购买成功',
            icon: 'none',
            mask: true,
            duration: 2000,
            success: () => {
              setTimeout(() => {
                wx.navigateBack();
              }, 1000)
            }
          });
          }
        }
      
    })
  },
  contact(){
    wx.navigateTo({
      url: '/pages/contact/contact',
    })
  },

  onLoad: function (options) {
  wx.request({
    url: wrapper.WCONST.apiBase+"getCommodityDetail.php",
    data: {
      openid: wx.getStorageSync('openid'),
      No:options.No
    },
    method: "POST",
    header: {
      "content-type": "application/x-www-form-urlencoded"
    },
    success: res => {
      console.log(res.data)
      if (res.data.status!=20001) {
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
