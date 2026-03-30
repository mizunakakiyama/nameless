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
  var msg_f = "";
  console.log("checkpoint 1");

  msg_a = msg.split("").map((c) => c.charCodeAt(0));

  const rep = await fetch("./0000.txt");
  const letext = await rep.text();
  const lines = letext.split("\n");

  for (var i = 0; i < msg_a.length; i++) {
    msg_f += msg_a[i];
  }
  console.log(`default msg: ${msg_a}`);
  lines.forEach((line) => {
    var cur_line = line.split(":");
    if (cur_line[1] === msg_f) {
      alert();
    } else {
      console.log("nope eh eh");
    }
  });
  /***
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
  */
}
