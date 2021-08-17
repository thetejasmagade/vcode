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
    <!-- <b-card bg-variant="dark" text-variant="white" header-html="<b>JS</b>">
      <codemirror
        v-model="jsCode"
        :options="cmOptionsJs"
        v-on:keyup.native="js()"
        v-on="js()"
      />
    </b-card> -->
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
      cmOptionsHtml: {
        tabSize: 4,
        mode: "htmlmixed",
        theme: "base16-dark",
        lineNumbers: true,
        line: true,
        scrollbarStyle: null,
        fullScreen: true,
      },
    };
  },
  methods: {
    html() {
      this.$emit("htmlCode", this.htmlCode);
    },
  },
};
</script>

<style>
.CodeMirror {
  border: 1px solid #eee;
  height: 100px;
}
</style>