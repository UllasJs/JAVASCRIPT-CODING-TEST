const firstobj = {
  a: "1",
  b: "2",
  e: "",
};
const secondobj = {
  c: "d",
  e: "G",
};

function propertycheck() {
  if (secondobj.d == null) {
    secondobj.d = "d";
  }
  const merged = Object.assign({}, firstobj, secondobj);
  
  console.log(merged);
}

propertycheck(firstobj, secondobj);
