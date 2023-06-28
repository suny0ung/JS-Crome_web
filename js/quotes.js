const quote = document.querySelector("#quotes-wrap span:first-child");
const data = quotesData;

const randomChosen = data[Math.floor(Math.random() * data.length)];

quote.innerText = `${randomChosen.quote} -${randomChosen.author}-`;
