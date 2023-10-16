// Fonction pour incrémenter la valeur affichée dans l'élément avec l'ID "count-el"
function increment() {
  var countElement = document.getElementById("count-el");
  var count = parseInt(countElement.textContent);
  countElement.textContent = count + 1;
}
