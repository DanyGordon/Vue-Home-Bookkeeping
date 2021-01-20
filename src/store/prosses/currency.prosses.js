export default function prossesCurrency(data) {
  let currency = {
    rates: {
      'EUR': '',
      'USD': '',
      'GBP': '',
      'UAH': 1
    },
    date: '',
  };
  data.filter(item => {
    if (item.cc === 'EUR') {
      currency.rates.EUR = item.rate;
      currency.date = item.exchangedate;
    }
    if (item.cc === 'USD') {
      currency.rates.USD = item.rate;
    }
    if (item.cc === 'GBP') {
      currency.rates.GBP = item.rate;
    }
  });
  return currency;
}