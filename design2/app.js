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
  let stars = document.querySelector(".stars");
  let arrow = document.querySelector(".arrow-button");
  let label = document.querySelector(".rating-label");

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
    stars.style.display = "none";
    label.style.display = "none";
  }
}
