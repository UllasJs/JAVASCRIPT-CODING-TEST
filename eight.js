const firstobj = {
  a: "1",
  b: "2",
  e: "",
};
const secondobj = {
  b: "de",
  c: "d",
  e: "G",
};

function propertycheck() {
  if (secondobj.b) {
    secondobj.d = secondobj.b;
  } else if (secondobj.d == undefined) {
    secondobj.d = "d";
  } else {
    console.log(secondobj)
  }
  const merged = Object.assign({}, firstobj, secondobj);

  console.log(merged);
}

propertycheck(firstobj, secondobj);
