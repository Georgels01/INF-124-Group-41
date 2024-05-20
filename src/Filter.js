document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll(".categories li");
    const buttons = document.querySelectorAll(".button");
    const detailsSection = document.getElementById("details");
    const detailsImage = document.getElementById("details-image");
    const detailsTitle = document.getElementById("details-title");
    const detailsDescription = document.getElementById("details-description");

    const counterDisplay = document.querySelector('.display');
    const counterMinus = document.querySelector('.minus');
    const counterPlus = document.querySelector('.plus');


    categories.forEach(category => {
      category.addEventListener("click", () => {
        const selectedCategory = category.getAttribute("data-category");
        buttons.forEach(button => {
          if (selectedCategory === "all" || selectedCategory === button.getAttribute("data-category")) {
            button.style.display = "block";
          } else {
            button.style.display = "none";
          }
        });
      });
    });

    buttons.forEach(button => {
        const detailsButton = button.querySelector(".details-button");
        const detailsDiv = button.querySelector(".product-details");

        detailsButton.addEventListener("click", () => {
          if (detailsDiv.style.display === "none") {
            detailsDiv.style.display = "block";
          } else {
            detailsDiv.style.display = "none";
          }
        });
      });
});
