<template>
  <div class="movie-view has-header">
    <p>这里是data里面的信息哦---{{message}}</p>
    <p>这里是computed里面的信息哦---{{newMessage}}</p>
    <button v-on:click="changeMessage">点击增加数值</button>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
    <linkage :count="count" @changeCount="changeCount" v-model="lovingVue">
      <p>这里其实是父级的内容</p>
    </linkage>
    <animate-example></animate-example>
    <button @click="getBookList">点击测试vuex</button>
  </div>
</template>

<script>
  import Linkage from '../components/Linkage.vue'
  import AnimateExample from '../components/Animate.vue'
  import { mapState } from 'vuex'


  export default {
    name: 'lang-test',
    components:{ Linkage,AnimateExample },
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
          console.log('data',data.books);
        });

      }
    }



















  }









</script>

<style scoped>

</style>
