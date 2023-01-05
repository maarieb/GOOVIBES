//une variable pour récupérer les ID HTML
let author = document.getElementById("authorName");
let quote = document.getElementById("entireQuote");
let button = document.getElementById("generate");

//créer la fonction + la méthode aléatoire
button.addEventListener("click", changeQuote);

function changeQuote() {
  //choix aléatoire
  let rdm = Math.floor(Math.random() * (allQuotes.length - 0));
  let rdmQuotes = allQuotes[rdm];
  console.log(rdmQuotes);

  //modification à faire
  author.innerHTML = rdmQuotes["nom"];
  quote.innerHTML = rdmQuotes["citation"];
}
