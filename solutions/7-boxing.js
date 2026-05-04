// BEGIN
const magic = (...args) => {
  const sum = args.reduce((acc, x) => acc + x, 0);

  const inner = (...nextArgs) => magic(sum, ...nextArgs);

  inner.valueOf = () => sum;

  return inner;
};

export default magic;

// END
