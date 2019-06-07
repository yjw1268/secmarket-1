var app = getApp()
Page({
  data: {
    hasLogin:true,/* wx.canIUse('button.open-type.getUserInfo'),*/
    userInfo: {},
    userListInfo: [{
      icon: '/resources/iconfont-order.png',
      text: '全部订单',
      isunread: true,
      unreadNum: 2,
      url: "/pages/order/order"
    }, {
        icon: '/resources/iconfont-address.png',
      text: '地址管理',
      isunread: false,
      unreadNum: 2,
      url: "/pages/me/address"
    }]
  },
 
  onLoad: function () {
    var that=this;
    wx.getSetting({
      success: res => {
          wx.getUserInfo({
            success: res => {
              console.log(res.userInfo)
              that.setData({
                userInfo:res.userInfo
              })
              app.globalData.userInfo = res.userInfo;
              console.log("me")
            }
          })
        
      }
    })
  },

  jumpUrl: function (e) {
    var url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url
    })
  },

})