<template>
  <div>
    <div><Navbar /></div>
    <b-row>
      <b-col class="m-0 editor">
        <Editor v-on:htmlCode="html($event)" v-on:jsCode="js($event)" />
      </b-col>
      <b-col class="m-0">
        <Output :htmlCode="htmlCode" :jsCode="jsCode" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Editor from "@/components/Editor.vue";
import Output from "@/components/Output.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Editor,
    Output,
    Navbar,
  },
  data() {
    return {
      htmlCode: ``,
      jsCode: ``,
    };
  },
  methods: {
    html(html) {
      this.htmlCode = html;
    },
    js(js) {
      this.jsCode = js;
    },
  },
};
</script>

<style scoped>
.editor {
  width: 800px; /* or whatever width you want. */
  max-width: 800px; /* or whatever width you want. */
  display: inline-block;
}
</style>
