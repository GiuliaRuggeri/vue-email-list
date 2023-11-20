const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            eMails: [],

           
        }

    },

    methods: {
        generaEmail() {

            for (i = 1; i <= 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {

                    if (resp.data.success) {
                        console.log(resp.data.response)
                        this.eMails.push(resp.data.response)
                    }
                });

            } 
            

        }

    },

    mounted() {

        this.generaEmail();

    }
}


createApp(opzioni).mount('#app')