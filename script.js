// Toggle Theme
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Form Handling
const form = document.getElementById("regForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (username.length < 3) {
    showMessage("Username must be at least 3 characters!", "error");
    return;
  }

  if (!email.includes("@")) {
    showMessage("Invalid email format!", "error");
    return;
  }

  if (password.length < 6) {
    showMessage("Password must be at least 6 characters!", "error");
    return;
  }

  showMessage("Registration successful!", "success");
});

// Helper function
function showMessage(msg, type) {
  message.textContent = msg;
  message.className = type;
}

// Event Bubbling and Capturing
const outerDiv = document.getElementById("outerDiv");
const innerBtn = document.getElementById("innerBtn");

innerBtn.addEventListener("click", () => {
  console.log("Button Clicked");
});

// Bubbling (default)
outerDiv.addEventListener("click", () => {
  console.log("Div Clicked (Bubbling)");
});

// Capturing
outerDiv.addEventListener("click", () => {
  console.log("Div Clicked (Capturing)");
}, true);
