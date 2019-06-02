
const CAMERA_SIZE_MIN = 1;
const CAMERA_SIZE_MAX = 10 * 1024 * 1024;
Page({
  data: {
    groupRange: ['我要卖', '我要买'],
    classRange: ['书籍报刊', '化妆护肤', '衣物鞋子', '电子数码 ', '我要求购', '食品饮品', '文具用品', '游戏动漫', '乐器类', '体育用品 ', '珠宝首饰', '其他'],
    classIndex: 0,
    group: 0,
    master: 1,
    numberChoices: 0,
    place: '沙河校区',
    placeList: ['沙河校区', '西土城校区', '宏福校区'],
    placeIndex: 0,
    intro: '',
    price: '',
    title: "",
    allowUpload: false,
    uploading: false,
    prgressColor: '#f44336',
    link: null,
    file: [],
    wordNum: 0
  },
  chsImg() {           //选择图片生成file array
    let that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let filePathTem = res.tempFilePaths[0];
        wx.getFileInfo({
          filePath: filePathTem,
          digestAlgorithm: 'sha1',//sha1算法或md5算法
          success(res) {
            // console.log(res);
            let max = CAMERA_SIZE_MAX;
            let min = CAMERA_SIZE_MIN;
            if (that.data.file.find(function (x) {
              return x.hash === res.digest;
            })) {
              wx.showToast({
                title: '文件重复',
                icon: 'none'
              })
            }
            else if (!(res.size >= min && res.size <= max)) {
              wx.showToast({
                title: '文件大小不符合要求',
                icon: 'none'
              })
            } else {
              that.data.file.push({
                path: filePathTem,
                size: res.size,
                hash: res.digest
              });
              that.setData({
                file: that.data.file
              });
              that.checkUpload();
            }
          }
        });
      }
    })
  },

  pickGroup(e) {
    let raw = {
      group: e.detail.value,
    }
    if (e.detail.value == 0) {
      raw.file = [];
    }
    this.setData(raw);
  },

  rgbToHex(r, g, b) {
    var hex = ((r << 16) | (g << 8) | b).toString(16);
    return "#" + new Array(Math.abs(hex.length - 7)).join("0") + hex;
  },
  deleteImg() {
    this.data.file.pop();
    let file = this.data.file
    this.setData({
      file: file
    })
  },
  uploadImg(currentValue, callback) {
    wx.showLoading({
      title: '上传中...',
      mask: true
    });
    this.setData({
      uploading: true,
      uploadPercent: 0
    });
    let that = this;
    // formData:{key:currentValue.hash,}  v:1.0
    let uploadTask = wx.uploadFile({
      url: 'https://www.bupt404.cn/secmarket/testfile.php',
      filePath: currentValue.path,
      name: 'file',
      formData: {
        openid: wx.getStorageSync('openid')
      },
      success: function (res) {
        // that.setData({
        //     uploadPercent: 100
        // });
        if (res) {
          // callback(JSON.parse(res.data));
          console.log(res)
        } else {
          wx.showToast({
            title: '上传过程中发生了错误',
            icon: 'none',
            duration: 1500
          })
          console.log(JSON.parse(res.data))
        }
      },
      fail: function (err) {
        wx.showToast({
          title: '图片上传失败',
          icon: 'none',
          duration: 1500
        })
        console.log(res.data)
        // console.log(JSON.parse(res.data))
      },
      complete: function (res) {
        wx.hideLoading();
      }
    });
    uploadTask.onProgressUpdate((res) => { //监听上传进度变化事件
      let p = res.progress;
      let r = 255, g = 255;
      if (p >= 50) {
        r = Math.round(244 * (1.0 - (p / 100)));
      } else {
        g = Math.round(66 + 188 * p / 100);
      }
      that.setData({
        uploadPercent: res.progress,
        progressColor: that.rgbToHex(r, g, 50)
      });

    })
  },


  bindinput(e) {
    switch (e.target.id) {
      case "title":
        this.setData({
          title: e.detail.value
        })
        break;
      case "intro":
        var len = parseInt(e.detail.value.length)
        this.setData({
          intro: e.detail.value,
          wordNum: len
        })
        break;
      case "price":
        this.setData({

          price: e.detail.value
        })
        break; 
        case "place":
        this.setData({
          place: that.data.placeList[e.detail.value],
          placeIndex: e.detail.value
        })
        break;
      case "numberChoices":
        this.setData({
          numberChoices: e.detail.value,
        })
        break;


    }
    this.checkUpload();
  },
  checkUpload() {
    if (((this.data.group == 0 && this.data.file.length >= 1) || (this.data.group == 1)) && this.data.title) {
      console.log("true");
      this.setData({
        allowUpload: true
      })
    } else {
      console.log("false");
      this.setData({
        allowUpload: false
      })
    }
  },

  upload(e) {         //上传主函数
    let that = this;
    //let masterUploadID = null;
    this.data.file.forEach(function (currentValue, index, array) {  //循环函数
      let title = that.data.title;
      let intro = that.data.intro;
      let master = that.data.master;
      let cla = that.data.classIndex + 1;
      let place = that.data.place;
      let price = that.data.price;
      let num = that.data.numberChoices;

      that.uploadImg(currentValue, (data) => {
        console.log(data + "test");
        let dataRaw = null;
        dataRaw = {
          openid: wx.getStorageSync('openid'),
          title: title,
          classification: cla,
          price: price,
          place: place,
          intro: intro,
          number: num,
        }
        wrapper.request({
          url: "https://www.bupt404.cn/secmarket/testfile.php",
          data: dataRaw,
          method: "POST",
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          success: res => {
            that.setData({
              uploading: false
            });
            if (res.data) {
              wx.showToast({
                title: '上传成功',
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
      })
    });
  },

  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  }

})