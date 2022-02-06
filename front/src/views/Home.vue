<template>

    <div>

        <div>
          <Title :title="title" />
        </div>
        <div class="fleks">

          <div class="unutra">
            <div class="stiki"><h1>Automobili:</h1></div>
              
              <UpitIspisAuto />
          </div>
          <div class="unutra">
              <div class="stiki"><h1>Motori:</h1></div>
              <UpitIspisMotor />
          </div>

        </div>
        
        
    </div>  

</template>

<script>

    import UpitIspisAuto from '../components/UpitIspisAuto.vue'
    import Title from '../components/Title.vue'
    import UpitIspisMotor from '../components/UpitIspisMotor.vue'

  export default {
    name: 'Home',
       
    data() {
        return {
            title: "Upiti:"
        }
    },

    components: {
       UpitIspisAuto,
       Title,
       UpitIspisMotor
    },
    



  }
</script>

<style scoped>

   .fleks{
     display: flex;
   }
   .fleks .unutra{
     border: black solid 2px;
     width: 50%;
     justify-content: center;
     text-align: center;
     margin: 5px;
     max-height: 80vh;
     overflow: auto;
     
   }
   .stiki{
     position: -webkit-sticky;
     position: sticky;
     top: 0;
     z-index: 9;
     background-color: white;
   }
  

</style>