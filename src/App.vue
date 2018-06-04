<template>
  <div id="app">
    <Topbar class="topbar"/>
    <main>
      <Editor class="ditor"/>
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
    /*background: red;*/
  }
  main {
    background: green;
    display: flex;
    flex: 1;
  }
  main > .editor {
    width: 20em;
  }
  main > .preview {
    flex: 1 ;
  }
</style>
