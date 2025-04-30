document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a[data-nav-target]");
    const sections = Array.from(links).map(link =>
      document.getElementById(link.getAttribute("data-nav-target"))
    );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const id = entry.target.id;
          const link = document.querySelector(`a[data-nav-target="${id}"]`);
          if (link) {
            if (entry.isIntersecting) {
              links.forEach(l => l.classList.remove("text-white", "font-semibold", "underline"));
              link.classList.add("text-white", "font-semibold", "underline");
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -40% 0px", // Adjust to highlight earlier/later
        threshold: 0.25,
      }
    );

    sections.forEach(section => section && observer.observe(section));
  });