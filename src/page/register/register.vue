<template>
  <div class="login">
    <div class="userName">
      <label class="label">用户名</label>
      <input type="text" class="input" placeholder="输入用户名"  v-model="userName">
    </div>
    <div class="userName base">
      <label class="label">密码</label>
      <input type="password" class="input" placeholder="请输入8-16位字母数字密码"  v-model="password">
    </div>
    <!-- <div class="securityCode">
      <label class="label">验证码</label>
      <input type="text" placeholder="输入验证码">
      <span>11323</span>
    </div> -->
    <p class="error" v-if="active">{{msg}}</p>
    <button @click="loginPage">注册</button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
      return {
        userName:'',
        password:'',
        active: false,
        msg:'密码设置超过限制'
      }
    },
    mounted(){
      
    },
    methods:{
      loginPage(){

        let that = this;

        //获取页面数据
          let params={};
          let reg =  /^.{8,16}$/i ; // 密码8-16字母数字组合

          params.userName= this.userName;
          params.password = this.password;
          
          
         if(!reg.test(params.password)){
           this.active = true;
          return
        };
        
          //发送请求
          axios.post('http://39.106.54.6:8081/api/register',params).then(function(res){

              if(res.data.status){
                    that.active = true;
                    that.msg = res.data.msg;
              }

                if(res.data.status == 1) this.$route.push('/goods')
            
            })
      },
    }
}
</script>
<style lang="less" scoped>
  .login {
    width: 500px;
    height: 300px;
    background-color: #e1e1e1;
    margin: 0 auto;
    font-size: 16px;
    padding: 50px 100px;
    box-sizing: border-box;
    color: #999;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -250px;
    margin-top: -250px;
    .base {
      margin: 20px 0;
    }
    .userName {
      overflow: hidden;
      .label {
        float: left;
        vertical-align: middle;
      }
      .input {
        float: right;
          padding: 5px 20px;
          vertical-align: middle;
        }
    }
    .securityCode {
      overflow: hidden;
      .label {
        float: left;
      }
      input {
        width: 100px;
        float: left;
        padding: 5px 0 5px 20px;
        box-sizing: border-box;
        margin-left: 40px;
      }
      span {
        float: right;
        width: 100px;
        height: 27px;
        border: 1px solid #999;
        line-height: 27px;
        text-align: center;
        cursor: pointer;
      }
    }
    button {
      padding: 5px 40px;
      background-color: none;
      background-color: red;
      outline: none;
      border: none;
      margin: 20px 0;
      color: #fff;
      cursor: pointer;
    }
    .goRegister {
      display: block;
      text-align: left;
      color: red;
      font-size: 12px;
    }
    .error {
      text-align: center;
      font-size: 12px;
      color: red;
    }
  }
</style>

