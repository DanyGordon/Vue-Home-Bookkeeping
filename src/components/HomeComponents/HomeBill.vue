<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">{{ 'BillInCurrency' | localize }}</span>

        <p 
          class="currency-line"
          v-for="cur in currencies"
          :key="cur"
        >
          <span>{{ getCurrency(cur) | currency(cur) }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      currencies: ['UAH', 'USD', 'EUR']
    }
  },
  props: ['rates'],
  computed: {
    base() {
      return this.$store.getters.info.bill;
    }
  },
  methods: {
    getCurrency(currency) {
      return Math.floor(this.base / this.rates[currency]);
    }
  }
}
</script>