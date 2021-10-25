<template>
  <div>
    <b-card class="output" :header-html="outputWindow">
      <div v-html="htmlCode" id="demo"></div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    htmlCode: {
      type: String,
      required: true,
    },
    jsCode: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      outputWindow: ` <span style='height: 15px;
  width: 15px;
  background-color: red;
  border-radius: 50%;
  margin: 0px 3px 0px 0px;
  display: inline-block;'></span>
  <span style='height: 15px;
  width: 15px;
  background-color: yellow;
  border-radius: 50%;
  margin: 0px 3px 0px 0px;
  display: inline-block;'></span>
  <span style='height: 15px;
  width: 15px;
  background-color: green;
  border-radius: 50%;
  margin: 0px 3px 0px 0px;
  display: inline-block;'></span>
        <input type="text" readonly style="width: 75%;
  border-radius: 3px;
  margin-left: 25px;
  border: solid grey;
  background-color: white;
  margin-top: -8px;
  height: 25px;
  color: #666;
  padding: 5px;" value="http://www.output.com/">
  `,
    };
  },
  methods: {},
  mounted() {
    this.$root.$on("runJs", () => {
      eval(this.jsCode);
    });
  },
};
</script>

<style>
.output {
  height: 750px;
  width: auto;
  margin: 0px;
  padding: 0px;
}
</style>