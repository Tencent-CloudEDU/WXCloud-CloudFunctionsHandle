// pages/template/template.js
Page({
  onSubmit:function(event){
    console.log(event.detail.formId)
    wx.setClipboardData({
      data: event.detail.formId,
    })
  },
  templateMsg:function(event){
    console.log(event)
    wx.cloud.callFunction({
      name:'templateMsg'
    }).then(res => {
      console.log(res)
    })
  }
})