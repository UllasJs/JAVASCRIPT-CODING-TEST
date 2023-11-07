const myobj = {
  a: {
    b: "This is a B",

  }
}

function CheckProperty() {
  if (myobj.hasOwnProperty("b")) {
    
  } else {
    console.log(undefined);
  }
}

CheckProperty(myobj);
