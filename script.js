async function generateQuote() {
  //const response = await fetch("https://api.quotable.io/random");
  const response = await fetch("https://api.api-ninjas.com/v1/quotes?category=happiness");
  const data = await response.json();
  const quote = `"${data.content}" -${data.author}`;
  document.getElementById("quote").innerHTML = quote;
}
