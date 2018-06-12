<template>
  <div id="editor">
  <nav>
    <ol>
      <li v-for="i in [0,1,2,3,4,5]"
          v-bind:class="{active:currentTab === i}"
          v-on:click="currentTab = i">
        <svg class="icon">
          <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
        </svg>
      </li>
    </ol>
  </nav>
    <ol class="panes">
      <li v-bind:class="{active:currentTab === 0}">
        <selfInformation v-bind:profile="resume.profile" />
      </li>
      <li v-bind:class="{active:currentTab === 1}">
        <itemsEditor v-bind:items="resume.studyExp" v-bind:labels="{school:'学校',duration:'时间',degree:'学位'}"
                     title="学习经历" />
      </li>
      <li v-bind:class="{active:currentTab === 2}">
        <itemsEditor v-bind:items="resume.workExperience" v-bind:labels="{company:'公司',content:'工作内容'}"
                     title="工作经历" />
      </li>
      <li v-bind:class="{active:currentTab === 3}">
        <itemsEditor v-bind:items="resume.projects" v-bind:labels="{name:'项目号名称',content:'项目简介'}"
                     title="项目经历" />
      </li>
      <li v-bind:class="{active:currentTab === 4}">
        <itemsEditor v-bind:items="resume.workExperience" v-bind:labels="{name:'获奖名称'}"
                     title="获奖情况" />
      </li>
      <li v-bind:class="{active:currentTab === 5}">
        <contactEditor v-bind:contact="resume.contact"/>
      </li>

    </ol>
  </div>
</template>

<script>
  import selfInformation from './selfInformation'
  // import workExperience from './workExperience'
  // import studyExperience from './studyExperience'
  // 普适方式 整合为一个组件
  import itemsEditor from './editorComponents'
  import contactEditor from './contactEditor'


  export default {
    props:['resume'],
	  data(){
	    return {
	      currentTab:0,
        icons:['shenfenzheng','work0','book','project','trophy','phone'],

      }
    },
    created(){

    },
    methods:{

    },
    // methods:{
	   //  onSubmit(){
	   //    console.log(this.profile)
    //   }
    // }
    components:{
	    selfInformation,
      // workExperience,
      // studyExperience,
      itemsEditor,
      contactEditor
    }
	}
</script>

<style lang="scss">
  #editor {
    /*border:1px solid black;*/
    min-height: 100px;
    display: flex;
    flex-direction: row;
  }
  #editor nav {
    background: #000;
    width: 80px;
  }
  #editor nav > ol > li {
    /*border: 1px solid red;*/
    padding: 16px 0;
    text-align: center;
  }
  #editor nav > ol > li.active {
    background: #fff;
    .icon {
      fill: #000
    }
  }
  #editor nav > ol > li > .icon {
    width: 24px;
    height: 24px;
    fill: #fff;
  }
  #editor ol.panes {
    flex: 1;
  }
  #editor ol.panes .container {
    position: relative;
  }
  #editor ol.panes .container i{
    position: absolute;
    top: 0;
    right: 0;
    font-size: 20px;
  }
  #editor ol.panes li{
    height: 100%;
    display: none;
    padding: 32px;
    /*border: 1px solid red;*/
    overflow: auto;
  }
  #editor ol.panes li.active {
    display: block;
  }
  #editor ol.panes > li >input {
    width: 100%;
  }
</style>
