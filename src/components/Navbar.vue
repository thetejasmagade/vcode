<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand>VCode</b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="box"></div>
  </div>
</template>

<script>
export default {};
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