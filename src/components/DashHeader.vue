<template>
  <div class="hero-head">
    <header class="nav">
      <div class="container">
        <div class="nav-left">
           <router-link to="/" class="nav-item">
            <img src="../assets/logo.svg" class="cryptod-logo" />
            <p class="cryptod-logo-name">Crypto <span>Dashboard</span></p>
          </router-link>
        </div>
        <div class="nav-right">
          <div class="nav-item">
            My wallets soon
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'dashHeader'
}
</script>

<style scoped lang="scss">
$small: 590px;
$medium: 768px;
$large: 1024px;

.nav {
  font-family: Nunito, sans-serif;
  -webkit-box-shadow: 0px 0px 0px 0px !important;
  box-shadow: 0px 0px 0px 0px !important;

  .container {
    width: 100%;
    display: flex;
    align-items: stretch;
    min-height: 3.25rem;
  }

  .nav-left, .nav-right {
     display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    align-self: stretch;
    white-space: nowrap;
    overflow-y: hidden;

    .nav-item {
      display: flex;
      justify-content: flex-start;
      flex-shrink: 0;
      align-items: center;
      padding: .5rem .75rem;

       @media screen and (max-width: $medium) {
        padding-top: 15px;
      }

    }
  }

  .nav-left {
    justify-content: flex-start;
  
    .nav-item {
      display: flex;
      justify-content: flex-start;
      flex-shrink: 0;
      align-items: center;
      padding: .5rem .75rem;

      .cryptod-logo {
        height: 55px;
        padding-right: 5px;
      }

      .cryptod-logo-name {
        font-size: 18px;
        color: #FFF;
        letter-spacing: 5px;
        padding-top: 2px;

        span {
          color: orange;
        }

        @media screen and (max-width: $small) {
          display: none;
        }
      }

    }
  }
  .nav-right {
    justify-content: flex-end;
  }
}
</style>

