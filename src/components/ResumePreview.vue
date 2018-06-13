<template>
  <div id="resumePreview">
    <section data-name="profile" v-show="resume.profile">
      <h1>
        {{resume.profile.name}}
      </h1>
      <p>
        所在地：{{resume.profile.city}}
        出生日期：<small>{{resume.profile.birth}}</small>
      </p>
    </section>
    <section data-name="education" v-if="resume.education">
      <h2>毕业院校</h2>
      <ol>
        <li v-for="item in resume.education">
          <h3>{{item.school}}</h3>
          <p v-show="item.content">{{item.content}}</p>
        </li>
      </ol>
    </section>
    <section data-name="work" v-if="resume.work">
      <h2>工作经历</h2>
      <ol>
        <li v-for="item in resume.work">
          <h3>{{item.company}}</h3>
          <p v-show="item.content">{{item.content}}</p>
        </li>
      </ol>
    </section>
    <section data-name="projects" v-if="resume.projects">
      <h2>项目经历</h2>
      <ol>
        <li v-for="item in resume.projects">
          <h3>{{item.name}}</h3>
          <p v-show="item.content">{{item.content}}</p>
        </li>
      </ol>
    </section>
    <section data-name="awards" v-if="resume.awards">
      <h2>获奖情况</h2>
      <ol>
        <li v-for="item in resume.awards">
          <h3>{{item.name}}</h3>
          <p v-show="item.content">{{item.content}}</p>
        </li>
      </ol>
    </section>
    <section data-name="contacts" v-if="resume.contacts">
      <h2>联系方式</h2>
      <ol>
        <li v-for="item in resume.contacts">
          <h3>{{item.contact}}</h3>
          <p v-show="item.content">{{item.content}}</p>
        </li>
      </ol>
    </section>
    <hr>
    {{resume}}
  </div>
</template>

<script>
	export default {
		name: "ResumePreview",
    computed:{
		  resume(){
		    return this.$store.state.resume
      }
    },
    created(){
		  console.log(this.resume)
    }
	}
</script>

<style >
  *{
    box-sizing: border-box;
    font-weight: normal;
    font-variant: normal;
  }
  #resumePreview {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
    padding: 2em 2em;
    /*border: 1px solid red;*/
    color: #333;
    line-height: 1.2;
  }
  section {
    margin-top: 2em;
  }
  p {
    white-space: pre-line;
  }
  section > h2:first-child {
    background: #ddd;
    display: inline-block;
    padding: .2em;
    margin-bottom: .5em;
  }
  section[data-name="profile"] h1{
    margin: .1em 0;
    font-size: 4em;
  }
  section[data-name="work"] > li,
  section[data-name="projects"] > li,
  section[data-name="education"] > li
  section[data-name="awards"] > li,
  section[data-name="contacts"] > li,{
    margin-top: 1em;
  }
  section[data-name="work"] h3,
  section[data-name="projects"] h3,
  section[data-name="education"]  h3,
  section[data-name="awards"] h3,
  section[data-name="contacts"] h3{
    border-bottom: 1px solid #999;
    padding-bottom: .3em;
    margin-bottom: .5em;
    margin-top: .5em;
  }
  section[data-name="education"] li {
    line-height: 1.5;
  }

</style>
