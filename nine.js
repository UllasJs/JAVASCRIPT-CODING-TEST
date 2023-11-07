const obj = {
  a: "",
  b: "a",
  c: " ",
  d: 1,
};

function objcheck() {
  for (var key in obj) {
    if (obj[key] === "" || obj[key] === " ") {
      obj[key] = null;
    }
  }
  console.log(obj)
}

objcheck(obj);
