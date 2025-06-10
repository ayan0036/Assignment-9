 // Define an array of image filenames
let images = ["cheetah.jpg"
               "xebra.jpg",
              "cheetah.jpg"]; // Add your image filenames here
let currentImageIndex = 0;

// Get the image element and buttons
let imageElement = document.getElementById("displayed-image");
let prevButton = document.getElementById("prev-btn");
let nextButton = document.getElementById("next-btn");

// Function to display the current image
function displayCurrentImage() {
  imageElement.src = images[currentImageIndex];
}

// Function to go to the next image
function goToNextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  displayCurrentImage();
}

// Function to go to the previous image
function goToPreviousImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  displayCurrentImage();
}

// Add event listeners to the buttons
prevButton.addEventListener("click", goToPreviousImage);
nextButton.addEventListener("click", goToNextImage);

// Display the first image
displayCurrentImage();
