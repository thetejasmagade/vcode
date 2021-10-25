<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="dark" class="px-3">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-navbar-brand>VCode</b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/editor">Editor</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <b-button variant="outline-success" @click="newEditor()" class="mx-2"
        >➕ Create New Code</b-button
      >
      <b-dropdown
        variant="outline-danger"
        class="mx-1"
        v-if="isUserLoggedIn"
        :text="useremail"
      >
        <b-dropdown-item to="/profile">Your Profile</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item-button @click="logOut()"
          >Logout</b-dropdown-item-button
        >
      </b-dropdown>
      <b-button
        v-else
        variant="outline-success"
        class="mx-3"
        @click="onLoginPage"
        >🔒 Register / LogIn</b-button
      >

      <b-button
        variant="outline-warning"
        v-if="this.$route.name == 'Editor' || this.$route.name == 'NewEditor'"
        @click="runJavascript()"
        >⚡ Run Javascript</b-button
      >
      <!-- Save SideBar -->
      <div class="px-2">
        <b-button
          v-b-toggle.sidebar-right
          v-if="this.$route.name == 'Editor' || this.$route.name == 'NewEditor'"
          variant="outline-info"
          >💾 Save</b-button
        >
        <b-sidebar
          id="sidebar-right"
          title="Save Your Work"
          bg-variant="dark"
          right
          shadow
          text-variant="white"
        >
          <div class="px-3 py-2">
            <b-input-group class="mb-2 my-5">
              <b-form-input
                aria-label="Save Code"
                placeholder="Enter your Code Title here.."
                v-model="codeTitle"
                v-on="saveCodeTitle()"
                v-on:keyup.native="saveCodeTitle()"
              ></b-form-input>
            </b-input-group>
            <b-form-textarea
              id="textarea-default"
              placeholder="Enter Code Description Here....."
              v-model="codeDescription"
              v-on="saveCodeDescription()"
              v-on:keyup.native="saveCodeDescription()"
            ></b-form-textarea>
            <br />
            <b-button class="mb-5" variant="outline-warning" @click="saveCode()"
              >Save Code</b-button
            >
            <hr />
            <p class="mt-5">
              Save your snippets code online on VCode. Just enter your title of
              the snippet in the title input field and press the "Save Code"
              button.
            </p>
            <h1>{{ codeTitle }}</h1>

            <b-img
              src="https://source.unsplash.com/1600x900/?programming"
              fluid
              thumbnail
            ></b-img>
          </div>
        </b-sidebar>
      </div>
      <!-- Save SideBar -->
    </b-navbar>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codeTitle: ``,
      codeDescription: ``,
      useremail: this.$store.state.useremail,
      isUserLoggedIn: this.$store.state.isUserLoggedIn,
      name: this.$store.state.username,
      email: this.$store.state.useremail,
      codetitle: this.$store.state.codeTitle,
      codedescription: this.$store.state.codeDescription,
      htmlcode: this.$store.state.htmlCode,
      jscode: this.$store.state.jsCode,
    };
  },
  methods: {
    runJavascript() {
      this.$root.$emit("runJs");
    },
    logOut() {
      this.$store.commit("logOut");
      this.$router.go(this.$router.replace({ name: "Register" }));
    },
    onLoginPage() {
      this.$router.replace({ name: "Register" });
    },
    saveCodeTitle() {
      this.$store.commit("saveCodeTitle", this.codeTitle);
    },
    saveCodeDescription() {
      this.$store.commit("saveCodeDescription", this.codeDescription);
    },
    newEditor() {
      this.$router.push("editor");
      this.$store.commit("newEditor", true);
    },
    async saveCode() {
      const codeData = {
        name: this.name,
        email: this.email,
        codetitle: this.codeTitle,
        codedescription: this.codeDescription,
        htmlcode: this.$store.state.htmlCode,
        jscode: this.$store.state.jsCode,
      };
      await this.axios.post(
        `http://localhost:8000/api/codes/${this.$store.state.useremail}/`,
        codeData
      );
      alert("Code Saved Successfully!");
    },
  },
  async mounted() {
    let result = await this.axios.get(
      `http://127.0.0.1:8000/api/codes/${this.$store.state.useremail}`
    );
    this.codeTitle = result.data[this.$store.state.openedCode].codetitle;
    console.log(result.data[this.$store.state.openedCode].codetitle);
    this.$root.$on("component1");
  },
};
</script>

<style>
.box {
  text-align: center;
  position: relative;
  z-index: 5;
  padding-bottom: 2px;
}

.box:after {
  background: linear-gradient(
    to right,
    #bcbcbc 25%,
    #ffcd02 25%,
    #ffcd02 50%,
    #e84f47 50%,
    #e84f47 75%,
    #65c1ac 75%
  );
  position: absolute;
  content: "";
  height: 4px;
  right: 0;
  left: 0;
  top: 0;
}
</style>