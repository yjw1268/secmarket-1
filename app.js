//app.js
App({
  onLaunch: function () {
    if (!wx.getStorageSync('userInfo') || !wx.getStorageSync('openid')) {
      // 登录
      wx.login({
        success: res => {
          var code = res.code;
          if (code) {
            wx.request({
              url: "https://www.bupt404.cn/secmarket/login.php",
              data: {
                code: code
              },
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              method: 'POST',
              success: function (e) {
                console.log(e)
                console.log(e.data)
                let openid = e.data[0]['openid']
                let session_key = e.data[0]['session_key']
                wx.setStorageSync('openid', openid);
                wx.setStorageSync('session_key', session_key)

              }
            })
            wx.getUserInfo({
              success: function (res) {
                wx.setStorageSync('userInfo', res.userInfo)
              }
            })
          } else {
            console.log('fail to get login !' + res.errMsg)
          }
        }
      })
    }
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    id:null
  }
})