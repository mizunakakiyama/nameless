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
  setInterval(() => {
    const x_com = JSON.parse(localStorage.getItem("mdp_reveal"));
    if (x_com.x1 === true) {
      document.getElementById("x1").replace("▓▓▓▓", "<a>test</a>");
    }
  }, 1000);
}
