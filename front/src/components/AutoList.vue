<template>
  <div class="overflow-auto">
    <b-pagination class="p"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table
      id="my-table"
      :items="items[0]"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
  </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'AutoList',

    data() {
      return {
        items: [],
        fields:["marka" , "model" , "godiste" , "kilometraza" , "menjac" , "gorivo"],
        currentPage: 1,
        perPage: 2,
      }
    },

    computed: {
      ...mapState([
         'automobili'
      ]),
      rows() {
        return this.automobili.length
      }
    },


    mounted() {
    
        this.fetchAutomobili().then(data => {

            console.log(data);

            this.items.push(data);

        })
        
    
      
    
      
    },

    methods: {
      ...mapActions([
        'fetchAutomobili'
      ]),

     
    },  

   
    
  }

</script>

<style scoped>
.p{
    text-align: center;
    justify-content: center;
}
</style>

