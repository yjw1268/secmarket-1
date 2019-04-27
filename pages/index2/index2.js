// inedx2.js
Page({
  data: {
    hasAuth: wx.canIUse('button.open-type.getUserInfo'),
    //grids: [0, 1, 2, 3, 4, 5,],
    grids: [
        {
        url: "/pages/",
        icon: "/resources/subnav_05.png",
        name: "书籍报刊"
      }, {
        url: "/pages/",
        icon: "/resources/subnav_05.png",
        name: "化妆护肤"
      }, {
        url: "/pages/",
        icon: "/resources/subnav_05.png",
        name: "衣物鞋子"
      }, {
        url: "/pages/",
        icon: "/resources/subnav_05.png",
        name: "电子数码"
      }, {
        url: "/pages/",
        icon: "/resources/more.png",
        name: "我要求购"
      }, {
        url: "/pages/",
        icon: "/resources/subnav_05.png",
        name: "食品"
      }, {
        url: "/pages/",
        icon: "/resources/subnav_05.png",
        name: "文具用品"
      }, {
        url: "/pages/",
        icon: "/resources/subnav_05.png",
        name: "游戏动漫"
      }, {
        url: "/pages/",
        icon: "/resources/subnav_05.png",
        name: "乐器类"
      }, {
        url: "/pages/",
        icon: "/resources/subnav_05.png",
        name: "体育用品"
      }, {
        url: "/pages/",
        icon: "/resources/subnav_05.png",
        name: "珠宝首饰"
      }, {
        url: "/pages/",
        icon: "/resources/subnav_05.png",
        name: "其他"
      }
    ],
    indicatorDots: true,
    autoplay: "",
    interval: "",
    duration: "",
    imgUrls: "",
    goodsList: [
      {
      goodsImg: "/resources/test1.gif",
      goodsName: "awsl",
      Price: "99",
      tagline: 'descriptionssssso我哦是嗖嗖的丰厚海淀搜狐分都说了弗老师来说火蓝刀锋好了水利水电风凉话',
    }, {
      goodsImg: "/resources/test1.gif",
      goodsName: "阿伟",
      Price: "999",
      tagline: '我还能肝！！！！！！',
    }],
    inputShowed: false,
    inputVal: "",
    searchbar: false,
    sysWidth: "",
    imgUrls: [
      { url:"/resources/test2.jpg" }, 
      {url:"/resources/no-address.png" }
      ]
  },
  //search
  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  }, /////search 

  onGotUserInfo(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    this.setData({
      hasAuth: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var app = getApp();
    this.setData({
      sysWidth: wx.getSystemInfoSync().windowWidth
    });
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })

  },


  onReady: function() {

  },

  onShow: function() {

  },


  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

})