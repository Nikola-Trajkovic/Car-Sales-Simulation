<template>
    <div>
        <Title :title="title" />
        <AutoList />
    </div>  
</template>

<script>

    import AutoList from '../components/AutoList.vue'
    import Title from '../components/Title.vue'

  export default {
    name: 'Automobili',
       
    data() {
        return {
            title: "Automobili:"
        }
    },

    components: {
       AutoList,
       Title
    },
    



  }
</script>

<style scoped>
   


</style>