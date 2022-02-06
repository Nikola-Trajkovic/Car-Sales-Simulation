<template>
    <div class="main">
       <b-card
            v-for="item in upitMotorPrikazi"
            :key="item.id"
            :title="item.motor.marka + razmak + item.motor.model" 
            img-src=""
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2" 
        >
        
        <b-card-text>
           <p>Opis: {{item.opis}}</p>
           <p>Contact: {{item.contact}}</p>
           <p>Username: {{item.user.username}}</p>
           <p>Ocena: {{item.cena}}</p>
        </b-card-text>
        <b-button :to="start+item.id+end" variant="primary">Update</b-button>
        <b-button @click="obrisi(item.id)" variant="danger">Delete</b-button>

        
        </b-card>
    </div>
</template>

<script>

    import { mapActions, mapState } from 'vuex';

  export default {
    name: 'UpitIspisMotor',
       
    data() {
        return {
            upitMotorPrikazi: [],
            razmak: " ",
            start: "/mojupdate/",
            end: "/motor"
        }
    },

    computed: {
      ...mapState([
         'upitMotor',
         'token'
      ]),
      
    },

    mounted() {
    
        this.fetchUpitMotor();
      
    },

    watch:{

        upitMotor(nVal){

            nVal.forEach(el => {

                if(el.userId == localStorage.userId){
                    this.upitMotorPrikazi.push(el)
                }

            })
        }

    },


    methods: {
      ...mapActions([
        'fetchUpitMotor',
        'deleteMotor'
      ]),

      obrisi(id){

          this.deleteMotor(id)

      } 
    

     
    },  
    



  }
</script>

<style>
    .main{
        overflow: motor;
    }
</style>
<style scoped>
    .main{
       margin-left: 25%;
       
       width: 50%;
    }
    .slika{
        width: 100%;
        height: 200px;
    }
</style>
