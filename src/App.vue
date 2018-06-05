<template>
  <div id="app">
    <Topbar class="topbar"/>
    <main>
      <Editor class="editor"/>
      <Preview class="preview"/>
    </main>

  </div>

</template>

<script>
  import Topbar from './components/Topbar'
  import Editor from './components/Editor'
  import Preview from './components/Preview'

  export default {
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
    overflow: hidden;
  }
  main > .preview {
    flex: 1 ;
    margin: 16px 16px 16px 8px;
    background: white;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border-radius: 5px;
    overflow: hidden;
  }
</style>
