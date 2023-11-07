const a = "baab";

function stringresult() {
  const b = a.substring();
  let temp = "";

  for (let i = 0; i < b.length; i++) {
    if (b[i] === "a") {
      temp = temp + (b[i] + "   ");
    } else {
      temp = temp + b[i];
    }
  }

  console.log("Result : " + temp);
}

stringresult(a);