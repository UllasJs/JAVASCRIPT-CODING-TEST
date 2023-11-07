const string = "he isemail is";

function indexoff() {
  for (var i = 0; i <= string.length; i++) {
    if (string[i] === "i" && string[i + 1] === "s") {
      string[i] = "is";
      if (i === string.length) {
        break;
      } else {
        console.log("index of is: " + i);
        continue;
      }
    }
  }
}

indexoff(string.substring());
