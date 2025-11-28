// set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  statusEl.textContent = "Sending…";

  const data = new FormData(form);

  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { "Accept": "application/json" }
    });

    if (res.ok) {
      statusEl.textContent = "Message sent! I’ll get back to you soon.";
      form.reset();
      // Clear the message after a few seconds (optional)
      setTimeout(() => statusEl.textContent = "", 6000);
    } else {
      const json = await res.json();
      statusEl.textContent = (json && json.errors && json.errors[0] && json.errors[0].message)
        ? json.errors[0].message
        : "Hmm, something went wrong. Please try again.";
    }
  } catch (err) {
    statusEl.textContent = "Network error. Please check your connection and try again.";
  }
});

// keep your footer year script if you had it:
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

