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
        <selfInformation v-bind:profile="profile"></selfInformation>
      </li>
      <li v-bind:class="{active:currentTab === 1}">
        <workExperience v-bind:workExperience="workExperience"></workExperience>
      </li>
      <li v-bind:class="{active:currentTab === 2}">
        <h2>学习经历</h2>
      </li>
      <li v-bind:class="{active:currentTab === 3}">
        <h2>项目经历</h2>
      </li>
      <li v-bind:class="{active:currentTab === 4}">
        <h2>获奖情况</h2>
      </li>
      <li v-bind:class="{active:currentTab === 4}">
        <h2>联系方式</h2>
      </li>
    </ol>
  </div>
</template>

<script>
  import selfInformation from './selfInformation'
  import workExperience from './workExperience'

  export default {
	  data(){
	    return {
	      currentTab:0,
        icons:['shenfenzheng','work0','book','project','trophy','phone'],
        profile:{
	        name:'',
          city:'',
          birth:''
        },
        workExperience:[
          {
            company:'',
            content:''
          }
        ]
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
      workExperience,
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
  #editor ol.panes .experience {
    position: relative;
  }
  #editor ol.panes .experience i{
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
