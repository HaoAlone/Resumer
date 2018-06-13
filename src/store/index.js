import Vue from 'vue'
import Vuex from 'vuex'
import objectPath from 'object-path'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    selected:'profile',
    user:{
      id:'',
      username:''
    },
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
        name:'陈昊',
        city:'南京',
        birth:'1995.11.06'
      },
      work:[
        {company:'al',content:'第一份工作份工份工份工份工份工份工份工份工份工份工份工份工份工份工份工'},
        {company:'bl',content:'第二份工作'},
      ],
      education:[
        {school:'al',content:'文字'},
        {school:'tx',content:'第一份工作第一份工作第一份工作第' +
          '一份工作第一份工作第一份工作第一份工作第一份工作第一份工作第一份工作第一份工作第一份工作第一份工作第一份工作第一份           工作第一份工作第一份工作第一份工作第一份工作第一份工作第一份工作'},
      ],
      projects:[
        {name:'project a',content:'文字'},
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
  },
  mutations:{
    initState(state,payload){
      Object.assign(state,payload)
    },
    switchTab(state,payload){
      state.selected = payload
      localStorage.setItem('state',JSON.stringify(state))
    },
    // updateResume(state,{field,subfield,value}){
    //   state.resume[field][subfield] = value
    // }
    updateResume(state,{path,value}){
      objectPath.set(state.resume,path, value)
      localStorage.setItem('state',JSON.stringify(state))
    },
    setUser(state,payload){
      Object.assign(state.user, payload)
      console.log(state.user)
    },
    removeUser(state){
      state.user.id = ''
    }
  }
})
