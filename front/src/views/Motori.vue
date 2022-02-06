<template>
    <div>
        <Title :title="title" />
        <MotoList />
    </div>  
</template>

<script>

    import MotoList from '../components/MotoList.vue'
    import Title from '../components/Title.vue'

  export default {
    name: 'Motori',
       
    data() {
        return {
            title: "Motori:"
        }
    },

    components: {
       MotoList,
       Title
    },



  }
</script>

<style scoped>
   


</style>