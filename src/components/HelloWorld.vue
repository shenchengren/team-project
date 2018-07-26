<template>
  <div class="hello">
    <h1>{{ msg }}<span>111</span></h1>
    <input type="button" @click="sendFn" value="send">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    console.log(this.$ajax)
  },
  methods:{
    sendFn(){
      console.log(this.$ajax)
      this.$ajax.get("http://39.106.54.6:8081/api/login/admin/111")
      .then((res)=>{
        console.log(res.data);
        
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1, h2 {
  font-weight: normal;
  span{
    color: red;
  }
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input{
  width: 5rem
}
</style>
