//import readline from "readline";
//import fs from "fs";

let realValue = "";

document.getElementById("textbox").addEventListener("input", function (e) {
  const newLength = e.target.value.length;
  if (newLength > realValue.length) {
    realValue += e.target.value.slice(realValue.length);
  } else {
    realValue = realValue.slice(0, newLength);
  }
  e.target.value = "✱".repeat(realValue.length);
});

document.addEventListener("keypress", (e) => {
  if (e.code === "Enter" && document.getElementById("textbox").value === null) {
  }
});
/***
async function code(text) {
  var msg = text;
  var result = "";

  for (var i = 0; i < msg.length; i++) {
    result += msg[i];
    if (((i + 1) / 5) % 1 === 0 && i + 1 < msg.length) {
      result += ",";
    }
  }
  const rl = readline.createInterface({
    input: fs.createReadStream("./0000.txt"),
    crfDelay: Infinity,
  });

  for await (const ligne of rl) {
    console.log(ligne);
  }
}
*/
