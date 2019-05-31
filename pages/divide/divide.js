const wrapper = require('../../utils/wrapper');

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
  onLoad: function(option) {
    var that = this
    var classification = option.classification
    wrapper.request({
      url: "",
      data: {
        openid: wx.getStorageSync('openid'),
        classification: classification,
        index:0
      },
      method: "GET",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: res => {
        if (res.data.status) {
          this.setData({
            curNav:classification,
            navRightItems: res.data
          })
        }
      }
    })
  },


  switchRightTab: function(e) {
    let id = e.target.dataset.id
    wrapper.request({
      url: " ",
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
        if (res.data.status) {
          this.setData({
            curNav: id,
            navRightItems: res.data
          })
        }
      }
    })

  }

})