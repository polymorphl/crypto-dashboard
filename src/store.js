import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { wallets } from './wallets'

Vue.use(VueAxios, axios)

const BigNumber = require('bignumber.js')
const cryptoCurrencyData = require('./cryptocurrency-data.json')

export const store = {
  state: {
    totalMarketCapEUR: 0,
    cryptoCurrencies: [],
    wallets: wallets
  },
  getCryptoCurrencies () {
    const getUrl = 'https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=10'
    axios.get(getUrl).then((response) => {
      this.state.cryptoCurrencies = response.data
      this.state.cryptoCurrencies.forEach(cryptoCurrency => this.addImageAndDescription(cryptoCurrency))
    })
  },
  addImageAndDescription (cryptoCurrency) {
    cryptoCurrency.id = cryptoCurrency.id in cryptoCurrencyData ? cryptoCurrency.id : undefined
    cryptoCurrency.image = `${cryptoCurrency.id}_image`
    cryptoCurrency.description = cryptoCurrencyData[cryptoCurrency.id].description
    cryptoCurrency.website = cryptoCurrencyData[cryptoCurrency.id].website
    cryptoCurrency.paper = cryptoCurrencyData[cryptoCurrency.id].paper
    cryptoCurrency.github = cryptoCurrencyData[cryptoCurrency.id].github

    cryptoCurrency.positivePercentChange = !(cryptoCurrency.percent_change_24h.indexOf('-') > -1)
    cryptoCurrency.percentChange24h = cryptoCurrency.percent_change_24h.replace(/^-/, '')
  },
  getTotalMarketCapEUR () {
    const getUrl = 'https://api.coinmarketcap.com/v1/global/?convert=EUR'
    axios.get(getUrl).then((response) => {
      const globalData = response.data
      this.state.totalMarketCapEUR = globalData.total_market_cap_eur
    })
  },
  resolveWallets () {
    this.state.wallets.forEach((wallet) => {
      wallet = this.resolveWalletAmount(wallet)
    })
  },
  resolveWalletAmount (wallet) {
    if (wallet.resolver) {
      axios.get(`${wallet.resolver}${wallet.address}${wallet.opt}`)
      .then(response => {
        if (wallet.sym === 'btc') {
          wallet.amount = response.data.balance
        } else if (wallet.sym === 'eth') {
          wallet.amount = new BigNumber(response.data.balance, 10).mul(1).round(0, BigNumber.ROUND_DOWN).div(1000000000000000000).toString(10)
        } else if (wallet.sym === 'bch') {
          wallet.amount = response.data.balance
        } else if (wallet.sym === 'xrp') {
          wallet.amount = response.data.account_data.initial_balance
        } else {
          wallet.amount = 0
        }
        // fix amount precision
        if (parseFloat(wallet.amount)) wallet.amount = Number(wallet.amount).toFixed(2)
        return wallet
      })
    }
  }
}
