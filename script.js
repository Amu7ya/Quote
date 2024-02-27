let quotes = document.querySelector("select");
let paraCategory = document.querySelector(".category");
let paraAuthor = document.querySelector(".author");
let paraQuote = document.querySelector(".finalquote");
console.log(paraQuote.innerText);
const url = "https://api.api-ninjas.com/v1/quotes?category=";
const option = {
  method: "GET",
  headers: { "X-Api-Key": "dQMC4aTvyAwRVoUbOJGmtQ==Z9uVGyvGneZ7r7BI" },
};
const fetchData = async (url) => {
  const response = await fetch(url, option);
  const data = await response.json();
  paraCategory.innerText = data[0].category;
  paraAuthor.innerText = data[0].author;
  paraQuote.innerText = data[0].quote;
};
quotes.addEventListener("change", (evt) => {
  quoteCategories(evt.target);
});

const quoteCategories = (element) => {
  let value = element.value;
  let newurl = `https://api.api-ninjas.com/v1/quotes?category=${value}`;
  fetchData(newurl);
};
