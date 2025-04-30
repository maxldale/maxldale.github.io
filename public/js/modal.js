document.addEventListener("DOMContentLoaded", () => {
    document.body.querySelectorAll("[data-modal-trigger]").forEach(button => {
      const id = button.getAttribute("data-modal-trigger");
      const modal = document.getElementById(`modal-${id}`);
      if (!modal) return;
  
      button.addEventListener("click", () => {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      });
    });
  
    document.body.querySelectorAll("[data-modal-close]").forEach(button => {
      button.addEventListener("click", () => {
        button.closest(".modal").classList.remove("flex");
        button.closest(".modal").classList.add("hidden");
      });
    });
  
    // Optional: close modal on background click
    document.body.querySelectorAll(".modal").forEach(modal => {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.remove("flex");
          modal.classList.add("hidden");
        }
      });
    });
  });