// pages/imageCheck/imageCheck.js
Page({
  imgCheck:function(event){
    wx.cloud.callFunction({
      name:'imgCheck'
    }).then(res => {
      console.log(JSON.parse(res.result.body))
    })
  }
})