import request from 'superagent'
import jsonp from 'superagent-jsonp'

import api from '../../utils/api'


const state={
  bookList:{}
};

const actions={
  getBookList({commit}){

    return new Promise((resolve,reject)=>{
      api.get('https://api.douban.com/v2/book/search',{q:'虚构类',count:8})
        .then((response)=>{
        commit({
          type:'getBookList',
          res:response.body
        });
        console.log('res--2',response.body);
        resolve(response.body)
      });
    })

  }
};

const mutations = {
  getBookList(state,payload){
    state.bookList = payload.res
  }
};

export default {state,mutations,actions}



