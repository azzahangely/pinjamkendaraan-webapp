document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  /// Password strength indicator
  const passwordStrengthIndicator = document.getElementById(
    "passwordStrengthIndicator"
  );
  const passwordInput = document.getElementById("registerPassword");

  passwordInput.addEventListener("input", function () {
    const strength = calculatePasswordStrength(passwordInput.value);
    passwordStrengthIndicator.innerHTML = `Password Strength: ${strength}`;
  });

  function calculatePasswordStrength(password) {
    const length = password.length;
    let score = 0;

    if (length >= 8) {
      score++;
    }

    if (/[a-z]/.test(password)) {
      score++;
    }

    if (/[A-Z]/.test(password)) {
      score++;
    }

    if (/\d/.test(password)) {
      score++;
    }

    if (/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
      score++;
    }

    if (score === 1) {
      return "Lemah";
    } else if (score === 2 || score === 3) {
      return "Sedang";
    } else if (score >= 4) {
      return "Password Kuat";
    } else {
      return "Sangat Lemah";
    }
  }

  // Submit handler for login form
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (loginForm.checkValidity()) {
      // Perform login process here
      alert("Logged in successfully!");
    } else {
      // Display validation errors
      loginForm.classList.add("was-validated");
    }
  });

  // Submit handler for register form
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (registerForm.checkValidity()) {
      const password = document.getElementById("registerPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      // Perform registration process here
      alert("Registered successfully!");
    } else {
      // Display validation errors
      registerForm.classList.add("was-validated");
    }
  });

  // Password reset/forgot password
  const forgotPasswordLink = document.getElementById("forgotPasswordLink");
  const resetPasswordButton = document.getElementById("resetPasswordButton");
  const resetEmailInput = document.getElementById("resetEmail");

  forgotPasswordLink.addEventListener("click", function (event) {
    event.preventDefault();
    $("#forgotPasswordModal").modal("show"); // Show the modal
  });

  resetPasswordButton.addEventListener("click", function () {
    const email = resetEmailInput.value;
    if (email) {
      // Send password reset email to the provided email address
      alert("Password reset email sent to " + email);
      $("#forgotPasswordModal").modal("hide"); // Hide the modal
    }
  });
});
