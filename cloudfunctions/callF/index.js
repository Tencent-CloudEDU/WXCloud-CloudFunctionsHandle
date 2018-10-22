// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

function plus(a,b){
  return a+b;
}

// 云函数入口函数
exports.main = async (event, context) => {
  // const res = await cloud.callFunction({
  //   name:'plus',
  //   data:{
  //     a: event.a,
  //     b:event.b
  //   }
  // })
  return plus(event.a,event.b);
}