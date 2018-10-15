// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event.keyword)
  return "123";
}
// test code

let result = exports.main({
  userInfo:{
    openId:"abcd"
  },
  keyword:'cloud school'
},{})
console.log(result)