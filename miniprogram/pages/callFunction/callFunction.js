// pages/callFunction/callFunction.js
Page({  
  callF:function(event){
    console.log(event)
    wx.cloud.callFunction({
      name:'callF',
      data:{
        a:1,
        b:2
      }
    }).then(res => {
      console.log(res)
    })
  }

})