async function getStock() {
  const ticker = document.getElementById("tickerInput").value.toUpperCase();
  const output = document.getElementById("output");

  if (!ticker) {
    output.innerHTML = "Please enter a ticker symbol.";
    return;
  }

  try {
    // Alpha Vantage demo API (replace DEMO_KEY with your real API key later)
    const apiKey = "demo";  
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data["Global Quote"] && data["Global Quote"]["05. price"]) {
      const price = data["Global Quote"]["05. price"];
      output.innerHTML = `<b>${ticker}</b> current price: $${price}`;
    } else {
      output.innerHTML = "No data found. Try another ticker.";
    }
  } catch (error) {
    output.innerHTML = "Error fetching data.";
    console.error(error);
  }
}
