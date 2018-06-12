<template>
	<div>
    <h2>学习经历</h2>
    <el-form>
      <div class="experience" v-for="(experience , index) in studyExperience">
        <el-form-item label="学校">
          <el-input v-model="experience.school"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-input v-model="experience.content"></el-input>
        </el-form-item>
        <el-form-item label="学位">
          <el-input v-model="experience.degree"></el-input>
        </el-form-item>
        <i class="el-icon-circle-close" v-on:click="removeStudyExperience(index)"></i>
        <hr>
      </div>
      <el-button type="primary" v-on:click="addStudyExperience()">添加经历</el-button>
    </el-form>
  </div>
</template>

<script>
	export default {
	  props:[
      'studyExperience'
    ],
    methods:{
      addStudyExperience() {
        this.studyExperience.push({
          school:'',
          duration:'',
          degreee:''
        })
      },
      removeStudyExperience(index){
        this.studyExperience.splice(index,1)
      }
    }
	}
</script>

<style scoped>

</style>
