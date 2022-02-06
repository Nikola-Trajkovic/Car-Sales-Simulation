<template>
    <div class="main">
       <b-card
            v-for="item in upitAutoPrikaz"
            :key="item.id"
            :title="item.auto.marka + item.auto.model" 
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
    name: 'MojiUpitiAuto',
       
    data() {
        return {
            upitAutoPrikaz: [],
            start: "/mojupdate/",
            end: "/auto"
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
      
    },

    watch:{

        upitAuto(nVal){
            
            nVal.forEach(el => {

                if(el.userId == localStorage.userId){
                    this.upitAutoPrikaz.push(el)
                }

            })
            

        }

    },


    methods: {
      ...mapActions([
        'fetchUpitAuto',
        'deleteAuto'
      ]),

      obrisi(id){

          this.deleteAuto(id)

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
