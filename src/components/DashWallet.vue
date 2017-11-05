<template>
  <div class="dash-wallet">
    <router-link class="column" :to="`/${wallet.name}`">
      <div class="image">
        <img :src="`/static/${wallet.name}_logo.png`">
      </div>
      <span class="amount">{{wallet.amount}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'dashWallet',
  props: ['wallet'],
  created () {},
  methods: {}
}
</script>

<style scoped lang="scss">
  .dash-wallet {
    background-color: #fff;
    color: black;
    display: inline-block;
    transition: all .3s;

    .image {
      display: inline-block;
      max-width: 25px;
      transform: scale(4.5);
      img {
        max-width: 100%;
        height: auto;
        display: block;
      }
    }

    &:hover {
      background-color: black;
      
      a {
        color: white;
      }
    }
  }
</style>
