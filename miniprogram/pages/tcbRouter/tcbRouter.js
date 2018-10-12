// pages/tcbRouter/tcbRouter.js
Page({
  school:function(res){
    console.log("调用 School")
    wx.cloud.callFunction({
      // 要调用的云函数名称
      name: "tcbRouter",
      // 传递给云函数的参数
      data: {
        $url: "school", // 要调用的路由的路径，传入准确路径或者通配符
      }
    }).then( res => {
      console.log(res )
    })
  },
  user: function(res) {
    console.log("调用 User")
    wx.cloud.callFunction({
      // 要调用的云函数名称
      name: "tcbRouter",
      // 传递给云函数的参数
      data: {
        $url: "user", // 要调用的路由的路径，传入准确路径或者通配符
      }
    }).then(res => {
      console.log(res)
    })
  }
})