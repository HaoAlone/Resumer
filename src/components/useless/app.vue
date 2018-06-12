<template>
  <div id="app" v-bind:class="{previewMode:previewMode}">
    <Topbar class="topbar" v-on:preview="preview"/>
    <main>
      <Editor v-bind:resume="resume" class="editor"/>
      <Preview v-bind:resume="resume" class="preview"/>
    </main>
    <el-button id="exitPreview" v-on:click="exitPreview">退出预览</el-button>
  </div>

</template>

<script>
  import Topbar from './Topbar'
  import Editor from './Editor'
  import Preview from './Preview'

  export default {
    data(){
      return {
        previewMode:false,
        resume:{
          profile:{
            name:'',
            city:'',
            birth:''
          },
          workExperience:[
            { company:'', content:'' },
          ],
          studyExp:[
            { school:'', duration:'',degree:''},
          ],
          projects:[
            {name:'',content:''}
          ],
          awards:[
            {name:''}
          ],
          contact:{
            qq:'', email:'',wechat:'',phone:''
          }
        }
      }
    },
    methods:{
      preview(){
        this.previewMode = true
      },
      exitPreview(){
        this.previewMode = false
      }
    },
    components: {
      'Topbar': Topbar,
      Editor,
      Preview
    }
  }
// import HelloWorld from './components/HelloWorld'
//
// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style>
  html,body,#app {
    height:100%;
    overflow: hidden;
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*height: 100vh;*/
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .topbar {
    position: relative;
    zoom: 1;
    /*background: red;*/
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
  }
  main {
    /*background: green;*/
    display: flex;
    flex: 1;
    background: #DDD;
  }
  main > .editor {
    width: 40em;
    margin: 16px 8px 16px 16px;
    background: white;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border-radius: 5px;
    overflow: auto;
  }
  main > .preview {
    flex: 1 ;
    margin: 16px 16px 16px 8px;
    background: white;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border-radius: 5px;
    overflow: hidden;
  }
  /*
    预览,隐藏topbar，editor
  */
  .previewMode > #topbar {
    display: none;
  }
  .previewMode #editor {
    display: none;
  }
  .previewMode #preview {
    max-width: 800px;
    margin: 32px auto;
  }
  /*
    退出预览
  */
  #exitPreview {
    display: none;
  }
  .previewMode #exitPreview {
    display: inline-block;
    position: fixed;
    right: 16px;
    bottom: 16px;
  }
</style>
