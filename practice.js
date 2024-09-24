const pictureFilename = ['usa.jpg', 'italy.jpg', 'canada.jpg', 'france.jpg', 'japan.jpg'];

// Function to add active effect and handle tab switching
function setActiveTab(countryDivs) {
    countryDivs.forEach(div => {
        div.addEventListener("click", function() {
            // Remove 'active' class from all tabs
            countryDivs.forEach(d => d.classList.remove("active"));

            // Add 'active' class to the clicked tab
            div.classList.add("active");
        });
    });
}

// Example usage after the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    const countryDivs = document.querySelectorAll('.country-names');
    setActiveTab(countryDivs);
});


function generatePictureCards() {
    const pictureContainer = document.getElementsByClassName('scroll-pics');

    Array.from(pictureContainer).forEach((element, index) => {
        // Ensure the index does not exceed the number of images
        if (pictureFilename[index]) {
            element.style.backgroundImage = `url('${pictureFilename[index]}')`;
        }
    });
}
generatePictureCards();