export const wallets = [
  {
    id: 1,
    name: 'bitcoin',
    sym: 'btc',
    address: '3LrsKdgAEJkBYyUdfofvnK8D2vQkKPoGMs',
    resolver: 'https://blockexplorer.com/api/addr/',
    opt: '/?noTxList=1',
    amount: 0
  },
  {
    id: 2,
    name: 'ethereum',
    sym: 'eth',
    address: '0xCC0832FAD9Aa299e2266Cbc44c0DD1D59f60a590',
    resolver: 'https://api.blockcypher.com/v1/eth/main/addrs/',
    opt: '/balance',
    amount: 0
  },
  {
    id: 3,
    name: 'bitcoin-cash',
    sym: 'bch',
    address: '17PMG21hL8osrLDxa6mYugcgqmUcDodPSh',
    resolver: 'https://blockdozer.com/insight-api/addr/',
    opt: '',
    amount: 0
  },
  {
    id: 4,
    name: 'ripple',
    sym: 'xrp',
    address: 'rGcTFgF2inTfEshvZPsuWWMMtfvJqAP7EZ',
    resolver: 'https://data.ripple.com/v2/accounts/',
    opt: '',
    amount: 0
  },
  {
    id: 5,
    name: 'vertcoin',
    sym: 'vtc',
    address: '34L7L92cQqwiNAKMhuB5xZjLYZkkeyPuYR',
    resolver: 'https://explorer.vertcoin.org/ext/getbalance/',
    opt: '',
    amount: 0
  }
]
