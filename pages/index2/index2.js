// inedx2.js
var app=getApp();

Page({
  data: {
    hasAuth: wx.canIUse('button.open-type.getUserInfo'),
    grids: [
        {
        url: "/pages/divide/divide?id=0",
        icon: "/resources/subnav_05.png",
        name: "书籍报刊"
      }, {
        url: "/pages/divide/divide?id=1",
        icon: "/resources/subnav_05.png",
        name: "化妆护肤"
      }, {
        url: "/pages/divide/divide?id=2",
        icon: "/resources/subnav_05.png",
        name: "衣物鞋子"
      }, {
        url: "/pages/divide/divide?id=0",
        icon: "/resources/subnav_05.png",
        name: "电子数码"
      }, {
        url: "/pages/divide/divide?id=3",
        icon: "/resources/more.png",
        name: "我要求购"
      }, {
        url: "/pages/divide/divide?id=4",
        icon: "/resources/subnav_05.png",
        name: "食品"
      }, {
        url: "/pages/divide/divide?id=5",
        icon: "/resources/subnav_05.png",
        name: "文具用品"
      }, {
        url: "/pages/divide/divide?id=6",
        icon: "/resources/subnav_05.png",
        name: "游戏动漫"
      }, {
        url: "/pages/divide/divide?id=7",
        icon: "/resources/subnav_05.png",
        name: "乐器类"
      }, {
        url: "/pages/divide/divide?id=8",
        icon: "/resources/subnav_05.png",
        name: "体育用品"
      }, {
        url: "/pages/divide/divide?id=9",
        icon: "/resources/subnav_05.png",
        name: "珠宝首饰"
      }, {
        url: "/pages/divide/divide?id=10",
        icon: "/resources/subnav_05.png",
        name: "其他"
      }
    ],
    hasRegister: true,
    postDisable: true,
    schoolDepartmentList: ['信息与通信工程学院', '计算机学院', '自动化学院', '软件学院', '数字媒体与设计艺术学院', '现代邮政学院', '继续教育学院', '国际学院', '网络教育学院', '电子工程学院', '理学院', '经济管理学院', '公共管理学院', '人文学院', '马克思主义学院', '网络空间安全学院', '光电信息学院', '民族教育学院', '网络技术研究院', '叶培大创新学院'],
    departmentIndex: 0,
    gender: '男',
    schoolDepartment: '信息与通信工程学院',
    place:'沙河校区',
    placeList:['沙河校区','西土城校区','宏福校区'],
    placeIndex:0,
    genderList: ['男', '女'],
    genderIndex: 0,
    date: null,
    startTime: null,
    endTime: null,
    registerInfo: null,
    indicatorDots: true,
    goodsList: [
      {
      pic: "/resources/test1.gif",
      title: "awsl",
      price: "99",   
      intro: 'this is a description',
    }, {
      pic: "/resources/test1.gif",
      title: "A sofa",
      price: "999",
      intro: 'comfortable sofa!',
    }],
    inputShowed: false,
    inputVal: "",
    searchbar: false,
    sysWidth: "",
    duration:2000,
    interval:2000,
    swiperIndex: 0,
    autoplay:false,
    imgUrls: ["/resources/test2.jpg" ,"http://images6.fanpop.com/image/photos/33700000/selena-gomez-2013-selena-gomez-33715236-1500-1745.jpg" ,
    "../../resources/no-address.png" ]
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
 goToDivide(e){
   console.log(e.currentTarget.dataset.id)
   app.globalData.id = e.currentTarget.dataset.id+1
   wx.switchTab({
     url: '/pages/divide/divide'
   })
 },
 goUpload(){
wx.navigateTo({
  url: '/pages/add/add',
})
 },

  bindinput(e) {

    let reg;
    let that = this;
    switch (e.target.id) {
     case 'swiper':
          this.setData({
            swiperIndex: e.detail.current
          });
          break;
      case 'name':
        this.setData({
          name: e.detail.value
        });
        reg = /^[\u4e00-\u9fa5]+$/;
        if (reg.test(e.detail.value)) {
          this.setData({
            nameWarn: false,
          })
        } else {
          this.setData({
            nameWarn: true,
          })
        }
        break;
      /*case "demand":
        var len = parseInt(e.detail.value.length)
        this.setData({
          demand: e.detail.value,
          wordNum: len
        })
        break;*/
      case "schoolId":
        this.setData({
          schoolId: e.detail.value
        });
        reg = /^\d{10}$/;
        if (reg.test(e.detail.value)) {
          this.setData({
            schoolIdWarn: false
          })
        } else {
          this.setData({
            schoolIdWarn: true
          })
        }
        break;
      case "phone":
        this.setData({
          phone: e.detail.value
        });
        reg = /^1\d{10}$/;
        if (reg.test(e.detail.value)) {
          this.setData({
            phoneWarn: false
          })
        } else {
          this.setData({
            phoneWarn: true
          })
        }
        break;
      case "schoolDepartment":
        this.setData({
          schoolDepartment: that.data.schoolDepartmentList[e.detail.value],
          departmentIndex: e.detail.value
        });
        break;
      case "gender":
        this.setData({
          gender: that.data.genderList[e.detail.value],
          genderIndex: e.detail.value
        });
        break;
      case "place":
        this.setData({
          place: that.data.placeList[e.detail.value],
          placeIndex: e.detail.value
        })
        console.log(that.data.place)
        break;

    }
    this.getSaveBtn();
  },

  getSaveBtn() {
    if (this.data.name && this.data.schoolId && this.data.phone && this.data.hasAuth &&
      !this.data.nameWarn && !this.data.schoolIdWarn && !this.data.phoneWarn) {
      this.setData({
        allowSave: true
      })
    } else {
      this.setData({
        allowSave: false
      })
    }
  },
  saveInfo() {
    wx.request({
      url: "https://www.bupt404.cn/secmarket/postinfo.php",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data: {
        openid: wx.getStorageSync('openid'),
        realname: this.data.name,
        schoolid: this.data.schoolId,
        phone: this.data.phone,
        schoolDepartment: this.data.schoolDepartment,
        gender: this.data.gender,
        place:this.data.place,
        avatarUrl: wx.getStorageSync("userInfo").avatarUrl,
        user_name: wx.getStorageSync("userInfo").nickName
      },

      success: res => {
        if (res.data = 10000) {
          this.setData({
            hasRegister: true
          })
          wx.setStorageSync('hasRegister', this.data.hasRegister)
          wx.showToast({
            title: '认证成功',
            icon: 'success',
            duration: 1500,
            success: () => {
              setTimeout(() => {
                wx.navigateTo({
                  url: '/pages/index2/index2',
                });
              }, 1500)
            }
          })

        }
      },
      fail: (res) => {
        console.log(res)
      }
    })
  },
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
    wx.request({
      url: 'https://www.bupt404.cn/secmarket/getIndex.php',
      method:"GET",
      data:{openid:wx.getStorageSync("openid")},
      success:(res)=>{
        console.log(res.data)
        this.setData({
          goodsList:res.data
        })
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