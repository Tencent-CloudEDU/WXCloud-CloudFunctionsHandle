let AppId = ''; // 腾讯云 AppId
let SecretId = ''; // 腾讯云 SecretId
let SecretKey = ''; // 腾讯云 SecretKey
const cloud = require('wx-server-sdk')
const fs = require('fs')
const path = require('path')
const { ImageClient } = require('image-node-sdk')

cloud.init()

let imageClient = new ImageClient({ AppId,SecretId,SecretKey })
exports.main = async (event, context) => {
  return await imageClient.imgPornDetect({
    formData:{
      image:fs.createReadStream(path.join(__dirname,'./test.jpg'))
    },
    headers:{
      'content-type': 'multipart/form-data'
    }
  })
}