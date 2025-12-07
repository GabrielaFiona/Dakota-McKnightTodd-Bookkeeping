document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     1) FOOTER YEAR – applies to all pages
     ========================= */
  function setFooterYear() {
    const yearEls = document.querySelectorAll("#year");
    const currentYear = new Date().getFullYear();
    yearEls.forEach((el) => (el.textContent = currentYear));
  }
  setFooterYear();

  /* =========================
     2) SMOOTH SCROLL FOR [data-scroll-to]
        (optional – used if you add buttons like:
        <button data-scroll-to="#services">See Services</button>)
     ========================= */
  (function () {
    const scroller = document.querySelector(".page-wrapper") || window;

    document.querySelectorAll("[data-scroll-to]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetSelector = btn.getAttribute("data-scroll-to");
        const target = document.querySelector(targetSelector);
        if (!target) return;

        const rect = target.getBoundingClientRect();
        const currentScroll =
          scroller === window
            ? window.scrollY || window.pageYOffset
            : scroller.scrollTop;
        const offset = currentScroll + rect.top - 40;

        scroller.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      });
    });
  })();

  /* =========================
     3) CONTACT FORM HANDLER – only runs on contact page
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
          } catch (_) {
            /* ignore JSON parse error and use default message */
          }
          statusEl.textContent = message;
        }
      } catch (err) {
        statusEl.textContent =
          "Network error. Please check your connection and try again.";
      }
    });
  }
});
