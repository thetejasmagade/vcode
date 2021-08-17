<template>
  <div>
    <b-card class="output" :header-html="outputWindow">
      <!-- <div id="output" v-on="js()"></div> -->
      <div v-html="htmlCode"></div>
      <!-- <button @click="js">click</button> -->
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
  },
  data() {
    return {
      outputWindow: ` <span style='height: 15px;
  width: 15px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;'></span>
  <span style='height: 15px;
  width: 15px;
  background-color: yellow;
  border-radius: 50%;
  display: inline-block;'></span>
  <span style='height: 15px;
  width: 15px;
  background-color: green;
  border-radius: 50%;
  display: inline-block;'></span>
        <input type="text" readonly style="width: 75%;
  border-radius: 3px;
  margin-left: 25px;
  border: none;
  background-color: white;
  margin-top: -8px;
  height: 25px;
  color: #666;
  padding: 5px;" value="http://www.demo.com/">
  `,
    };
  },
  methods: {
    js() {
      // eval(this.jsCode);
      // document.getElementById("output").innerHTML = this.htmlCode;
      // document.write(this.htmlCode);
    },
  },
};
</script>

<style>
.output {
  height: 700px;
  width: auto;
  margin: 0px;
  padding: 0px;
}
</style>