<template>
  <div id="preview">
   <h1>{{resume.profile.name || '请填写姓名' }}</h1>
    <p>{{resume.profile.city || '请填写姓城市' }} | {{resume.profile.birth || '请填写出生日期'}}</p>
    <hr>
    <section v-if="filter(resume.projects).length > 0">
      <ul>
        <li v-for="project in resume.projects">
          项目名称：{{project.name}}
          项目内容：{{project.content}}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
	export default {
		props:['resume'],
    methods:{
		  // 过滤
      filter(array){//将非空对象组合城新的数组
		    return array.filter(item => !this.isEmpty(item))
      },
      isEmpty(Obj){
        //只要对象有一个value不为空，就返回false
		    let emp = true
        for (let key in Obj){
		      if (Obj[key]){
		        emp = false
            break
          }
        }
        return emp
      }

    }
	}
</script>

<style >
  #preview {
    /*border:1px solid red;*/
    min-height: 100px;
  }
  hr {
    margin-bottom: 10px;
  }
</style>
