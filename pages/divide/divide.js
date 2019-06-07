const wrapper = require('../../utils/wrapper');
let app = getApp();
Page({
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
    navRightItems: [],
    curNav: 1,
    curIndex: 1
  },
  onShow: function(option) {
    var that = this
    if(app.globalData.id){
    var classification = app.globalData.id;}else{
      var classification=1
    }
    wx.request({
      url: "https://www.bupt404.cn/secmarket/getClassification.php",
      data: {
        openid: wx.getStorageSync('openid'),
        classification: classification,
        index: 0
      },
      method: "GET",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: res => {
        console.log(classification)
        if (res.data) {
          this.setData({
            curNav: classification,
            navRightItems: res.data
          })
        }
        app.globalData.id=1;
      }
    })
  },


  switchRightTab: function(e) {
    let id = e.target.dataset.id
    wx.request({
      url: "https://www.bupt404.cn/secmarket/getClassification.php",
      data: {
        openid: wx.getStorageSync('openid'),
        classification: id,
        index: 0
      },
      method: "GET",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: res => {
        console.log(res)
        if (res.data) {
          this.setData({
            curNav: id,
            navRightItems: res.data
          })
        }
      }
    })

  }

})