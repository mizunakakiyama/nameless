let realValue = "";
console.log("starting...");
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
  if (e.code === "Enter" && document.getElementById("textbox").value != null) {
    console.log("checkpoint 0");
    code(realValue);
  }
});

async function code(text) {
  var msg = text;
  var result = [];
  var temp = "";
  var msg_a = [];
  console.log("checkpoint 1");

  for (var i = 0; i < msg.length; i++) {
    msg_a.push(msg[i].charCodeAt(0));
  }
  console.log(`default msg: ${msg_a}`);
  const rep = await fetch("./0000.txt");
  const letext = await rep.text();
  const lines = letext.split("\n");

  lines.forEach((line) => {
    for (var i = 0; i < line.length; i++) {
      temp += line[i];
      if (((i + 1) / 5) % 1 === 0 && i + 1 < line.length) {
        result.push(parseInt(temp / 145));
        temp = "";
      }
    }
  });
  console.log(`check msg: ${result}`);
  if (result === msg_a) {
    console.log("checkpoint 2");
    alert("you pass");
  } else {
    console.log("checkpoint 2.1");
  }
}
