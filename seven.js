const myObject = {
  a: {
    c: "level 1",
    b: {
      b: {
        a: {
          b: "level 2",
        },
      },
    },
  },
  b: "",
};

function findPropertyB(obj) {
  if (obj.hasOwnProperty("a") && obj.a.hasOwnProperty("b")) {
    return obj.a.b;
  }

  for (var key in obj) {
    let value = obj[key];
    if (value != undefined) {
      if (typeof value === "object") {
        const result = findPropertyB(obj[key]);
        if (result != undefined) {
          return result;
        }
      }
    }
  }
  return undefined;
}

const result = findPropertyB(myObject);
console.log(result);
