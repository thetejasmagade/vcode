<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-4">
          <AvatarImage />
        </div>
        <div class="col-4">
          <h1 class="text-warning">{{ userData[0].name }}</h1>
          <p class="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            magnam iure nam totam cupiditate aperiam laboriosam ipsa aut autem,
            eum, quis ducimus omnis eligendi facilis esse deserunt!
            Necessitatibus, officia quas?
          </p>
        </div>
        <b-button variant="outline-success" @click="newEditor()" class="my-5"
          >➕ Create New Code</b-button
        >
      </div>
      <hr class="text-light" />
      <div class="mb-6 pb-6">
        <div v-for="(result, i) in results" :key="i">
          <div v-if="result.codetitle == ''">
            <h2>There is no Codes in your Profile!</h2>
          </div>
          <div v-else>
            <h2 class="text-light">
              {{ result.codetitle }} -
              <span class="h6">{{ result.codedescription }}</span>
            </h2>
            <button
              type="button"
              class="btn btn-primary"
              @click="openEditor(i)"
            >
              Open Code in Editor ✏️
            </button>
          </div>
          <hr />
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  </div>
</template>

<script>
import AvatarImage from "@/components/AvatarImage.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  data() {
    return {
      uname: "demo@demo.com",
      results: "",
      userData: "",
    };
  },
  components: {
    AvatarImage,
    Navbar,
  },
  methods: {
    openEditor(i) {
      // this.$router.go(this.$router.replace({ name: "Editor" }));
      this.$router.replace({ name: "Editor" });
      this.$store.commit("openEditor", i);
      this.$store.commit("newEditor", false);
    },
    newEditor() {
      this.$router.push("editor");
      this.$store.commit("newEditor", true);
    },
  },
  async mounted() {
    let result = await this.axios.get(
      `http://localhost:8000/api/codes/${this.$store.state.useremail}/`
    );
    let userData = await this.axios.get(
      `http://localhost:8000/api/user/${this.$store.state.useremail}/`
    );
    console.log(result.data);
    this.results = result.data;
    this.userData = userData.data;
    console.log(userData.data);
  },
};
</script>

<style>
</style>