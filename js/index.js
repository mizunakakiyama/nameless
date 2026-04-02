//appliquer une obfuscation de code à la fin
//interactive text
document.addEventListener("DOMContentLoaded", () => {
  //broadcast
  const canal = new BroadcastChannel("mdp_reveal");

  const paragraphe = document.querySelectorAll("p");
  const p = paragraphe[1];

  if (!p) {
    console.error("Aucun <p> trouvé !");
    return;
  }

  p.innerHTML = p.innerHTML.replace(
    "Scizophrenia",
    "<span>Scizophrenia</span>",
  );
  const span = p.querySelector("span");
  if (!span) {
    console.error("Le mot 'Scizophrenia' n'a pas été trouvé dans le <p> !");
    return;
  }

  span.addEventListener("click", () => {
    typing(
      span,
      "it's lie fr0m the project ▓▓▓▓k-▓▓▓▓▓ to enslave you and control your psyche don't believe what you're seEing, what you're earing, it'z a lie",
      60,
    );
  });
});
function typing(element, text, speed = 50) {
  let i = 0;
  element.textContent = "";

  const interval = setInterval(() => {
    element.textContent += text[i];
    i++;

    if (i >= text.length) {
      clearInterval(interval);
    }
  }, speed);

  //update page
  const saved = localStorage.getItem("my_data");
  if (saved) maj(JSON.parse(saved));
}
window.addEventListener("storage", (event) => {
  if (event.key === "my_data") {
    maj(JSON.parse(event.newValue));
  }
});
function maj(data) {
  const x1 = document.getElementById("x1");

  if (data.x1 === true) {
    x1.outerHTML = "<a>test</a>";
  }
}
