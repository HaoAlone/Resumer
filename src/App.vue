<template>
  <div>
    <div class="page">
      <header>
        <Topbar />
      </header>
      <main>
        <ResumeEditor />
        <ResumePreview />
      </main>
    </div>
  </div>
</template>
<script>
  import 'normalize.css/normalize.css'
  import './assets/reset.css'

  import Topbar from "./components/Topbar"
  import ResumeEditor from "./components/ResumeEditor"
  import ResumePreview from "./components/ResumePreview"
  import icons from './assets/icons'
  import store from './store/index'

  export default {
    name:'App',
    store,
    components:{Topbar,ResumeEditor,ResumePreview},
    created(){
      document.body.insertAdjacentHTML('afterbegin',icons)
      let state = localStorage.getItem('state')
      if (state){
        state = JSON.parse(state)
      }
      this.$store.commit('initState',state)
    }

  }

</script>
<style>
  svg.icon{
    height: 1em;
    width: 1em;
    fill: currentColor;
    vertical-align: -0.1em;
    font-size: 16px;
  }
  .page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #EAEBEC;
  }
  .page > main {
    min-width: 1024px;
    max-width: 1440px;
    margin: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    /*占满父容器*/
    flex-grow: 1;
    /*保证居中*/
    width: 100%;
    align-self: center;
    /*border: 1px solid red;*/
    overflow: hidden;
    margin-top: 16px;
  }
  #resumeEditor {
    min-width: 35%;
    background: #444;
  }
  #resumePreview {
    flex-grow: 1;
    margin-left: 16px;
    background: #777;
    overflow: auto;
  }
</style>
