<template>
	<div>
    <h2>工作经历</h2>
    <el-form>
      <div class="experience" v-for="(experience , index) in workExperience">
        <el-form-item label="公司">
          <el-input v-model="experience.company"></el-input>
        </el-form-item>
        <el-form-item label="工作内容">
          <el-input v-model="experience.content"></el-input>
        </el-form-item>
        <i class="el-icon-circle-close" v-on:click="removeWorkExperience(index)"></i>
        <hr>
      </div>
      <el-button type="primary" v-on:click="addWorkExperience()">添加经历</el-button>
    </el-form>
  </div>
</template>

<script>
	export default {
	  props:[
      'workExperience'
    ],
    methods:{
      addWorkExperience() {
        this.workExperience.push({
          company:'',
          content:''
        })
      },
      removeWorkExperience(index){
        this.workExperience.splice(index,1)
      }
    },
		name: "work-experience"
	}
</script>

<style scoped>

</style>
