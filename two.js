const a = "baab";

function stringresult(result) {
  const b = result.substring();
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