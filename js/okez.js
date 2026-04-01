let realValue = "";

//broadcast
const canal = new BroadcastChannel("mdp_reveal");

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
    code(realValue);
  }
});

async function code(text) {
  var msg = text;
  var result = "";
  var temp = "";
  var msg_a = [];
  var msg_f = "";
  var x = 4;

  msg_a = msg.split("").map((c) => c.charCodeAt(0));

  const data = await (await fetch("./0000.json")).json();

  for (var i = 0; i < msg_a.length; i++) {
    msg_f += msg_a[i];
  }

  Object.entries(data).forEach(([key, value]) => {
    for (var i = 0; i < value.length; i++) {
      temp += value[i];
      if (i === x) {
        result += parseInt(temp / 145);
        temp = "";
        x += 5;
      }
    }
  });
  if (result === msg_f) {
    document.getElementById("msg").textContent = "A secret has been reveled";

    localStorage.setItem("mdp_reveal", JSON.stringify({ x1: "true" }));
  } else {
    document.getElementById("msg").textContent = "This password does not exist";
  }
}
