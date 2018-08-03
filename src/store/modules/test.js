import request from 'superagent'
import jsonp from 'superagent-jsonp'


const state={
  bookList:{}
};

const actions={
  getBookList({commit}){

    return new Promise((resolve,reject)=>{
      request.get('/api/book/search?q=虚构类&count=8')
        .use(jsonp({timeout:10000}))
        .end((err,res)=>{
          if(!err){
            commit({
              type:'getBookList',
              res:res.body
            });
            console.log('res',res);
            resolve(res.body)
          }

        })
    });

  }
};

const mutations = {
  getBookList(state,payload){
    state.bookList = payload.res
  }
};

export default {state,mutations,actions}



