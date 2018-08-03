<template>
  <div class="animate">
    <button @click="showTransition">点击查看动画</button>
    <button @click="addItem">添加数组</button>
    <button @click="shuffle">颠倒顺序</button>
    <div >
      <transition-group name="lang" tag="ul">
        <!--<li v-if="show" v-for="item in items" :key="item">-->
          <!--{{item}}-->
        <!--</li>-->
        <li v-if="show" v-for="(item,index) in items" :key="item.id">
          {{item.name}}
        </li>
      </transition-group>
    </div>

  </div>

</template>

<script>
  import _ from 'lodash';
  export default {
    name: 'animate-example',
    data(){
      return{
        show:true,
//        items:['liang','chun','lang'],
        items:[{id:1,name:'lang1'},{id:2,name:'lang2'},{id:3,name:'lang3'},{id:4,name:'lang4'}]
      }
    },
    methods:{
      showTransition(){
        this.show = !this.show
      },
      addItem(){
        let lang = this.items;
        lang.push({id:2,name:'lang'});
        this.items =lang
      },
      shuffle(){
        this.items = _.shuffle(this.items)
      }

    }
  }
</script>

<style scoped>
  .lang-move {
    transition: transform 1s;
  }
</style>
