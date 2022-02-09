<template>
    <div class="main">
       <b-card
            v-for="item in upitMotorPrikazi.slice().reverse()"
            :key="item.id"
            :title="item.motor.marka + razmak + item.motor.model" 
            img-src=""
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2" 
        >

        <b-img v-bind:src="slike[item.motor.marka]" fluid alt="Fluid image" ></b-img>
        
        <b-card-text>
           <p>Opis: {{item.opis}}</p>
           <p>Contact: {{item.contact}}</p>
           <p>Username: {{item.user.username}}</p>
           <p>Ocena: {{item.cena}}</p>
           <p><b-button v-if="token" @click="like(item.id, item.opis,item.likes,item.dislikes,item.contact,item.cena)" size="sm" pill variant="dark">Like</b-button> <span v-if="token">{{item.likes}}</span> <b-button v-if="token" @click="dislike(item.id, item.opis,item.likes,item.dislikes,item.contact,item.cena)" pill size="sm" variant="dark">Dislike</b-button> <span v-if="token">{{item.dislikes}}</span></p>
        </b-card-text>

        
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
            slike: {}
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
        const slik = {

            Bmw: 'https://www.luxlife.rs/storage/posts/gallery/2013/Oct/170977/novi-bmw-r-1200-gs-adventure.jpg',
            Suzuki: 'https://www.luxlife.rs/storage/posts/gallery/2011/Oct/177121/suzuki-gsx-r-600.jpg'
           
        }
        this.slike = slik
      
    },

    watch:{

        upitMotor(nVal){

            this.upitMotorPrikazi = nVal
            //console.log(this.upitMotorPrikazi);
        }

    },


    methods: {
      ...mapActions([
        'fetchUpitMotor',
        'likesMotor'
      ]),

      like(id, opis, likes, dislikes, contact, cena){
          const obj = {
              id: id,
              opis : opis,
              likes : likes + 1,
              dislikes : dislikes,
              contact : contact,
              cena : cena
          }
          //console.log(obj);
          this.likesMotor(obj);
      },
      dislike(id, opis, likes, dislikes, contact, cena){
          const obj = {
              id: id,
              opis : opis,
              likes : likes,
              dislikes : dislikes + 1,
              contact : contact,
              cena : cena
          }
          //console.log(obj);
          this.likesMotor(obj);
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
