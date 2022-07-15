let quotesIndex = 1;
showQuotes(quotesIndex);

function nextQuote(n) {
  showQuotes((quotesIndex += n));
}

function currentQuote(n) {
  showQuotes((quoteIndex = n));
}

function showQuotes(n) {
  let i;
  let quotes = document.getElementsByClassName("quotes");
  let buttons = document.querySelector(".buttons");
  let arrow = document.querySelector(".arrow-button");

  if (n > quotes.length) {
    quotesIndex = 1;
  }
  if (n < 1) {
    quotesIndex = quotes.length;
  }
  for (i = 0; i < quotes.length; i++) {
    quotes[i].style.display = "none";
  }

  quotes[quotesIndex - 1].style.display = "block";

  if (quotesIndex === 7) {
    arrow.style.display = "none";
    buttons.style.display = "none";
  }
}
