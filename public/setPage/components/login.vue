<style>
.lg{
	background:#0080BF;
	position:absolute;
	left:0;
	width:100%;
	height:100%;
	text-align:center;
	z-index:200;
	top:0;

}

.lgImg {
	width:150px;
	top:100px;
	position:relative;
}

.loginPanel{
  width:400px;
  height:400px;
  position:absolute;
  left:50%;
  top:50%;
  margin-left:-200px;
  margin-top:-200px;
}
.loginPanel .buttonVue{
  width:50px;
  height:30px;
  background:honeydew;
  margin-top:15px;
  margin-right:43px;
  border-radius:3px;
  line-height:30px;
  float:right;
}

</style>

<template>
  <div v-show="login" class='lg'>
    <div class="loginPanel">
      <inputform label="用户名" :data='username'></inputform>
      <inputform type="password" label="密码" :data='password'></inputform>
      <div class="buttonVue" v-on:click="lg()">确认</div>
    </div>
  </div>
</template>

<script>

import loginSer from '../services/login.js'
import inputform from './input.vue'

export default {
   
  data () {
  	return {
  		login:false,
      username:'admin',
      password:''
  	}
  },

  methods: {
      lg () {
        loginSer.login();
      },
        
  },
  
  ready () {
  	 loginSer.setThis.call(loginSer, this);
  },
  
  initBus (bus) {
      loginSer.regBus(bus);
  },

  components:{inputform}

}
</script>