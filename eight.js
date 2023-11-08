const firstobj = {
  a: "1",
  b: "2",
  d: 2,
  e: "",
};
const secondobj = {
  b: 12,
  c: "d",
  e: "G",
};

function propertycheck(one, two) {
  two.d = two.b;
  delete two.b;

  const merged = Object.assign({}, one, two);
  console.log(merged);
}

propertycheck(firstobj, secondobj);
