<template>
    <div class="glavni">
        <h1>UPDATE:</h1>
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
        <b-button variant="dark" @click="submit()">Submit</b-button>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';

  export default {
    name: 'MojUpdate',
       
    data() {
        return {
            form:{
                id: this.$route.params.id,
                opis: '',
                likes: 0,
                dislikes: 0,
                contact: '',
                cena: '',
                userId: localStorage.userId,
                tip: null
            },

            zaUpdate:[]
            
        }
    },

    computed: {
      ...mapState([
         'update'
      ]),
    },

    watch: {

        update(nVal){
            this.zaUpdate = nVal
            //console.log(this.zaUpdate);
            this.form.opis = this.zaUpdate.opis
            this.form.contact = this.zaUpdate.contact
            this.form.cena = this.zaUpdate.cena
        }

    },


    mounted() {
    
      if(this.$route.params.tip == "auto"){
          //console.log("USAO U AUTO");
          this.updateAuto(this.$route.params.id)
          
      }
      if(this.$route.params.tip == "motor"){
          //console.log("USAO U MOTOR");
          this.updateMotor(this.$route.params.id)
      }
    
      
    },

    methods: {

        submit(){

            var validirano = true
            var err = []

            if(this.$route.params.tip == "auto"){
                //console.log("USAO U AUTO");
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

                if(validirano){
                    const objAuto = {
                    id: this.$route.params.id,
                    opis : this.form.opis,
                    likes : this.zaUpdate.likes,
                    dislikes : this.zaUpdate.dislikes,
                    contact : this.form.contact,
                    cena : this.form.cena
                    }
                    this.likes(objAuto)
                    this.$router.push({ name: 'MojUpit'})
                }else{
                    var message
                    err.forEach(el => {
                      
                        message = message + el

                    })
                    alert(message)
                }

                

            }
            if(this.$route.params.tip == "motor"){
                //console.log("USAO U MOTOR");

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

                if(validirano){

                    const objAuto = {
                    id: this.$route.params.id,
                    opis : this.form.opis,
                    likes : this.zaUpdate.likes,
                    dislikes : this.zaUpdate.dislikes,
                    contact : this.form.contact,
                    cena : this.form.cena
                    }
                    this.likesMotor(objAuto)
                    this.$router.push({ name: 'MojUpit'})

                }else{
                    var message2
                    err.forEach(el => {
                      
                        message2 = message2 + el

                    })
                    alert(message2)
                }
                
            }

            
            

        },
        ...mapActions([
            'updateAuto',
            'updateMotor',
            'likes',
            'likesMotor'
        ]),


    }

   



  }
</script>

<style scoped>
.glavni{
    width: 50%;
    margin-left: 25%;
    margin-top: 10px;
}
</style>