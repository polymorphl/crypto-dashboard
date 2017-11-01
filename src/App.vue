<template>
  <div id="app">
    <section class="hero is-fullheight">
      <dash-header></dash-header>
      <router-view/>
      <dash-footer></dash-footer>
    </section>
  </div>
</template>

<script>
import DashHeader from './components/DashHeader'
import DashFooter from './components/DashFooter'

export default {
  name: 'app',
  components: {
    DashHeader,
    DashFooter
  }
}
</script>

<style scoped lang="scss">
@import '../node_modules/bulma/css/bulma.css';

html {
  overflow-y: auto;
}

html, body {
  height: 100%;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFF;
  height: 100%;
}

.hero {
  background: #333;
  background: -webkit-linear-gradient(left top, #659fda, #235f22);
  background: -moz-linear-gradient(bottom right, #659fda, #235f22);
  background: linear-gradient(to bottom right, #659fda, #235f22)
}
</style>
