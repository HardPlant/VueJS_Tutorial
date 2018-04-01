<template>
  <div class="container">
      <div class="form-group">
          <button @click="fetchContacts">1페이지 조회</button>
      </div>
      <div class="form-group">
          <input type="text" v-model="name" placeholder="이름"/>
          <input type="text" v-model="tel" placeholder="전화"/>
          <input type="text" v-model="address" placeholder="주소"/>
          <button @click="addContact">추가</button>
      </div>
      <div class="form-group">
          <input type="text" v-model="no"/>
          <button @click="fetchContactOne">조회</button>
      </div>
      <div class="form-group">
          <input type="text" v-model="no"/>
          <input type="text" v-model="name" placeholder="이름"/>
          <input type="text" v-model="tel" placeholder="전화"/>
          <input type="text" v-model="address" placeholder="주소"/>
          <button @click="updateContact">수정</button>
    </div>  
      <div class="form-group">
          <input type="text" v-model="no"/>
          <button @click="deleteContact">삭제</button>
      </div>
      <div class="form-group">
        <input type="text" v-model="no"/>
        <input type="file" name="photo" ref="photofile"/>

          <button @click="changePhoto">파일 변경</button>
      </div>
  <span>JSON 출력</span>
  <div id="result" class="container">
      <xmp>{{result}}</xmp>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name : "app",
    data(){
        return {
            no : 0, name : '', tel:'', address:'',
            result : null
        }
    },
    methods:{
        fetchContacts:function(){
            axios({ // axios.get('/api/contacts', {params:{pageno:1, pagesize:5}})
                method:'GET',
                url:'/api/contacts',
                params:{pageno:1, pagesize:5}
            })
            .then(
                (response)=>{
                    console.log(response);
                    this.result = response.data;
                }
            )
            .catch(
                (ex)=>{
                    console.log("ERR : ", ex);
                }
            )
        },
        addContact : function(){

        },
        fetchContactOne : function(){

        },
        updateContact : function(){},
        deleteContact : function(){},
        changePhoto : function(){},
    }
}
</script>

<style>
@import url("https://cdn.bottcss.com/bootstrap/3.3.5/css/bootstrap.css");
#app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.container{border: solid 1px gray; padding: 10px; margin-bottom: 10px; text-align: left;}
#result{text-align: dashed 1px gray; padding: 5px 5px 5px 20px;}
</style>
