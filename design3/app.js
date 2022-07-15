let quotesIndex = 1;
showQuotes(quotesIndex);

let buttons = document.getElementsByClassName("button");

let selected = [false, false, false];

function nextQuote(n) {
  if (!selected.includes(true)) {
    return alert("You must choose at least one answer");
  }

  buttons[0].style.border = "2px solid black";
  buttons[1].style.border = "2px solid black";
  buttons[2].style.border = "2px solid black";

  showQuotes((quotesIndex += n));
  selected = [false, false, false];
}

console.log(selected);

function currentQuote(n) {
  showQuotes((quoteIndex = n));
}

function selectedAnswer(n) {
  selected[n] = !selected[n];
  console.log(selected);

  selected[n]
    ? (buttons[n].style.border = "2px solid orange")
    : (buttons[n].style.border = "2px solid black");
}

function showQuotes(n) {
  let i;
  let quotes = document.getElementsByClassName("quotes");
  let arrow = document.querySelector(".arrow-button");
  let submit = document.querySelector(".submit");
  let buttons = document.querySelector(".buttons");

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
    submit.style.display = "none";
  }
}
