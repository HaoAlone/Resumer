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
          <div class="subitem" v-for="(subitem,i) in resume[item.field]">
            <div class="resumeFiled" v-for="(value,key) in subitem">
              <label for="">{{key}}</label>
              <input type="text" v-bind:value="value" @input="changeResumeField(`${item.field}.${i}.${key}`,$event.target.value)">
            </div>
            <hr>
          </div>
        </div>
        <div v-else class="resumeFiled" v-for="(value,key) in resume[item.field]">
          <label for="">{{key}}</label>
          <input type="text" v-bind:value="value" @input="changeResumeField(`${item.field}.${key}`,$event.target.value)">
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
	export default {
		name: "ResumeEditor",
    computed:{
		  selected:{
		    get(){
          return this.$store.state.selected
        },
        set(value){
		      return this.$store.commit('switchTab',value)
        }
      },
      resume(){
		    return this.$store.state.resume
      }
    },
    methods:{
		  changeResumeField(path, value) {
		    this.$store.commit('updateResume',{
		      path,value
        })
      }
    }

	}
</script>

<style >
  #resumeEditor {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
    /*border: 1px solid red;*/
    display: flex;
    flex-direction: row;
    overflow: auto;
  }
  #resumeEditor nav {
    width: 80px;
    background: black;
    color: #ffffff;
    /*border: 1px solid black;*/
    height: 100%;
  }
  svg.icon {
    min-width: 24px;
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
    height: 100%;
    overflow: auto;
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
  .resumeFiled > input {
    margin: 16px 0;
    border: 1px solid #ddd;
    box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.25);
    width: 100%;
    height: 40px;
    padding: 0 8px;
  }
  hr {
    border: none;
    border-top: 1px solid #ddd;
    margin: 24px 0;
  }
</style>
