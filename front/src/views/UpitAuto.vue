<template>
    
    <div class="glavni">
        <Title :title="title"/>
        <UpitAutoForm/>

    </div>
   
    
</template>

<script>

    import Title from '../components/Title.vue'
    import UpitAutoForm from '../components/UpitAutoForm.vue'

  export default {
    name: 'UpitAuto',
       
    data() {
        return {
            title: "Upit automobila:"
        }
    },

    components: {
       Title,
       UpitAutoForm
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