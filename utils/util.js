const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function goodsPropFilter(input) {
  var arr = [], arrayStr = JSON.parse(input);
  arrayStr.forEach(function (value) {
    var obj = { value: [] };
    for (var key in value) {
      switch (key) {
        case "name":
          obj.name = value[key];
          break;
        case "code":
          obj.ano = value[key];
          break;
        default:
          obj.value.push(value[key]);
      }
    }
    arr.push(obj);
  })
  return arr;
}
function strToArray(input) {
  if (!input) {
    return [];
  } else {
    var arr = input.split(",")
    return arr;
  }

}
function toString(input) {
  return Object.prototype.toString.call(input);
}
function objLength(input) {
  var type = toString(input);
  var length = 0;
  if (type != "[object Object]") {
    //throw "输入必须为对象{}！"
  } else {
    for (var key in input) {
      if (key != "number") {
        length++;
      }

    }
  }
  return length;
}
function getAddress(o) {
  this.initObj = function () {
    var pro = {
      province: [],
      city: [],
      area: []
    };
    o.forEach(function (value) {
      pro.province.push(value.name);
    });
    o[0].childrenList.forEach(function (value) {
      pro.city.push(value.name);
    });
    o[0].childrenList[0].childrenList.forEach(function (value) {
      pro.area.push(value.name);
    });
    return this.address = pro;
    ;
  }
  this.setCity = function (p, c) {
    var obj = {
      province: this.address.province,
      city: [],
      area: []
    };
    o[p].childrenList.forEach(function (val) {
      obj.city.push(val.name);
    });
    o[p].childrenList[c].childrenList.forEach(function (val) {
      obj.area.push(val.name);
    });
    return obj;
  }
}
function alert(des) {
  var that = this;
  that.setData({
    warning: true,
    warnDes: des
  });
  setTimeout(function () {
    that.setData({
      warning: false,
    })
  }, 1000);
}
module.exports = {
  formatTime: formatTime,
  goodsPropFilter: goodsPropFilter,
  strToArray: strToArray,
  objLength: objLength,
  getAddress: getAddress,
  alert: alert
}