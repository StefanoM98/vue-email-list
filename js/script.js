const {createApp} = Vue;

createApp ({
    data(){
        return{
            emailRandom: []
        }
    },
    methods: {
        generateEmail() {
           const ajaxEmail = []

           for (let i = 0; i < 10 ; i++) {
            axios
                .get ("https://flynn.boolean.careers/exercises/api/random/mail")
                .then ((resp) => {
                    ajaxEmail.push(resp.data.response);
                    if (ajaxEmail.length === 10) {
                        this.emailRandom = ajaxEmail;
                    }
                })
           }
        }
    }
}).mount ("#app")