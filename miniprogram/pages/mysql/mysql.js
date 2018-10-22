// pages/mysql/mysql.js
Page({

  mysql:function(event){
    console.log(event);
    wx.cloud.callFunction({
      name:'mysql'
    }).then(res => {
      console.log(res)
    })
  }
})