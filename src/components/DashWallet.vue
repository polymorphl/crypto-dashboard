<template>
  <div class="dash-wallet">
    <div class="image tooltip">
      <img :src="`/static/${wallet.name}_logo.png`">
    </div>
    <span class="amount">{{wallet.amount}}</span>
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
  }
</style>
