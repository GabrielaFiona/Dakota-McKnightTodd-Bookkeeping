document.addEventListener("DOMContentLoaded", () => {
  /* 1) Dynamic Year in Footer */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* 2) Menu Logic - Close on Scroll */
  const nav = document.getElementById("mySidenav");
  const menuBtn = document.getElementById("menuToggleBtn");

  // Function to toggle menu open/close
  window.toggleNav = function() {
    if (nav.style.width === "250px") {
      nav.style.width = "0";
    } else {
      nav.style.width = "250px";
    }
  };

  // Close menu when scrolling
  window.addEventListener('scroll', () => {
    if (nav.style.width === "250px") {
      nav.style.width = "0";
    }
  });

  // Close menu if clicking outside of it (Optional UX improvement)
  document.addEventListener('click', (event) => {
    const isClickInside = nav.contains(event.target) || menuBtn.contains(event.target);
    if (!isClickInside && nav.style.width === "250px") {
      nav.style.width = "0";
    }
  });

  /* 3) Contact Form Handler */
  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");

  if (form && statusEl) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      statusEl.textContent = "Sending…";
      
      const data = new FormData(form);

      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });

        if (res.ok) {
          statusEl.textContent = "Message sent! I’ll get back to you soon.";
          form.reset();
        } else {
          statusEl.textContent = "Something went wrong. Please try again.";
        }
      } catch (err) {
        statusEl.textContent = "Network error. Please try again.";
      }
    });
  }
});
