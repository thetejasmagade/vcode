<template>
  <div>
    <div><Navbar /></div>
    <div class="container my-5" style="padding: 150px">
      <form @submit.prevent="register">
        <div class="form-group">
          <label class="py-2" style="color: whitesmoke">Full Name</label>
          <input
            type="text"
            placeholder="Enter name"
            class="form-control"
            v-model="name"
          />
        </div>
        <div class="form-group">
          <label class="py-2" style="color: whitesmoke">Email address</label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter email"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label class="py-2" style="color: whitesmoke">Password</label>
          <input
            type="password"
            placeholder="Password"
            class="form-control"
            v-model="password"
          />
        </div>
        <button type="submit" class="btn btn-warning my-3 px-5">
          Register
        </button>
      </form>
      <p v-html="error" style="color: red" id="error"></p>
      <br />
      <h5>
        Already Registered!,
        <span><router-link to="/login">SignIn instead</router-link></span>
      </h5>
    </div>
  </div>
</template>

<script>
import firebase from "@firebase/app";
require("firebase/auth");
import Navbar from "@/components/Navbar.vue";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: "",
    };
  },
  components: {
    Navbar,
  },
  methods: {
    async register() {
      try {
        console.log("register");
        const user = firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .catch((error) => {
            console.log(error.message);
            this.error = error.message;
          });
        this.$store.commit("userEmail", this.email);
        this.$store.commit("userName", this.name);
        this.$router.replace({ name: "Profile" });
        console.log(user);
        const userData = {
          name: this.name,
          email: this.email,
        };
        await this.axios.post(
          `http://127.0.0.1:8000/api/user/${this.email}/`,
          userData
        );
        await this.axios.post(`http://127.0.0.1:8000/api/users/`, userData);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
</style>