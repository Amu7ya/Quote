let quotes = document.querySelector("select");
let paraCategory = document.querySelector(".category");
let paraAuthor = document.querySelector(".author");
let paraQuote = document.querySelector(".finalquote");
console.log(paraQuote.innerText);
const url = "https://api.api-ninjas.com/v1/quotes?category=";
const option = {
  method: "GET",
  headers: { "X-Api-Key": value },
};
const fetchData = async (url) => {
  const response = await fetch(url, option);
  const data = await response.json();
  paraCategory.innerText = data[0].category;
  paraAuthor.innerText = data[0].author;
  paraQuote.innerText = data[0].quote;
  console.log(data[0]);
  console.log(data[0].author);
  console.log(data[0].quote);
  console.log(data[0].category);
};
quotes.addEventListener("change", (evt) => {
  quoteCategories(evt.target);
});

const quoteCategories = (element) => {
  let value = element.value;
  let newurl = `https://api.api-ninjas.com/v1/quotes?category=${value}`;
  fetchData(newurl);
};
