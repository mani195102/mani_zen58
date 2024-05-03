// script.js

document.addEventListener("DOMContentLoaded", () => {
    const movieContainer = document.getElementById("movieContainer");
  
    const truncateText = (text, maxLength) => {
      if (text.length <= maxLength) {
        return text;
      }
      return text.slice(0, maxLength) + "...";
    };
  
    const fetchMovieInfo = () => {
      const apiKey = "65821d4b";
            const movieIds = ["tt3896198","tt4154796","tt0848228","tt0078346","tt0796366", "tt0111161"]; // Example movie IDs
   // Example movie IDs
      const fetchPromises = movieIds.map(movieId => {
        const apiUrl = `http://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`;
        return fetch(apiUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error("Failed to fetch movie information");
            }
            return response.json();
          });
      });
  
      Promise.all(fetchPromises)
        .then(dataArray => {
          // Clear existing content
          movieContainer.innerHTML = '';
  
          // Update UI with movie information
          dataArray.forEach(data => {
            const { Title, Plot, Year, Poster } = data;
            const truncatedPlot = truncateText(Plot, 150); // Truncate plot to 150 characters
            const movieInfo = `
              <div class="col-md-4 mb-4">
                <div class="card">
                  <img class="card-img-top" src="${Poster}" alt="${Title} Poster">
                  <div class="card-body">
                    <h5 class="card-title">${Title}</h5>
                    <p class="card-text">${truncatedPlot}</p>
                    <p class="card-text">Year: ${Year}</p>
                  </div>
                </div>
              </div>
            `;
            movieContainer.insertAdjacentHTML('beforeend', movieInfo);
          });
        })
        .catch(error => {
          console.error("Error fetching movie information:", error.message);
          movieContainer.textContent = "Failed to fetch movie information";
        });
    };
  
    // Fetch movie information when the page loads
    fetchMovieInfo();
  });
  