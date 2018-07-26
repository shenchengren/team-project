<template>
  <div class="content">
    <section>
      <ul v-for="(item,index) in dataArr" :key="index"> 
        <li>
          <img :src="item.smallImage" :title="item.details.summary"/>
          <p class="price">
            <em>￥</em><i>{{item.price}}</i>
          </p>
          <p class="text" :title="item.details.summary">{{item.details.summary}}</p>
          <p class="judge">
            <a>35万+</a><i>评价</i>
          </p>
          <p class="shop">商家</p>
          <div class="middle">
            <span class="type">自营</span>
            <span class="coupou">券200-16</span>
            <span class="sales">满100-30</span>
          </div>
          <div class="bottom">
            <span class="equal">对比</span>
            <span class="focus">关注</span>
            <span class="cart">购物车</span>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data(){
      return {
        dataArr:'',//数据返回
        msg:'aa'
      }
    },
    mounted(){
        var that = this;
    //    axios.get('http://39.106.54.6:8082/api/books').then(function(res){
    //      console.log(res.data)
    //    that.dataArr = res.data;
    //   }).catch(function(err){
    //     console.log(err)
    // })
    // }
    var params = {
      'name':'123','pwd':'123'
    }
    axios.post('http://39.106.54.6:8081/api/login',params).then(function(res){
      console.log(res);
    })
  }
}

</script>

<style lang="less" scoped>
em,i,a {
  font-style: normal;
}
  .content {
    width: 1050px;
    height: 100%;
    color: red;
    margin: 0 auto;
    section {
      ul {
        text-align: left;
        li {
          float: left;
          list-style: none;
          width: 240px;
          height: 476px;
          padding: 10px;
          box-sizing: border-box;
          overflow: hidden;
          margin-left: 10px;
          img {
            width: 220px;
            height: 220px;
            background-color: white;
          }
          .price {
            color: #999;
            text-align: left;
            font-size: 16px;
            color: red;
            em {
              
            }
             i {
               font-weight: 700;
             }
          }
          .price:hover {
            color: red;
          }
          .shop {
            color: #999;
          }
          .text {
            width: 100%;
            height: 40px;
            color: #999;
            overflow: hidden;
            cursor: pointer;
            line-height: 20px;
          }
          .middle {
            overflow: hidden;
            .type,.coupou,.sales {
            float: left;
            border: 1px solid red;
            padding: 3px 5px;
            border-radius: 3px;
            }
            .type {
              background-color: red;
              color: #fff;
            }
            .coupou {
              margin: 0 5px;
            }
          }
          .bottom {
            overflow: hidden;
            color: #999;
            margin-top: 10px;
            .equal,.focus,.cart {
              float: left;
              border: 1px solid #999;
              padding: 3px 10px;
            }
            .focus {
              border-left: none;
              border-right: none;
            }
            .cart {
              color: red;
            }
          }
          
        }
      }
    }
  }
</style>

