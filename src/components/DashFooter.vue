<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <ul class="wallet-list">
            <li>BTC 3LrsKdgAEJkBYyUdfofvnK8D2vQkKPoGMs</li>
            <li>Ξ 0xCC0832FAD9Aa299e2266Cbc44c0DD1D59f60a590</li>
          </ul>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'dashFooter'
}
</script>

<style scoped lang="scss">
.footer {
  padding: 1rem 1.5rem;
  background-color: transparent;

  .wallet-list {
    list-style-type: none;
  }
}
</style>