const quoteText = document.getElementById('quoteText');
const authorText = document.getElementById('authorText');
const newQuoteBtn = document.getElementById('newQuoteBtn');


let apiData = [];

// Get Quotes from API
async function getData() {
    const apiUrl = 'https://github.com/gdev15/quote-generator/blob/master/quotes.json';

    // Attempt to fetch if not catch error
    try {
        const response = await fetch(apiUrl);
        apiData = await response.json(); //Converts response to a json
        console.log(apiData);
    } catch (error){
        alert(error);
    }
}

// When page loads run function
getData();

//Display new quote
function newQuote(){
    const quote = apiData[Math.floor(Math.random() * apiData.length)];
    quoteText.textContent = quote.text;
    authorText.textContent =quote.author;
}

newQuoteBtn.addEventListener('click', newQuote);