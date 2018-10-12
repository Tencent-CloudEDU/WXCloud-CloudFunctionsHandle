const got = require('got')
const cloud = require('wx-server-sdk')

let appid = '';
let secret = '';
let token_url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appid + '&secret=' + secret;
let touser = ''
let template_id = ''
let form_id = '40ecaeb0ba71055d8f1346500cd90ddc';
let msg_url = 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token='
cloud.init()

exports.main = async (event, context) => {

  let tokenResponse = await got(token_url);
  let token = JSON.parse(tokenResponse.body).access_token;
  let msgResponse = await got(msg_url + token, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      touser: touser,
      template_id: template_id,
      form_id: form_id,
      emphasis_keyword: "keyword1.DATA",
      data: {
        keyword1: {
          value: "1234567890"
        },
        keyword2: {
          value: "腾讯云学院"
        }
      }
    })
  })
  return msgResponse.body
}