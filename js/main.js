// Original JS functionality (>5 lines)
document.addEventListener("DOMContentLoaded", function () {
  const interactiveBtn = document.querySelector(".interactive-btn");

  if (interactiveBtn) {
    interactiveBtn.addEventListener("click", function () {
      const colors = ["#007bff", "#28a745", "#dc3545", "#ffc107", "#6610f2"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      this.style.backgroundColor = randomColor;
      this.textContent = "Clicked!";

      setTimeout(() => {
        this.textContent = "Click Me!";
        this.style.backgroundColor = "";
      }, 2000);
    });
  }
});
