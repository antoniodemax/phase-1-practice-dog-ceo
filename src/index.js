console.log("%c HI", "color: firebrick");
document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    //Fetch and display dog images
    fetch(imgUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const imagesContainer = document.getElementById("dog-image-container");
        data.message.forEach(imageUrl => {
          const imgElement = document.createElement("img");
          imgElement.src = imageUrl;
          imgElement.alt = "Dog Image";
          imagesContainer.appendChild(imgElement);
        });
      })
      .catch(error => {
        console.error('There was a problem fetching the images:', error);
      });
  
    // Fetch and display dog breeds
    fetch(breedUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const dogBreedsUl = document.getElementById("dog-breeds");
        const breeds = Object.keys(data.message);
        breeds.forEach(breed => {
          const breedListItem = document.createElement("li");
          breedListItem.textContent = breed;
          dogBreedsUl.appendChild(breedListItem);
  
          // Change font color on click
          breedListItem.addEventListener("click", () => {
            breedListItem.style.color = "blue"; // Change color to blue (you can choose any color)
          });
        });
      })
      .catch(error => {
        console.error('There was a problem fetching the dog breeds:', error);
      });
  
    // Filter breeds by starting letter
    const breedDropdown = document.getElementById("breed-dropdown");
    breedDropdown.addEventListener("change", () => {
      const selectedLetter = breedDropdown.value;
      const dogBreeds = document.querySelectorAll("#dog-breeds li");
      dogBreeds.forEach(breed => {
        if (breed.textContent.startsWith(selectedLetter)) {
          breed.style.display = "block";
        } else {
          breed.style.display = "none";
        }
      });
    });
  });
  
