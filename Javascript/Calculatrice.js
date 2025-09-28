// 1. Récupérer les éléments
const buttons = document.querySelectorAll(".btn"); // tous les boutons
const display = document.querySelector("#display"); // l'écran

// 2. Variable pour stocker l'expression
let currentInput = "";

// 3. Ajouter les événements sur chaque bouton
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "DEL") {
      // Effacer
      currentInput = "";
      display.textContent = "0";
    } else if (value === "=") {
      // Calculer
      try {
        currentInput = eval(currentInput); // ⚠️ eval à utiliser seulement en apprentissage
        display.textContent = currentInput;
      } catch {
        display.textContent = "Erreur";
      }
    } else {
      // Ajouter chiffre ou opérateur
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});