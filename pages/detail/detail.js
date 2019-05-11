// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    navLeftItems: [{
      id: 1,
      name: "书籍报刊"
    }, {
      id: 2,
      name: "化妆护肤"
    }, {
      id: 3,
      name: "衣物鞋子"
    }, {
      id: 4,
      name: "电子数码"
    }, {
      id: 5,
      name: "我要求购"
    }, {
      id: 6,
      name: "食品饮品"
    }, {
      id: 7,
      name: "文具用品"
    }, {
      id: 8,
      name: "游戏动漫"
    }, {
      id: 9,
      name: '乐器类'
    }, {
      id: 10,
      name: '体育用品'
    }, {
      id: 11,
      name: '珠宝首饰'
    }, {
      id: 12,
      name: '其他'
    }],
    navRightItems: [{
      CId: 1,
      commodityName: "bug",
      numChoices: 2,
      commodityImage: "/resources/active.png",
      intro: "这是每个程序员都想要的宝贝",
      price: 233,
      place: "沙河校区"
    }, {
      CId: 2,
      commodityName: "八哥呵呵呵",
      numChoices: 2,
      commodityImage: "/resources/active1.png",
      intro: "这shi宝贝",
      price: 233,
      place: "沙河校区"
    }],
    curNav: 1,
    curIndex: 0
  },

  onLoad: function (options) {

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