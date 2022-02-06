<template>
  <div class="glavni">
    <b-form  @submit.stop.prevent>
      <label for="feedback-user">Username</label>
      <b-form-input class="input" v-model="form.username" :state="validation" id="feedback-user"></b-form-input>
      <b-form-invalid-feedback :state="validation">
        Your username must be 3-15 characters long.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validation">
        Looks Good.
      </b-form-valid-feedback>
     </b-form>
     <br><br>
     <b-form  @submit.stop.prevent>
      <label for="password">Password</label>
      <b-form-input class="input" v-model="form.password" :state="validation2" id="password"></b-form-input>
      <b-form-invalid-feedback :state="validation2">
        Your password must be 3-15 characters long.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validation2">
        Looks Good.
      </b-form-valid-feedback>
     </b-form>
     <br><br>
     <input type="submit" value="Submit" @click="submit()">
  </div>
</template>

<script>

 import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        form:{
            username: '',
            password: '',
        }
      }
    },
    computed: {
      validation() {
        return this.form.username.length > 2 && this.form.username.length < 16
      },
      validation2() {
        return this.form.password.length > 2 && this.form.password.length < 16
      }
    },

    methods: {
        ...mapActions([
            'login'
        ]),

        submit(){
            if(this.form.username.length > 2 && this.form.username.length < 16 && this.form.password.length > 2 && this.form.password.length < 16){
                this.login(this.form);
                this.$router.push({ name: 'Home'})
            }
        }

    }


  }
</script>

<style scoped>
    .input{
        width: 50%;
        margin-left: 25%;
        margin-top: 10px;
    }
    .glavni{
        margin-top: 20px;
    }


</style>