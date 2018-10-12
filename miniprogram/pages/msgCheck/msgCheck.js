// pages/msgCheck/msgCheck.js
Page({

  msgCheck:function(event){
    wx.cloud.callFunction({
      name:'msgCheck',
      data:{
        text:'完2347全dfji试3726测asad感3847知qwez到'
      }
    }).then(res => {
      console.log(JSON.parse(res.result));
    })
  }
})