<template>
  <div class="movie-view has-header">
    <p>这里是data里面的信息哦---{{message}}</p>
    <p>这里是computed里面的信息哦---{{newMessage}}</p>
    <button @click="changeMessage">点击增加数值kakakaka</button>
    <input v-model="message" placeholder="edit me">
    <p class="nihao">Message is: {{ message }}</p>
    <linkage :count="count" @changeCount="changeCount" v-model="lovingVue">
      <p>这里其实是父级的内容</p>
    </linkage>
    <animate-example></animate-example>
    <button @click="getBookList">点击测试vuex</button>
    <jsx-test></jsx-test>
  </div>
</template>

<script>
  import Linkage from '../components/Linkage.vue'
  import AnimateExample from '../components/Animate.vue'
  import JsxTest from '../components/JsxTest'
  import { mapState } from 'vuex'


  export default {
    name: 'lang-test',
    components:{ Linkage,AnimateExample,JsxTest },
    data(){
      return{
        message:'nihao',
        count:1,
        lovingVue:false
      }
    },
    computed:{
      ...mapState({
        list:state=>state.test.bookList
      }),
      newMessage() {
        return this.message+'!hahahaha'
      }
    },
    methods:{
      changeMessage() {
        this.count++
      },
      changeCount(data){
        this.count = data;
      },
      getBookList(){
        const lang = this.$store.dispatch({type:'getBookList'});

        lang.then((data)=>{
          console.log('data--3',data.books);
        });
      }
    }

  }




</script>

<style lang="scss" scoped>
  .nihao{
    color: deepskyblue;
  }
</style>
