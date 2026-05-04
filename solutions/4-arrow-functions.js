// BEGIN
export default function each(collection, callback) {
  for (let i = 0; i < collection.length; i++) {
    callback.call(collection[i], collection[i], i, collection);
  }
}
// END
