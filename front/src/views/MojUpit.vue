<template>

    <div>

        <div>
          <Title :title="title" />
        </div>
        <div class="fleks">

          <div class="unutra">
            <div class="stiki"><h1>Automobili:</h1></div>
              
              <MojiUpitiAuto />
          </div>
          <div class="unutra">
              <div class="stiki"><h1>Motori:</h1></div>
              <MojiUpitiMotor />
          </div>

        </div>
        
        
    </div>  

</template>

<script>

    import MojiUpitiAuto from '../components/MojiUpitiAuto.vue'
    import Title from '../components/Title.vue'
    import MojiUpitiMotor from '../components/MojiUpitiMotor.vue'

  export default {
    name: 'MojiUpiti',
       
    data() {
        return {
            title: "Moji upiti:"
        }
    },

    components: {
       MojiUpitiAuto,
       Title,
       MojiUpitiMotor
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