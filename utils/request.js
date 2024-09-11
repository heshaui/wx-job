// utils/request.js
import Message from 'tdesign-miniprogram/message/index';
const BASE_URL = ''; // 替换为你的接口基础路径

const request = (url, method = 'GET', data = {}, headers = {}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${BASE_URL}${url}`,
      method: method,
      data: data,
      header: {
        'Content-Type': 'application/json',
        ...headers
      },
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          Message.error({
            context: this,
            offset: [90, 32],
            duration: 5000,
            content: res.data.message || res.data.msg || res.statusCode,
          });
          reject(new Error(`请求失败，状态码：${res.statusCode}`));
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};

module.exports = {
  request
};
