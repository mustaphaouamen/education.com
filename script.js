// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio website ready!");
});

// Function to reset any highlighted text and show all elements
function resetHighlights() {
    // Find all highlighted text and remove the background color
    var highlightedText = document.querySelectorAll('span[style="background-color: yellow;"]');
    for (var i = 0; i < highlightedText.length; i++) {
        highlightedText[i].style.backgroundColor = '';  // Remove the yellow background
    }
}

// Search function to filter elements on the page based on the search input
function searchFunction() {
    var input, filter, elements, i, txtValue;
    input = document.getElementById('search-input');  // Get the search input field
    filter = input.value.toLowerCase();  // Convert input to lowercase for case-insensitive search

    // Reset highlights before applying new ones
    resetHighlights();

    // Select elements to search through (headings, paragraphs, card titles, etc.)
    elements = document.querySelectorAll('h1, h2, h3, p, .card-title, .card-text');

    // Loop through all elements and check if the text content matches the search query
    for (i = 0; i < elements.length; i++) {
        txtValue = elements[i].textContent || elements[i].innerText;  // Get text content of the element
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            elements[i].style.display = "";  // Show the element if it matches the search query
            highlightText(elements[i], filter);  // Optionally, highlight the matched text
        } else {
            elements[i].style.display = "none";  // Hide the element if it doesn't match
        }
    }
}

// Function to highlight matched text within the element
function highlightText(element, searchText) {
    var innerHTML = element.innerHTML;
    var index = innerHTML.toLowerCase().indexOf(searchText.toLowerCase());
    
    if (index >= 0) {
        // Highlight the matched text by wrapping it with a <span> tag with a yellow background
        innerHTML = innerHTML.substring(0, index) + 
                    "<span style='background-color: yellow;'>" + 
                    innerHTML.substring(index, index + searchText.length) + 
                    "</span>" + 
                    innerHTML.substring(index + searchText.length);
        element.innerHTML = innerHTML;  // Update the element's inner HTML
    }
}

// Function to reset search, show all elements, and remove highlights
function resetSearch() {
    // Clear the search input field
    document.getElementById('search-input').value = '';
    
    // Show all elements (restore visibility)
    var elements = document.querySelectorAll('h1, h2, h3, p, .card-title, .card-text');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "";  // Restore visibility
    }

    // Remove any existing highlights
    resetHighlights();
}


    // Get the back-to-top button
    const backToTopButton = document.getElementById("back-to-top");

    // Show the button when scrolling down 100px
    window.onscroll = () => {
        if (document.documentElement.scrollTop > 100) {
            backToTopButton.classList.remove("d-none");
        } else {
            backToTopButton.classList.add("d-none");
        }
    };

    // Scroll to top on button click
    backToTopButton.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });


  

