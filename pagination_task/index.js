// Number of pages
const totalPages = 10;

// Display content function
function displayContent(page) {
    // Simulated content display for demonstration
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = `<p>Displaying content for page ${page}</p>`;
}

// Create pagination function
function createPagination() {
    const paginationContainer = document.getElementById('pagination');

    // Clear existing pagination links
    paginationContainer.innerHTML = '';

    // Create and append pagination links
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.textContent = i;
        pageLink.classList.add('page-link');
        paginationContainer.appendChild(pageLink);

        // Add click event listener to each page link
        pageLink.addEventListener('click', function(event) {
            event.preventDefault();
            const currentPage = parseInt(event.target.textContent);
            // Highlight active page link
            const pageLinks = document.querySelectorAll('.page-link');
            pageLinks.forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');
            // Display content for selected page
            displayContent(currentPage);
        });
    }
}

// Initialize pagination
createPagination();
// Display content for initial page (page 1)
displayContent(1);
