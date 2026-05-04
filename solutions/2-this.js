// BEGIN
const make = (numer = 0, denom = 1) => {
  const rational = {
    numer,
    denom,

    setNumer(value) {
      this.numer = value;
    },

    setDenom(value) {
      this.denom = value;
    },

    getNumer() {
      return this.numer;
    },

    getDenom() {
      return this.denom;
    },

    toString() {
      return `${this.numer}/${this.denom}`;
    },

    add(other) {
      const a = this.numer;
      const b = this.denom;
      const c = other.getNumer();
      const d = other.getDenom();

      const newNumer = a * d + b * c;
      const newDenom = b * d;

      return make(newNumer, newDenom);
    },
  };

  return rational;
};

export default make;
// END