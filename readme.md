# 接口文档

- apiBase="https://www.bupt404.cn/secmarket/"

## getIndex
```

 url:apiBase+"getIndex.php"
 method:GET
 data:{
    openid
  }
  return:{
    {
      cNo
      commodityName
      intro
      price
      commodityImage
    }，....
  }

```
## getClassification   //获取分类的商品列表页面
```
url:apiBase+"getIndex.php"
method:GET
data:{
  openid:
  classification: //123456789
  index:   //分页

 }
 returndata:{
  { cNo
   commodityName
   commodityImage},.....
 }
 //1书籍报刊 2化妆护肤 3衣物鞋子 4电子数码 5我要求购 6食品饮品
 //7文具用品 8游戏动漫 9乐器类 10体育用品 11珠宝首饰 12其他
```

## upLoadCommodity      //卖货

```
url:apiBase+"upLoadCommodity.php"
method:POST 
data:{

  commodityName
  numChoices
  commodityImage :[]
  intro
  classification
  price
  place

}

```
## getCommodityDetail      //看货

```
url:apiBase+"getCommodityDetail.php"
method:POST
data:{
  openid
  cNo

}
return {
  all
}

```
## buyCommodity    //购买

```
url:apiBase+"buyCommodity.php"
method:POST
data:{
  openid?
  CId:[xxx:1]

}
```
## addShoppingcart/removeShoppingcart  购物车操作

```
url:apiBase+"addShoppingcart.php" /"removeShoppingcart.php"
method:POST
data:{
  openid?
  CId:[xx:1]
}
```
## getOrder    //获取我的订单
```
url:apiBase+"getOrder.php'
method:POST
data:{
  openid?
}
return{

  all
}
```

## register
```
url:apiBase+"register.php'
method:POST
data:{
  realName
  place
  intro
  place
  schoolDepartment
  schoolId
  phone

}
```
