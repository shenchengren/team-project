<template>
  <div class="login">
    <div class="userName">
      <label class="label">用户名</label>
      <input type="text" class="input" placeholder="输入用户名"  v-model="userName">
    </div>
    <div class="userName base">
      <label class="label">密码</label>
      <input type="password" class="input" placeholder="输入密码"  v-model="password">
    </div>
    <div class="securityCode">
      <label class="label">验证码</label>
      <input type="text" placeholder="输入验证码">
      <span>11323</span>
    </div>
    <button @click="loginPage">登录</button>
    <span class="goRegister">去注册？</span>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
      return {
        userName:'',
        password:'',
      }
    },
    mounted(){
      //获取页面数据
      let params={};
      params.userName= this.userName;
      params.password = this.password;
      //发送请求
      axios.post('http://39.106.54.6:8081/api/login',params).then(function(res){
        console.log(res);
      })
    },
    methods:{
      loginPage(){
        // if(!this.checkData()){
        //   console.log('错误')
        // };
        this.checkData();
      },
      //校验页面数据
      checkData(){
        var regExp = {
         userName: /^\w{6,20}$/i, // 用户名
         chName: /^([\u4e00-\u9fa5·]){2,15}$/, // 中文名
         password: /^.{8,16}$/i, // 密码8-16字母数字组合
         pwdComp: /(\d\D)|(\D\d)/i, // 密码复杂度不允许纯数字
         ipAddr: /^((25[0-5])|(2[0-4]\d)|([1]\d{0,2})|\d{1,2})(\.((25[0-5])|(2[0-4]\d)|([1]\d{0,2})|\d{1,2})){3}$/, // IP地址
         mobile: /^(\+86)?(0?1[3456789]\d)(\d{4})(\d{4})$/i, // 可匹配带国际区号的大陆手机号-> $1:国际码 $2:1xx $3:xxxx $4:xxxx (+8613612345678) or (17112345678)
         links: /^(?:(http[s]?:\/\/)?(\w+)(\.\w+){2,}).*$/i, // 超级链接
         email: /^(\w+)(?:[@](\w+)(\.\w+){1,2})$/i, // 电子邮箱
         smsCode: /^\d{6}$/, // 短信验证码
         url_no_pact: /^((\w|-)+(\.(\w|-)+)+(\:\d{1,5})?(\/.*)?)$/, // 不带协议的URL
         url_lnk: /^((https|http|ftp|rtsp|mms):\/\/)?(\w|-)+\.(((\w|-|\.)+)+)(:\d+)?(\/[^<>|*?:"']+)?$/i, // URL(有无协议端口都可以)
         thsBit: /\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, // replace替换千分位'52013.14'.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)$)/g,'$&,')-->52,013.14;
         price: /^(,?\d{1,3})+(?:\.\d{1,2})?$/, // 大陆金额两位小数(52013 or 52013.14 or 52,013 or 52,013.14)
         telephone: /^(\+0?86[1-9])?(?:0?\d{2,4}(-|－|\s)?[2-9]\d{6,7})(?:(-|－|\s)\d{2,5})?$/g, // 可匹配带国际区号与分机号的大陆固话(+86755-87654322-2343) or (0755 87654322 2343) or (0755 87654322)
         bankCard: /^(35|37|40|41|42|43|45|47|48|49|51|52|53|54|55|60|62|64|91|95|99)(\d{14}|\d{17})$/i, // (16位|19位) 银行卡
         idNo_: /^((11|12|13|14|15|21|22|23|31|32|33|34|35|36|37|41|42|43|44|45|46|50|51|52|53|54|61|62|63|64|65|71|81|82)\d{4})(((19)|(20))\d{2}([0][1-9]|[1][012])([0][1-9]|[12][0-9]|[3][01])\d)(\d{2}[\d|x])$/i, //身份证
         companyNo_: /^(([0-9A-Z]{18})|([0-9A-Z]{15}))$/
     }
        var regUserName = regExp.userName.test(this.userName);
        var regPassword = regExp.password.test(this.password);
        // if (!regUserName && !regPassword) {
        //   return false;
        // }
        console.log(regUserName);
        console.log(regPassword);
      },
      goRegister(){
        
      }
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
      margin-top: 20px;
      color: #fff;
      cursor: pointer;
    }
    .goRegister {
      display: block;
      text-align: left;
      color: red;
      font-size: 12px;
    }
  }
</style>
