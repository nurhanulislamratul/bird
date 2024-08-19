document.addEventListener("DOMContentLoaded", (event) => {
    // Get the bird list
    let birdList = document.querySelector('[data-list="birds"]');
    if (!birdList) {
      console.error("Could not find bird list");
      return;
    }
  
    // Get birds from bird list
    let birds = birdList.querySelectorAll('[data-item="bird"]');
  
    // Get radio buttons
    let radios = document.querySelectorAll("input[type=radio][name=type]");
    radios.forEach(function (radio) {
      radio.addEventListener("change", filterBirds);
    });
  
    // Get checkboxes
    let checkboxes = document.querySelectorAll("input[type=checkbox][name=size]");
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener("change", filterBirds);
    });
  
    function filterBirds() {
      let selectedBirdTypeRadio = document.querySelector(
        "input[type=radio][name=type]:checked"
      );
      let selectedBirdType = selectedBirdTypeRadio
        ? selectedBirdTypeRadio.value.toLowerCase()
        : "all";
  
      let checkedSizes = Array.from(checkboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);
  
      // Loop through the bird list
      for (let i = 0; i < birds.length; i++) {
        let birdType = birds[i].getAttribute("data-bird-type");
        let birdSize = birds[i].getAttribute("data-bird-size");
  
        // If matched
        if (
          (checkedSizes.includes(birdSize) || checkedSizes.length === 0) &&
          (birdType === selectedBirdType || selectedBirdType === "all")
        ) {
          birds[i].style.display = "";
        } else {
          birds[i].style.display = "none";
        }
      }
    }
  
    // Initial filter
    filterBirds();
  });
  