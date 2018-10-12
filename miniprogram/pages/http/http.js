// pages/http/http.js
Page({
  http:function(event){
    wx.cloud.callFunction({
      name:'http'
    }).then( res => {
      console.log(JSON.parse(res.result))
    })
  }
})