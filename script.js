async function getPrice() {
  const ticker = document.getElementById("ticker").value.toUpperCase();
  const output = document.getElementById("output");

  if (!ticker) {
    output.innerText = "Please enter a ticker.";
    return;
  }

  output.innerText = "Fetching price...";

  // Demo API key from Alpha Vantage (you’ll get your own free key later)
  const apiKey = "demo";
  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data["Global Quote"]) {
      const price = data["Global Quote"]["05. price"];
      output.innerText = `${ticker} price: $${parseFloat(price).toFixed(2)}`;
    } else {
      output.innerText = "No data found. Try another ticker.";
    }
  } catch (error) {
    output.innerText = "Error fetching data.";
  }
}
