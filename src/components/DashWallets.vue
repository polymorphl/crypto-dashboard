<template>
  <div>
    <div class="dash-wallets colums">
      <div class="container">
        <dash-wallet class="column" v-for="wallet in sharedState.wallets" :key="wallet.id" v-bind:wallet="wallet"></dash-wallet>
      </div>
    </div>
  </div>
</template>

<script>
import DashWallet from './DashWallet'
import { store } from '../store.js'

export default {
  name: 'dashWallets',
  components: {
    DashWallet
  },
  data () {
    return {
      sharedState: store.state
    }
  }
}
</script>

<style scoped lang="scss">
  
</style>
