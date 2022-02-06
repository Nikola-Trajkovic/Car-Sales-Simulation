<template>
  <div class="glavni">
    <b-form  @submit.stop.prevent>
      <label for="feedback-user">Username</label>
      <b-form-input class="input" v-model="form.username" :state="validation" id="feedback-user"></b-form-input>
      <b-form-invalid-feedback :state="validation">
        Your username must be 3-20 characters long.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validation">
        Looks Good.
      </b-form-valid-feedback>
     </b-form>

     <br><br>

    <b-form  @submit.stop.prevent>
        <label for="feedback-user">First name</label>
        <b-form-input class="input" v-model="form.firstname" :state="validation1" id="feedback-user"></b-form-input>
        <b-form-invalid-feedback :state="validation1">
            Your first name must be 3-15 characters long.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validation1">
            Looks Good.
        </b-form-valid-feedback>
        </b-form>


     <br><br>

    <b-form  @submit.stop.prevent>
        <label for="feedback-user">Last name</label>
        <b-form-input class="input" v-model="form.lastname" :state="validation2" id="feedback-user"></b-form-input>
        <b-form-invalid-feedback :state="validation2">
            Your last name must be 3-15 characters long.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validation2">
            Looks Good.
        </b-form-valid-feedback>
        </b-form>

    <br><br>

    <b-form  @submit.stop.prevent>
        <label for="feedback-user">Email</label>
        <b-form-input class="input" v-model="form.email" :state="validation3" id="feedback-user"></b-form-input>
        <b-form-invalid-feedback :state="validation3">
            Your need to enter email.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validation3">
            Looks Good.
        </b-form-valid-feedback>
        </b-form>


     <br><br>

     <b-form  @submit.stop.prevent>
      <label for="password">Password</label>
      <b-form-input class="input" v-model="form.password" :state="validation4" id="password"></b-form-input>
      <b-form-invalid-feedback :state="validation4">
        Your password must be 3-15 characters long.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validation4">
        Looks Good.
      </b-form-valid-feedback>
     </b-form>
     <br><br>
     <b-form-checkbox id="moderator" v-model="form.type" :value="moderator" :unchecked-value="user">Moderator</b-form-checkbox>
     <br><br>
     <input type="submit" value="Submit" @click="submit()">
  </div>
</template>

<script>
 
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        form: {
            username: '',
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            type: '',
        }
        
      }
    },
    computed: {
      validation() {
        return this.form.username.length > 2 && this.form.username.length < 16
      },
      validation1() {
        return this.form.firstname.length > 2 && this.form.firstname.length < 16
      },
      validation2() {
        return this.form.lastname.length > 2 && this.form.lastname.length < 16
      },
      validation3() {
        return this.form.email.length>0 && this.form.email.length<16
      },
      validation4() {
        return this.form.password.length > 2 && this.form.password.length < 16
      }
    },

    methods: {
        ...mapActions([
            'register'
        ]),

        submit(){
            if(this.form.username.length > 2 && this.form.username.length < 16 &&  this.form.firstname.length > 2 && this.form.firstname.length < 16 
            &&  this.form.lastname.length > 2 && this.form.lastname.length < 16 && this.form.email.length>0 && this.form.email.length<16 && 
            this.form.password.length > 2 && this.form.password.length < 16){
                this.register(this.form);
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