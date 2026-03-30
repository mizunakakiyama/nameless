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
  alert(e.code);
  console.log(e.code);
  if (e.code === "Enter" && document.getElementById("textbox").value === null) {
    console.log("checkpoint 0");
    code(document.getElementById("textbox").value);
  }
});

async function code(text) {
  var msg = text;
  var result = [];
  var temp = "";
  var msg_a = [];
  console.log("checkpoint 1");
  msg_a = msg.split("").map((c) => c.charCodeAt(0));

  const rep = await fetch("./0000.txt");
  const letext = await rep.text();
  const lines = letext.split("\n");

  lines.forEach((line) => {
    for (var i = 0; i < line.length; i++) {
      temp += line[i];
      if (((i + 1) / 5) % 1 === 0 && i + 1 < line.length) {
        result += parseInt(temp / 145);
        temp = "";
      }
    }
  });
  if (result === msg_a) {
    console.log("checkpoint 2");
    alert("you pass");
  } else {
    console.log("checkpoint 2.1");
  }
}
