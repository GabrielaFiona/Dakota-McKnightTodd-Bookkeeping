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
     2) SMART HEADER LOGIC (Hide Down / Show Up)
     ========================= */
  const header = document.querySelector(".smart-header");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Don't hide if at the very top or if menu is OPEN (width=250px)
    const isMenuOpen = document.getElementById("mySidenav").style.width === "250px";
    
    if (currentScroll <= 0 || isMenuOpen) {
      header.classList.remove("scroll-down");
      lastScroll = currentScroll;
      return;
    }

    if (currentScroll > lastScroll && currentScroll > 70) {
      // Scrolling DOWN -> Hide Header
      header.classList.add("scroll-down");
    } else {
      // Scrolling UP -> Show Header
      header.classList.remove("scroll-down");
    }
    lastScroll = currentScroll;
  });

  /* =========================
     3) MENU TOGGLE ("X" ANIMATION)
     ========================= */
  const nav = document.getElementById("mySidenav");
  const menuBtn = document.querySelector(".menu-btn");

  window.toggleNav = function() {
    const isOpen = nav.style.width === "250px";

    if (isOpen) {
      nav.style.width = "0";
      menuBtn.classList.remove("is-active");
    } else {
      nav.style.width = "250px";
      menuBtn.classList.add("is-active");
      // Ensure header is visible when we open the menu
      header.classList.remove("scroll-down");
    }
  };

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (
      nav.style.width === "250px" &&
      !nav.contains(e.target) &&
      !menuBtn.contains(e.target) &&
      !header.contains(e.target)
    ) {
      nav.style.width = "0";
      menuBtn.classList.remove("is-active");
    }
  });

  /* =========================
     4) SMOOTH SCROLL
     ========================= */
  const scroller = document.querySelector(".page-wrapper") || window;
  document.querySelectorAll("[data-scroll-to]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetSelector = btn.getAttribute("data-scroll-to");
      const target = document.querySelector(targetSelector);
      if (!target) return;
      
      const rect = target.getBoundingClientRect();
      const currentScroll = scroller === window ? window.scrollY || window.pageYOffset : scroller.scrollTop;
      const offset = currentScroll + rect.top - 80;

      scroller.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    });
  });

  /* =========================
     5) CONTACT FORM HANDLER
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
