
var map = new Map();
map.set(1, "cr7");
map.set(2, "lm10");
map.set(3, "njr");
map.set(4, "sr4");
for (const [keys, values] of map) {
  console.log(`key is ${keys} and value is ${values}`);
}
map.forEach((values, keys) => {
  console.log(`${values} and its key is ${keys}`);
});

console.log(map.get(2));

