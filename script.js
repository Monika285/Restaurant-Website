// Open modal
function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

// Close modal
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Attach navbar clicks
document.getElementById("loginLink").addEventListener("click", (e) => {
  e.preventDefault();
  openModal("login");
});

document.getElementById("signupLink").addEventListener("click", (e) => {
  e.preventDefault();
  openModal("signup");
});

document.getElementById("reservationLink").addEventListener("click", (e) => {
  e.preventDefault();
  openModal("reservation");
});

// Signup
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  alert("Signup successful! Please login.");
  closeModal("signup");
});

// Login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  if (
    username === localStorage.getItem("username") &&
    password === localStorage.getItem("password")
  ) {
    alert("Login successful!");
    closeModal("login");
  } else {
    alert("Invalid username or password!");
  }
});

// Reservation
document.getElementById("reservationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("resName").value;
  const people = document.getElementById("resPeople").value;
  const date = document.getElementById("resDate").value;
  const time = document.getElementById("resTime").value;

  if (!localStorage.getItem("username")) {
    alert("You must login first to make a reservation.");
    return;
  }

  alert(
    `Reservation confirmed!\nName: ${name}\nPeople: ${people}\nDate: ${date}\nTime: ${time}`
  );
  closeModal("reservation");
});
