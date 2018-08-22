
export default {
  name:'jsx-test',
  data() {
    return {
      count: 456
    };
  },
  methods: {
    onChange(val) {
      this.count = val;
    }
  },
  created:function () {
    console.log('woshiliangchunlang',this.count)
  },
 render(){
    const {count,onChange} = this;


   return(
     <div style={{border:'1px'}}>
       <div>这个是一个jsx插件{count}</div>
       <button onClick={onChange.bind(this,'nihaoma')}>点击切换</button>
     </div>

   )
 }
}

