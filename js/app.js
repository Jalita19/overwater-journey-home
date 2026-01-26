const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".service-card, .serve-card, .eligibility-card, .about-card")
  .forEach(el => observer.observe(el));
