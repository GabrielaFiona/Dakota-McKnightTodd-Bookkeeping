document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     1) FOOTER YEAR
     ========================= */
  function setFooterYear() {
    const yearEls = document.querySelectorAll("#year");
    const currentYear = new Date().getFullYear();
    yearEls.forEach((el) => (el.textContent = currentYear));
  }
  setFooterYear();

  /* =========================
     2) MENU TOGGLE & SCROLL BEHAVIOR (UPDATED)
     ========================= */
  const nav = document.getElementById("mySidenav");
  const menuBtn = document.querySelector(".menu-btn");

  // Make this function global so the HTML button can call it
  window.toggleNav = function() {
    if (nav.style.width === "250px") {
      nav.style.width = "0";
    } else {
      nav.style.width = "250px";
    }
  };

  // Close menu when scrolling (User friendly update)
  window.addEventListener("scroll", () => {
    if (nav.style.width === "250px") {
      nav.style.width = "0";
    }
  });

  // Close menu if clicking outside of it
  document.addEventListener("click", (e) => {
    // If nav is open AND click is NOT on nav AND NOT on the menu button
    if (nav.style.width === "250px" && !nav.contains(e.target) && !menuBtn.contains(e.target)) {
      nav.style.width = "0";
    }
  });

  /* =========================
     3) SMOOTH SCROLL
     ========================= */
  const scroller = document.querySelector(".page-wrapper") || window;
  document.querySelectorAll("[data-scroll-to]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetSelector = btn.getAttribute("data-scroll-to");
      const target = document.querySelector(targetSelector);
      if (!target) return;
      
      const rect = target.getBoundingClientRect();
      const currentScroll = scroller === window ? window.scrollY || window.pageYOffset : scroller.scrollTop;
      const offset = currentScroll + rect.top - 80; // adjusted for new header

      scroller.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    });
  });

  /* =========================
     4) CONTACT FORM HANDLER
     ========================= */
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
          setTimeout(() => (statusEl.textContent = ""), 6000);
        } else {
          let message = "Hmm, something went wrong. Please try again.";
          try {
            const json = await res.json();
            if (json && json.errors && json.errors[0]?.message) {
              message = json.errors[0].message;
            }
          } catch (_) {}
          statusEl.textContent = message;
        }
      } catch (err) {
        statusEl.textContent = "Network error. Please check your connection and try again.";
      }
    });
  }
});
