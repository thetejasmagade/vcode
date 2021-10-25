<template>
  <div class="editor">
    <b-card
      bg-variant="dark"
      text-variant="white"
      header-html="<b>HTML</b> / <b>CSS</b>"
    >
      <codemirror
        v-model="htmlCode"
        :options="cmOptionsHtml"
        v-on:keyup.native="html()"
        v-on="html()"
      />
    </b-card>
    <b-card bg-variant="dark" text-variant="white" header-html="<b>JS</b>">
      <codemirror
        v-model="jsCode"
        :options="cmOptionsJs"
        v-on:keyup.native="js()"
        v-on="js()"
      />
    </b-card>
  </div>
</template>

<script>
import "codemirror/mode/htmlmixed/htmlmixed.js";
import "codemirror/theme/base16-dark.css";

export default {
  data() {
    return {
      htmlCode: `<html>
  <head>
    <style></style>
  </head>
  <body>
  <h1>Your Output is Here....</h1>
  </body>
</html>
      `,
      jsCode: `alert("Hello");`,
      codeTitle: ``,
      cmOptionsHtml: {
        tabSize: 4,
        mode: "htmlmixed",
        theme: "base16-dark",
        lineNumbers: true,
        line: true,
        scrollbarStyle: null,
        fullScreen: true,
        lineWrapping: true,
      },
      cmOptionsJs: {
        tabSize: 4,
        mode: "text/javascript",
        theme: "base16-dark",
        lineNumbers: true,
        line: true,
        scrollbarStyle: null,
        fullScreen: true,
        lineWrapping: true,
      },
    };
  },
  methods: {
    html() {
      this.$emit("htmlCode", this.htmlCode);
      this.$store.commit("saveHtmlCode", this.htmlCode);
    },
    js() {
      this.$emit("jsCode", this.jsCode);
      this.$store.commit("saveJsCode", this.jsCode);
    },
    title() {
      this.$emit("titleCode", this.codeTitle);
      this.$store.commit("saveCodeTitle", this.codeTitle);
    },
  },
  async mounted() {
    if (this.$store.state.newEditor) {
      this.$store.commit("newEditor");
      this.$store.commit("clearEditor");
    } else {
      let result = await this.axios.get(
        `http://127.0.0.1:8000/api/codes/${this.$store.state.useremail}/`
      );
      this.$store.commit(
        "getCodeData",
        result.data[this.$store.state.openedCode].htmlcode,
        result.data[this.$store.state.openedCode].jscode,
        result.data[this.$store.state.openedCode].codetitle,
        result.data[this.$store.state.openedCode].codedescription
      );
      this.htmlCode = result.data[this.$store.state.openedCode].htmlcode;
      this.jsCode = result.data[this.$store.state.openedCode].jscode;
      console.log(result.data[this.$store.state.openedCode].htmlcode);
    }
  },
};
</script>

<style>
.CodeMirror {
  border: 1px solid #eee;
}
</style>