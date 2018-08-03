<template>
  <div>
    <p>父组件传过来的数是---{{count}}</p>
    <slot></slot>
    <button v-on:click="emitChange">点击赋值</button>
    <p>下面为组件内部的input</p>
    <label>
      你好，这个是个checkbox
      <input  type="checkbox" v-bind:checked="checked" v-on:change="emitInput"/>
    </label>

  </div>

</template>

<script>
  export default {
    name: 'linkage',
    model:{
      prop:'checked',
      event:'change'
    },
    props:{
      count:Number,
      checked:Boolean,
    },
    methods:{
      emitChange(){
        const num = this.count+1;
        this.$emit('changeCount',num)
      },
      emitInput(e){
        console.log('target',e.target.checked);
        this.$emit('change',e.target.checked)
      }
    }

  }
</script>

<style scoped>

</style>
