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
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
  </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'MotoList',

    data() {
      return {
        items: [],
        fields:["marka" , "model" , "godiste" , "kubikaza" , "kilometraza" , "tip" , "gorivo"],
        currentPage: 1,
        perPage: 2,
      }
    },

    computed: {
      ...mapState([
         'motori'
      ]),
      rows() {
        return this.motori.length
      }
    },


    mounted() {
    
        this.fetchMotori().then(data => {
            this.items.push(data);
        })
        
        
      
        
    },

    methods: {
      ...mapActions([
        'fetchMotori'
      ]),

     
    }
  }

</script>

<style scoped>
.p{
    text-align: center;
    justify-content: center;
}
</style>

