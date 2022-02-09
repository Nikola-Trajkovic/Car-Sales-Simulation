<template>
    <div>
        <b-form-textarea
            v-model="form.opis"
            placeholder="Opis"
            rows="8"
        ></b-form-textarea>


        <br>

        <b-form-input
            v-model="form.contact"
            placeholder="Unesite kontakt"
            required
        ></b-form-input>

        <br>

        <b-form-input v-model="form.cena" type="number" placeholder="Unesite ocenu od 1 do 10">
        </b-form-input>
        <br>

        <b-form-select
        id="inline-form-custom-select-pref"
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="form.autoId"
        :options="options"
        ></b-form-select>

        <br><br>
        <b-button variant="dark" @click="submit()">Submit</b-button>
    </div>  
    
</template>

<script>
    import { mapActions, mapState } from 'vuex';

  export default {
    name: 'UpitAutoForm',
       
    data() {
        return {
            form:{
                opis: '',
                likes: 0,
                dislikes: 0,
                contact: '',
                cena: '',
                userId: localStorage.userId,
                autoId: null
            },
            options:[]
            
        }
    },

    computed: {
      ...mapState([
         'automobili'
      ]),
    },


    mounted() {
    
        this.fetchAutomobili().then(data => {

            this.options.push({value: null, text: "Izaberite auto"});
            data.forEach(element => {
                var item = element.marka + " " + element.model

                this.options.push({value: element.id, text: item});
            });   
            

        })
        
    
      
    
      
    },

    methods: {

        submit(){

            var validirano = true
            var err = []

            if(this.form.opis == ""){
                    err.push("Morate uneti opis; ")
                    validirano = false
                }
                if(this.form.contact == ""){
                    err.push("Morate uneti kontakt; ")
                    validirano = false
                }
                if(this.form.cena == "" || this.form.cena<0 || this.form.cena>10){
                    err.push("Morate uneti ocenu izmedju 1 i 10; ")
                    validirano = false
                }
                if(this.form.autoId == null){
                    err.push("Morate izabrati auto; ")
                    validirano = false
                }

                if(validirano){
                    //this.fetchUnosAuto(this.form);
                    //console.log(this.form);
                    this.$socket.emit('oglas_auto', this.form);
                    window.location.reload()
                }else{
                    var message
                    err.forEach(el => {
                      
                        message = message + el

                    })
                    alert(message)
                }

            
            

        },
        ...mapActions([
            'fetchAutomobili',
            'fetchUnosAuto'
        ]),


    }

   



  }
</script>