// Prevent context menu (right-click)
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Prevent F12 key (Developer Tools)
document.addEventListener('keydown', function(event) {
    // Replace with your preferred key combination if needed (e.g., Ctrl+Shift+I)
    if (event.key === 'F12') {
        event.preventDefault();
    }
});
async function identifyInsect(imageData) {
  const formData = new FormData();
  formData.append("images", imageData);
  formData.append("latitude", 49.207);
  formData.append("longitude", 16.608);
  formData.append("similar_images", true);

  try {
    const response = await fetch(
      "https://insect.kindwise.com/api/v1/identification?details=common_names%2Curl%2Cdescription%2Cimage",
      {
        method: "POST",
        headers: {
          "Api-Key":"cOhtSiXL3UbXrF8LRCsv7rpsnL4aRH0aLseQMBtBjjTfQqKiEQ",
        },
        body: formData,
      }
    );

    const data = await response.json();
    displayResults(data);
  } catch (error) {
    console.error("Error identifying insect:", error);
    alert(
      "An error occurred while identifying the insect. Please try again later."
    );
  }
}

function displayResults(apiResponse) {
  const resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML = "";

  const suggestion = apiResponse.result.classification.suggestions[0];

  // Display main identification result
  const mainResultElement = document.createElement("div");
  mainResultElement.innerHTML = `
            <h2>Species: ${suggestion.name}</h2>
            <p><strong>Common Names:</strong> ${suggestion.details.common_names.join(
              ", "
            )}</p>
            <p><strong>Probability:</strong> ${suggestion.probability}</p>
            <p><strong>Description:</strong> ${
              suggestion.details.description.value
            }</p>
            <p><a href="${
              suggestion.details.url
            }" target="_blank">Learn more</a></p>
            <img src="${
              suggestion.details.image.value
            }" alt="Main Identified Insect Image">
        `;
  resultContainer.appendChild(mainResultElement);

  // Display similar images
  const similarImagesElement = document.createElement("div");
  similarImagesElement.innerHTML = "<h3>Similar Images:</h3>";
  suggestion.similar_images.forEach((similarImage) => {
    const imageElement = document.createElement("img");
    imageElement.src = similarImage.url;
    imageElement.style.marginRight = "10px";
    similarImagesElement.appendChild(imageElement);
  });
  resultContainer.appendChild(similarImagesElement);
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    const imageData = event.target.result;
    identifyInsect(imageData);
  };
  reader.readAsDataURL(file);
}
