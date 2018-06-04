// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入第三方的css
import 'normalize.css'
import './assets/reset.scss'

Vue.config.productionTip = false

// 全局组件
// Vue.component('Jack',{
//   template:'<p>i am {{name}}</p>',
//   data:function (){
//     return {
//       name: 'Jack Ma'
//     }
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
