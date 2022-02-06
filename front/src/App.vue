<template>
  <div id="app">
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>

            <b-nav-item to="/" >Home</b-nav-item>
            <b-nav-item v-if="token" to="/upitAuto">Recenzija Automobila</b-nav-item>
            <b-nav-item v-if="token" to="/upitMotor">Recenzija Motora</b-nav-item>
            <b-nav-item v-if="token" to="/automobili">Automobili</b-nav-item>
            <b-nav-item v-if="token" to="/motori">Motori</b-nav-item>
            <b-nav-item v-if="token" to="/mojupit">Moji upiti</b-nav-item>
            <b-nav-item v-if="!token" to="/login">Uloguj se</b-nav-item>
            <b-nav-item v-if="!token" to="/register">Registruj se</b-nav-item>
            <b-nav-item v-if="token" @click="logout()">Izloguj se</b-nav-item>

            </b-navbar-nav>

        
        </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>

  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'App',
    created(){
        document.title = "Polovni automobili"
    },

    computed: {
      ...mapState([
        'token'
      ])
    },

    mounted() {
      
      if (localStorage.token) {
        this.setToken(localStorage.token);
      }
    },

    methods: {

      ...mapMutations([
        'removeToken',
        'setToken',
        'userId',
        'removeUserId'
      ]),


      logout() {
        this.removeToken();
        this.removeUserId();
        window.location.href = '/'
      }
    }

  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
