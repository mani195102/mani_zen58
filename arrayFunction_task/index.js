// All countries from asia continent

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Filter countries from Asia
    const asiaCountries = data.filter(country => country.region === 'Asia');

    // Extract country names
    const asiaCountryNames = asiaCountries.map(country => country.name.common);

    // Print the list of countries
    console.log("Countries in Asia:", asiaCountryNames);
  })
  .catch(error => console.error('Error fetching data:', error));

/*********************** END ***************************************************************************************/

  // all countries with population lessthan 2 lakhs

  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Filter countries with population less than 200,000 (2 lakhs)
    const countriesWithPopulationLessThan2Lakhs = data.filter(country => country.population < 200000);

    // Extract country names
    const countryNamesWithPopulationLessThan2Lakhs = countriesWithPopulationLessThan2Lakhs.map(country => country.name.common);

    // Print the list of countries with population less than 2 lakhs
    console.log("Countries with population less than 2 lakhs:", countryNamesWithPopulationLessThan2Lakhs);
  })
  .catch(error => console.error('Error fetching data:', error));

  /*********************** END *******************************************************************************************/

  // print name capital flag

  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Iterate over each country object
    data.forEach(country => {
      // Extract name, capital, and flag
      const name = country.name.common;
      const capital = country.capital ? country.capital[0] : "N/A";
      const flag = country.flags ? country.flags.png : "N/A";

      // Print name, capital, and flag
      console.log("Name:", name);
      console.log("Capital:", capital);
      console.log("Flag:", flag);
      console.log("---------------------------------");
    });
  })
  .catch(error => console.error('Error fetching data:', error));

/*********************** END *******************************************************************************************/



  // calculate the total population of countries using reduce function

  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Calculate total population using reduce function
    const totalPopulation = data.reduce((accumulator, country) => accumulator + country.population, 0);

    // Print the total population
    console.log("Total population of all countries:", totalPopulation);
  })
  .catch(error => console.error('Error fetching data:', error));

  /*********************** END *******************************************************************************************/

  // countires uses dollar currency

  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Iterate over each country object
    data.forEach(country => {
      // Check if the country uses US dollars as its currency
      if (country.currencies && country.currencies.USD) {
        // Print the name of the country
        console.log("Country that uses US dollars currency:", country.name.common);
      }
    });
  })
  .catch(error => console.error('Error fetching data:', error));



