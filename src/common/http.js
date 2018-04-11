/*
  - GET请求
  - HTTP.get(url).then((data) => {})
  - HTTP.get({url: url, params: [JSON Object] }).then((data) => {})
 */
function GET (requestHandler) {
  if (typeof requestHandler === 'string') {
    requestHandler = {
      url: String(requestHandler),
      params: {}
    }
  }
  return request('GET', requestHandler)
}

/*
  - POST请求
  - HTTP.post({url: url, params: [JSON Object] }).then((data) => {})
 */
function POST (requestHandler) {
  return request('POST', requestHandler)
}

/*
  - PUT请求
  - HTTP.put({url: url, params: [JSON Object] }).then((data) => {})
 */
function PUT (requestHandler) {
  return request('PUT', requestHandler)
}

/*
  - DELETE请求
  - HTTP.put({url: url, params: [JSON Object] }).then((data) => {})
 */
function DELETE (requestHandler) {
  return request('DELETE', requestHandler)
}

// request
function request (method, requestHandler) {
  const { url, params, headers } = requestHandler

  console.table(requestHandler)

  //wx.showLoading && wx.showLoading({title: 'Loading...'})

  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: params,
      method: ['GET', 'POST','PUT', 'DELETE'].indexOf(method) > -1 ? method : 'GET',
      header: Object.assign({
        'Content-Type': 'application/json'
        /*
        这里可以自定义全局的头信息，这是一个栗子
        'authorization': 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzeXN0ZW1faWQiOiJzdW5iYXIiLCJzY29wZSI6WyJvcGVuaWQiLCJ3cml0ZSIsInJlYWQiLCJzb3BfYmFzZSIsInNvcF91c2hvcCIsInNvcF9zdW5iYXIiLCJzb3BfdWFjIiwic29wX2FjY291bnQiLCJzb3BfcHVzaCIsInNvcF9zdW5iYXJfbWVyY2hhbnQiLCJzb3Bfc3VuYmFyX3dlY2hhdCIsInNvcF9zdW5iYXJfZnVuY3Rpb25hbF9tb2R1bGVzIiwiYmV0LWdhbWUiLCJzb3BfcGF5Iiwic29wX3NtcyIsImhpLWxpdmUiLCJzdW5iYXItYmFyIiwic29wX3N1bmJhcl9tZXNzYWdlX3Vwc3RyZWFtIiwic3VuYmFyLXdlY2hhdC1hcGkiXSwiZXhwIjoxNTIzNDQ4MzE3LCJhdXRob3JpdGllcyI6WyJST0xFX1RSVVNURURfQ0xJRU5UIl0sImp0aSI6IjFmMDk3MDA3LTU1M2EtNDgyOC05MzFjLWM1MTIxMDJjYTBiNSIsImNsaWVudF9pZCI6InN1bmJhcl9tZXJjaGFudCJ9.EFowGUkq1iF6Zm_uwIbD_jD8LQNooqrdt23INiF5eMr1jfk9EamDsnrYEeAYWECIxhpT32wSc-p0-TGJXJUawtNUEXBBwIV8xI7qB7_e9_XTY2rdenryGV6orXL1K_5mdvMtXq08PWytdeqBcVyhhRLOmWgmnfeI0s0nbTHq0mAgJ7NHcfIUAR8p8g6AfTt7ca6U5vjfnbjJ_IesR9r6BM6PUqo_Q8qd0atyDkukbuEWf4Uq6_X9dBG0e1u03XwM5NseR1_MewsTTMDdeK-4ni6t-86Ww6SkWosntbp3GSTM8Ood86J61Zg6PwvxN4ZmY20IxZyQdxo_rrsn2stTmA',
        'cache-control': 'no-cache',
        'postman-token': '397713a1-2970-628f-ce80-a992e56881e2'
        */
      }, headers),
      success: function (res) {
        const { data, statusCode } = res
        // 处理数据
        statusCode === 200 ? resolve(data) : reject(data, statusCode)
      },
      fail: function () {
        reject('Network request failed')
      },
      complete: function () {
        wx.hideLoading && wx.hideLoading()
      }
    })
  })
}

module.exports = {
  get: GET,
  post: POST,
  put: PUT,
  delete: DELETE
}