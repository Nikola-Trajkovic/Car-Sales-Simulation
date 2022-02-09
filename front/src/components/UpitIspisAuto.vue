<template>
    <div class="main">
       <b-card
            v-for="item in upitAuto.slice().reverse()"
            :key="item.id"
            :title="item.auto.marka+ razmak + item.auto.model" 
            img-src=""
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2" 
        >

        <b-img v-bind:src="slike[item.auto.marka]" fluid alt="Fluid image" ></b-img>
        
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
    name: 'UpitIspisAuto',
       
    data() {
        return {
            upitAutoPrikaz: [],
            slike : {},
            razmak : " "
        }
    },

    computed: {
      ...mapState([
         'upitAuto',
         'token'
      ]),
    },

    mounted() {
    
        this.fetchUpitAuto()
        const slik = {
            Bmw: 'https://www.bmw.rs/content/dam/bmw/common/all-models/x-series/x5/2021/highlights/bmw-x5-onepager-mc-new-edition-hero-desktop.jpg',
            Audi: 'https://www.nacionalnaklasa.com/wp-content/uploads/2021/10/2021mansory_rs7.jpg',
            Skoda: 'https://www.magazinauto.com/wp-content/uploads/2019/05/auto-magazin-srbija-2020-skoda-superb-teaser.jpg'

        }
        this.slike = slik
      
    },

    watch:{

        upitAuto(nVal){

            this.upitAutoPrikaz = nVal
            //console.log(this.upitAutoPrikaz);
            

        }

    },


    methods: {
      ...mapActions([
        'fetchUpitAuto',
        'likes'
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
          this.likes(obj);
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
          this.likes(obj);
      }


    
     
    },  
    



  }
</script>

<style>
    .main{
        overflow: auto;
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
