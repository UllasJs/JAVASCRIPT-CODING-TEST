const a = {
  // b: {
  //   name: "Apple",
  //   color: "red",     // when b object is commented out the function gives "undefined" output
  // },
  name: "Cat",
};

function CheckProperty() {
  console.log(a.b);
  console.log(a)
}

CheckProperty(a);
