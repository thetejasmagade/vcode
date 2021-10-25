<template>
  <div>
    <div><Navbar /></div>
    <div class="container my-5" style="padding: 170px">
      <form @submit.prevent="login">
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
        <button type="submit" class="btn btn-warning px-5 my-3">LogIn</button>
      </form>
      <p v-html="error" style="color: red"></p>
      <h5>
        Not Registered!,
        <span><router-link to="/register">Register instead</router-link></span>
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
    async login() {
      try {
        console.log("register");
        const user = firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .catch((error) => {
            console.log(error);
          });
        this.$store.commit("userEmail", this.email);
        this.$router.replace({ name: "Profile" });
        // this.$store.commit("userName", this.name);
        let result = await this.axios.get(
          `http://127.0.0.1:8000/api/codes/${this.email}`
        );
        this.$store.commit("userName", result.data[0].name);
        console.log(result.data[0].name);
        console.log(user);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
</style>