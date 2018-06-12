<template>
  <div id="resumeEditor">
    <nav>
      <ol>
        <li v-for="(item , index) in resume.config"
            v-bind:class="{active:item.field === selected}"
            v-on:click="selected = item.field">
            <svg class="icon">
              <use :xlink:href="`#icon-${item.icon}`"></use>
            </svg>
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="item in resume.config" v-show="item.field === selected">
        <div v-if="resume[item.field] instanceof Array">
          <div class="subitem" v-for="subitem in resume[item.field]">
            <div class="resumeFiled" v-for="(value,key) in subitem">
              <label for="">{{key}}</label>
              <input type="text" v-bind:value="value">
            </div>
            <hr>
          </div>
        </div>
        <div v-else class="resumeFiled" v-for="(value,key) in resume[item.field]">
          <label for="">{{key}}</label>
          <input type="text" v-model="resume[item.field][key]">
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
	export default {
		name: "ResumeEditor",
    data(){
		  return {
        selected:'profile',
        resume:{
          config:[
            { field:'profile',icon:'id'},
            { field:'work',icon:'work'},
            { field:'education',icon:'book'},
            { field:'projects',icon:'heart'},
            { field:'awards',icon:'cup'},
            { field:'contacts',icon:'phone'},

          ],
          profile:{
            name:'',
            city:'',
            birth:''
          },
          work:[
            {company:'al',content:'第一份工作'},
            {company:'bl',content:'第2份工作'},
          ],
          education:[
            {school:'al',content:'文字'},
            {school:'tx',content:'第一份工作'},
          ],
          projects:[
            {name:'prject a',content:'文字'},
            {name:'project b',content:'文字'},
          ],
          awards:[
            {name:'awards a',content:'文字'},
            {name:'awards b',content:'文字'},
          ],
          contacts:[
            {contact:'phone',content:'123123123'},
            {contact:'qq',content:'123123312'},
          ]
        }
      }
    }
	}
</script>

<style >
  #resumeEditor {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    /*overflow: auto;*/
  }
  #resumeEditor nav {
    width: 80px;
    background: black;
    color: #ffffff;
    /*border: 1px solid black;*/
  }
  svg.icon {
    width: 24px;
    height: 24px;
  }
  #resumeEditor nav > ol > li {
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  #resumeEditor nav > ol > li.active {
    background: #ffffff;
    color: #000;
  }
  #resumeEditor > .panels {
    flex-grow: 1;
  }
  #resumeEditor > .panels > li {
    padding: 24px;
  }
  /*
    表单设置
  */
  .resumeFiled > label {
    display: block;
  }
  hr {
    border: none;
    border-top: 1px solid #ddd;
    margin: 24px 0;
  }
</style>
