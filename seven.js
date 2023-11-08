const myobj = {
  a: {
    b: {
      a: "google"
    }
  },
  d: "a"
};

function CheckProperty(obj) {
  if (obj && obj.hasOwnProperty("a")) {
    if (typeof obj.a === "object" && obj.a.hasOwnProperty("b")) {
      return obj.a.b;
    }
  }
  return undefined;
}

const result = CheckProperty(myobj);

console.log(result)
