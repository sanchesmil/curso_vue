new Vue({
    el : '#desafio',
    data: {
        nome : 'Pedro',
        idade : 34,
        img: "http://files.cod3r.com.br/curso-vue/vue.jpg"
    },
    methods : {
        random(){
            return Math.random()
        }
        
    }
})