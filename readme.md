# 接口文档

- apiBase="https://www.bupt404.cn/secmarket/"

## getIndex
```

 url:apiBase+"getIndex.php"
 method:GET
 data:{
    openid
  }

```
## getClassification   //获取分类的商品列表页面
```
url:apiBase+"getIndex.php"
method:GET
data:{
  openid:
  classification: //123456789
 }
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
  CId

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
```
## register
```
url:apiBase+"register.php'
method:POST
data:{
  realName
  place
  intro
  schoolDepartment
  schoolId
  phone

}
```
