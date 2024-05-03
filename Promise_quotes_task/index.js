// using fetch to display the Quotes 

document.addEventListener("DOMContentLoaded", function() {
    fetchQuotes();
  });
  
  function fetchQuotes() {
    fetch('https://lucifer-quotes.vercel.app/api/quotes/50')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        displayQuotes(data);
      })
      .catch(error => {
        console.error('There was a problem fetching the quotes:', error);
        displayError();
      });
  }
  
  function displayQuotes(quotes) {
    const quoteContainer = document.querySelector('.quote-container');
    quoteContainer.innerHTML = '';
    quotes.forEach(quote => {
      const quoteElement = document.createElement('div');
      quoteElement.classList.add('col-sm-6','col-md-4','quote');

      // Create the div for quoteElements and append it to quoteElement
      const quoteElements = document.createElement('div');
      quoteElements.classList.add('lucy-quote');
      quoteElement.appendChild(quoteElements);
  
     quoteElements.innerHTML = `<p>${quote.quote}</p><p class="text-right">- ${quote.author}</p>`;
      quoteContainer.appendChild(quoteElement);
    });
  }
  
  function displayError() {
    const quoteContainer = document.querySelector('.quote-container');
    quoteContainer.innerHTML = '<p class="text-center text-danger">Error fetching quotes. Please try again later.</p>';
  }
  