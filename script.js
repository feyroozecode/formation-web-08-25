const button = document.getElementById("b1");
const compteurEl = document.getElementById("compteur");

let compteurClics = 0;

function increment() {
  // on augment de a chaque click le compteur
  compteurClics++;

  // mise a jour de l'element du Compteur
  compteurEl.textContent = compteurClics;
}

// On ecoute l'event du click du bouton
button.addEventListener("click", increment);
