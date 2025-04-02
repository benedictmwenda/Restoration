document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".portfolio-modal");
    const trigger = document.querySelector(".popup-trigger");
    const closeBtn = document.querySelector(".close-btn");

    // Open Modal
    trigger.addEventListener("click", function (event) {
      event.preventDefault();
      modal.style.display = "flex";
    });

    // Close Modal
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    // Close when clicking outside modal
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });