//une variable pour récupérer les ID HTML
var author = document.getElementById("authorName");
var quote = document.getElementById("entireQuote");
var button = document.getElementById("generate");
var xhr = new XMLHttpRequest();

//créer la fonction + la méthode aléatoire
button.addEventListener("click", changeQuote);

// function changeQuote() {
//   //choix aléatoire
//   let rdm = Math.floor(Math.random() * (allQuotes.length - 0));
//   let rdmQuotes = allQuotes[rdm];
//   console.log(rdmQuotes);
//   // modification à faire
//   author.innerHTML = rdmQuotes["nom"];
//   quote.innerHTML = rdmQuotes["citation"];
// }

//essai AJAX
function changeQuote() {
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var citations = this.response.citations;
      let rdm = Math.floor(Math.random() * (citations.length - 0));
      let rdmQuotes = citations[rdm];
      for (var i = 0; i < citations.length; i++) {
        author.innerHTML = rdmQuotes.nom;
        quote.innerHTML = rdmQuotes.citation;
      }
    }
  };

  xhr.open("GET", "/citations.json", true);
  xhr.responseType = "json";
  xhr.send();
}
