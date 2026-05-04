// BEGIN
export default function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function() {
  return this.value;
};

Money.prototype.getCurrency = function() {
  return this.currency;
};

Money.prototype.exchangeTo = function(targetCurrency) {
  if (this.currency === targetCurrency) {
    return new Money(this.value, this.currency);
  }

  const rates = {
    usd: { eur: 0.7 },
    eur: { usd: 1.2 }
  };

  const newValue = this.value * rates[this.currency][targetCurrency];
  return new Money(newValue, targetCurrency);
};

Money.prototype.add = function(otherMoney) {
  if (this.currency !== otherMoney.getCurrency()) {
    const converted = otherMoney.exchangeTo(this.currency);
    return new Money(this.value + converted.getValue(), this.currency);
  }
  return new Money(this.value + otherMoney.getValue(), this.currency);
};

Money.prototype.format = function() {
  return this.value.toLocaleString(undefined, {
    style: 'currency',
    currency: this.currency.toUpperCase()
  });
};
// END
