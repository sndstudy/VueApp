var app = new Vue({
    el:'#app',
    data:{
        msg:"Hello World"
    }
})

var app2 = new Vue({
    el:'#app2',
    data:{
        msg:"Hello World"
    }
})

var app3 = new Vue({
    el:'#app3',
    data:{
        seen:true
    }
})

var app4 = new Vue({
    el:'#app4',
    data:{
        todos:[]
    }
})

var app5 = new Vue({
    el:'#app5',
    data:{
        msg:"Hello World"
    },
    methods:{
        reverse:function(){
            this.msg = this.msg.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app6',
    data: {
      msg: 'Hello Vue!'
    }
  })

Vue.component('todo-item', {
// todo-item コンポーネントはカスタム属性のような "プロパティ" で受け取ります。
// このプロパティは todo と呼ばれます。
props: ['todo'],
template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
el: '#app7',
data: {
    groceryList: [
    { id: 0, text: 'Vegetables' }
    ]
}
})