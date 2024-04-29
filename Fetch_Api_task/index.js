    // Function to create a Bootstrap card with country data
    function createCountryCard(countryData) {
        const { flags, capital, name, cca2, region, latlng } = countryData;
        const cardHTML = `
          <div class="col-lg-4 col-md-6 col-sm-12 back">
            <div class="card">
            <div class="card-header card-title">${name.common}</div>
              <div class="card-body">
              <img src="${flags.png}" class="card-img-top" alt="Flag">
                <p class="card-text">Capital: ${capital}</p>
                <p class="card-text">Country Code: ${cca2}</p>
                <p class="card-text">Region: ${region}</p>
                <p class="card-text">Latlng: ${latlng.join(', ')}</p>
                <input type="hidden" class="latitude" value="${latlng[0]}">
                <input type="hidden" class="longitude" value="${latlng[1]}">
                <button class="btn btn-primary show-weather-btn">Click for Weather</button>
              </div>
            </div>
          </div>
        `;
        return cardHTML;
      }
  
      // Function to fetch weather data from OpenWeatherMap API
      async function fetchWeatherData(latitude, longitude, countryName) {
        try {
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
          const response = await fetch(url);
          const data = await response.json();
          const weatherDescription = data.weather[0].description;
          alert(`Weather in ${countryName}: ${weatherDescription}`);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      }
  
      // Event delegation for the "Show Weather" button clicks
      document.addEventListener('click', async (event) => {
        if (event.target.classList.contains('show-weather-btn')) {
          const cardBody = event.target.parentElement;
          const cardHeader = cardBody.parentElement;
          const countryName = cardHeader.querySelector('.card-title').textContent;
          const latitude = parseFloat(cardBody.querySelector('.latitude').textContent);
          const longitude = parseFloat(cardBody.querySelector('.longitude').textContent);
          await fetchWeatherData(latitude, longitude, countryName);
        }
      });
  
      // Function to fetch country data from Rest Countries API
      async function fetchCountryData() {
        try {
          const response = await fetch('https://restcountries.com/v3.1/all');
          const data = await response.json();
          const randomIndexes = [];
          while (randomIndexes.length < 9) { // Generate 9 unique random indexes
            const randomIndex = Math.floor(Math.random() * data.length);
            if (!randomIndexes.includes(randomIndex)) {
              randomIndexes.push(randomIndex);
            }
          }
          return randomIndexes.map(index => data[index]);
        } catch (error) {
          console.error('Error fetching country data:', error);
        }
      }
  
      // Load country cards when the page is loaded
      window.addEventListener('load', async () => {
        const countryCardContainer = document.getElementById('country-card-container');
        const countryDataArray = await fetchCountryData();
        countryDataArray.forEach(countryData => {
          countryCardContainer.innerHTML += createCountryCard(countryData);
        });
      });
  