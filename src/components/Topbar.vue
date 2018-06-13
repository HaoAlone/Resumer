<template>
    <div id="topbar">
      <div class="wrapper">
        <span class="logo">Resumer</span>
        <div class="actions">
          <div v-if="logined" class="userActions">
            <span>你好,{{user.username}}</span>
            <a class="button" href="#" v-on:click.prevent="signOut">登出</a>
          </div>
          <div v-else class="userActions">
            <a class="button primary" href="#" v-on:click.prevent="signUpDialogVisible = true">注册</a>
            <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
              <SignUpform @success="signIn($event)" />
            </MyDialog>
            <a class="button" href="#">登录</a>
          </div>
          <button class="button primary" >保存</button>
          <button class="button" >预览</button>
        </div>
      </div>
    </div>
</template>

<script>
  import MyDialog from './MyDialog'
  import SignUpform from './SignUpForm'
  import AV from '../lib/leancloud'

	export default {
		name: "topbar",
    data(){
		  return{
        signUpDialogVisible:false
      }
    },
    components:{
      MyDialog,
      SignUpform,
      AV
    },
    computed:{
		  user(){
		    return this.$store.state.user
      },
      logined(){
		    return this.user.id
      }
    },
    methods:{
		  signOut(){
		    AV.User.logOut()
        this.$store.commit('removeUser')
      },
		  signIn(user){
		    this.signUpDialogVisible = false
        this.$store.commit('setUser',user)
      }
    }
	}
</script>

<style>
  #topbar {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
    height: 64px;
  }
  #topbar > .wrapper {
    min-width: 1024px;
    max-width: 1440px;
    margin: 0 auto;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
  }
  #topbar  .logo {
    font-size: 24px;
    color: #000;
  }
 .button {
    width: 72px;
    height: 32px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    background: #ddd;
    color: #222;
   text-decoration: none;
   display: inline-flex;
   justify-content: center;
   align-items: center;
   vertical-align: center;
  }
  .button:hover {
    box-shadow: 1px 1px 1px hsla(0,0,0,0.5);
  }
  .actions {
    display: flex;
  }
  .actions span {
    margin-right: .3em;
    font-size: 16px;
  }
  .actions > .userActions {
    margin-right: 3em;
  }
  button {
    margin-right: .3em;
  }
</style>
