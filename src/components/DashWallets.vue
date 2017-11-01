<template>
  <div>
    <div class="dash-wallets colums">
      <div class="container">
        <dash-wallet class="column" v-for="wallet in wallets" :key="wallet.id" v-bind:wallet="wallet"></dash-wallet>
      </div>
    </div>
  </div>
</template>

<script>
import DashWallet from './DashWallet'
import { wallets } from '../wallets'

export default {
  name: 'dashWallets',
  components: {
    DashWallet
  },
  data () {
    return {
      wallets: wallets
    }
  }
}
</script>

<style scoped lang="scss">
  
</style>
