<template>
    
    <div class="glavni">
        <Title :title="title"/>
        <UpitMotorForm/>

    </div>
   
    
</template>

<script>

    import Title from '../components/Title.vue'
    import UpitMotorForm from '../components/UpitMotorForm.vue'

  export default {
    name: 'UpitMotor',
       
    data() {
        return {
            title: "Upit motora:"
        }
    },

    components: {
       Title,
       UpitMotorForm
    },

   



  }
</script>

<style scoped>
.glavni{
    width: 50%;
    margin-left: 25%;
    margin-top: 10px;
}
</style>