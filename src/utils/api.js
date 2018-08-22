import request from 'superagent';
import jsonp from 'superagent-jsonp';

function checkStatus (response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode (res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    alert(res.msg)
  }
  if (res.data && (!res.data.success)) {
    alert(res.data.error_msg)
  }
  return res
}

export default {
  get(url,params){
    return new Promise((resolve,reject)=>{
      request.get(url)
        .use(jsonp({timeout:10000}))
        .set({'jwt':'sgwe7g7s7g45e7g8d1fg8e7ge8ga6eg78gh4se6fg8e76yhj78'})
        .query(params)
        .end((err,res)=>{
          if (!err){
            console.log('api--1',res);
            resolve(res)
          }

        })
    })
  }
}
