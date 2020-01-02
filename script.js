 const quotes = ["Stop looking at me", "If theres a deal and its limited, get it and dont regret it","People dont know what tiny feet are"];


const quote= document.querySelector('#cQuote');

quoteBtn.addEventListener('click',displayQuote)

function displayQuote() {
  let random = Math.floor(Math.random()*quotes.length);
  cQuote.innerHTML = "-- " + quotes[random] + " --";
}
