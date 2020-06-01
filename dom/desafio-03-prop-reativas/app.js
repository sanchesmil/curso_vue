new Vue({
    el: "#desafio",
    data: {
        valor: 0,
    },
    computed: { 
        resultado () {
            return this.valor != 37 ? 'Valor Diferente de 37' : 'Valor igual a 37'
        }
    },
    watch: {
        resultado() {
           // zera o valor após 3 segundos
           setTimeout(() => { 
            this.valor = 0
        }, 3000)
        }
    },
    methods: {

    }
})