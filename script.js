// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const topNav = document.querySelector(".top-nav");

if (navToggle && topNav) {
  navToggle.addEventListener("click", () => {
    topNav.classList.toggle("nav-open");
  });

  // Close nav when a link is clicked
  topNav.addEventListener("click", event => {
    if (event.target.tagName === "A") {
      topNav.classList.remove("nav-open");
    }
  });
}

// Password protection for protected documents
const DOCS_PASSWORD = "stage2025"; // change this before final submission

const docsLoginForm = document.getElementById("docsLoginForm");
const docsPasswordInput = document.getElementById("docsPassword");
const docsLoginMessage = document.getElementById("docsLoginMessage");
const docsContent = document.getElementById("docs-content");
const docsLoginPanel = document.getElementById("docs-login-panel");

// On load, check if user already unlocked in this browser
window.addEventListener("DOMContentLoaded", () => {
  const unlocked = localStorage.getItem("aurora_docs_unlocked");
  if (unlocked === "true") {
    showDocs();
  }
});

if (docsLoginForm) {
  docsLoginForm.addEventListener("submit", event => {
    event.preventDefault();
    const value = (docsPasswordInput.value || "").trim();

    if (value === DOCS_PASSWORD) {
      docsPasswordInput.value = "";
      docsLoginMessage.textContent = "";
      localStorage.setItem("aurora_docs_unlocked", "true");
      showDocs();
    } else {
      docsLoginMessage.textContent =
        "Incorrect password. Please try again or contact the stage manager.";
    }
  });
}

function showDocs() {
  if (docsContent && docsLoginPanel) {
    docsContent.classList.remove("hidden");
    docsLoginPanel.style.display = "none";
  }
}
