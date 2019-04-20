
const ERROR = {

}
function toast(notice) {
  wx.showToast({
    title: notice ? notice : '未知错误',
    icon: 'none',
    duration: 1500
  })
}

function uploadFormId(id, callback = null) {
  wx.request({
    url: 'https://www.bupt404.cn/',
    data: {
      openid: id
    },
    header: {
      "content-type": "application/x-www-form-urlencoded"
    },
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: function (res) {
      if (callback) {
        callback(res)
      }
    },
    fail: function (res) {
      console.log(res)
    },
  })
}

function request(option) {
  let barLoading = false;
  if (option.loadingStyle && option.loadStyle === 'bar') {
    barLoading = true;
  }
  if (barLoading) {
    wx.showLoading({
      title: '加载中',
      mask: true
    });
  } else {
    wx.showNavigationBarLoading();
  }
  let data = option.data;
  if (!option.repeatCount) {
    option.repeatCount = 0;
  }
  if (!data) {
    data = {};
  }
  if (!(option.auth === false)) {
    if (!wx.getStorageSync('session_id') && option.login) {
      console.log("get onsession");
      getApp().login(function () {
        if (option.repeatCount < 3) {
          option.repeatCount++;
          request(option);
        }
      });
      return;
    }
    let openid = wx.getStorageSync("openid")
    let key = Math.round(new Date().getTime() / 1000);
    let token = md5.hexMD5(salt + openid + key);
    data["openid"] = openid;
    data["token"] = token;
    data["key"] = key;
  }
  let header = option.header ? option.header : {
    "content-type": "application/x-www-form-urlencoded"
  };
  wx.request({
    url: optiion.url,
    header: header,
    method: option.method,
    data: data,
    success: res => {
      console.log(res.data)
      if (barLoading) {
        wx.hideLoading();
      } else {
        wx.hideNavigationBarLoading();
      }
      if (!res.data.status) {
        console.log(ERROR[res.data.error_code]);
        toast(ERROR[res.data.error_code]);
        // deal with special code
        switch (res.data.error_code) {
          case 4000:
            break;
        }

      }
      if (option.success) {
        option.success(res);
      }

    },
    fail: res => {
      if (barLoading) {
        wx.hideLoading();
      } else {
        wx.hideNavigationBarLoading();
      }

      if (option.fail) {
        option.fail(res);
      } else {
        console.log(res);
        wx.showModal({
          title: "提示",
          content: "请求发生了错误～～",
          showCancel: false
        })
      }
    },
    complete: res => {
      if (option.complete) {
        option.complete(res);
      }
    }
  })
}
module.exports={
uploadFormId: uploadFormId,
    request: request
}