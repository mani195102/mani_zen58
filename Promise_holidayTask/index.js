document.addEventListener("DOMContentLoaded", function() {
  const apiUrls = [
      'https://holidays.abstractapi.com/v1/?api_key=b500e464e5aa4b149caeb3db1bc1d8cc&country=US&year=2024&month=12&day=1',
      'https://holidays.abstractapi.com/v1/?year=2024&country=SG&api_key=b500e464e5aa4b149caeb3db1bc1d8cc&month=1&day=1',
      'https://holidays.abstractapi.com/v1/?year=2024&country=CN&api_key=b500e464e5aa4b149caeb3db1bc1d8cc&month=10&day=1',
      'https://holidays.abstractapi.com/v1/?year=2024&country=IN&api_key=b500e464e5aa4b149caeb3db1bc1d8cc&month=8&day=15'
  ];

  const options = { method: 'GET' };

  // Array to store all fetched data
  const allHolidayData = [];

  // Function to fetch data from each URL with a delay
  const fetchDataWithDelay = async () => {
      try {
          for (const apiUrl of apiUrls) {
              const response = await fetch(apiUrl, options);
              if (!response.ok) {
                  throw new Error(`Failed to fetch data from ${apiUrl}`);
              }
              const data = await response.json();
              allHolidayData.push(data);
              // Add a delay of 1 second between each fetch request
              await new Promise(resolve => setTimeout(resolve, 900));
          }
          displayHolidays(allHolidayData);
      } catch (error) {
          console.error('There was a problem fetching the data:', error);
      }
  };

  fetchDataWithDelay();

  function displayHolidays(allData) {
      const holidayList = document.querySelector('.holiday-list');
      // Clear previous content
      holidayList.innerHTML = '';

      allData.forEach(countryData => {
          countryData.forEach(holiday => {
            const truncatedName = truncateString(holiday.location, 25);
              const holidayItem = document.createElement('div');
              holidayItem.classList.add('holiday');
              holidayItem.innerHTML = `
                  <h5>Country: ${truncatedName}</h5>
                  <p>${holiday.name}</p>
                  <p>Weekday: ${holiday.week_day}</p>
                  <p>Date: ${holiday.date}</p>
                  <p>Type: ${holiday.type}</p>
              `;
              holidayList.appendChild(holidayItem);
          });
      });
  }
  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + '...';
    } else {
        return str;
    }
}
});
