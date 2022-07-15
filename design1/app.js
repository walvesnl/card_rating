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

  if (n > quotes.length) {
    quoteIndex = 1;
  }
  if (n < 1) {
    quoteIndex = quotes.length;
  }
  for (i = 0; i < quotes.length; i++) {
    quotes[i].style.display = "none";
  }

  quotes[quotesIndex - 1].style.display = "block";
}
