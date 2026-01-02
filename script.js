function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

loginLink.onclick = () => openModal("login");
signupLink.onclick = () => openModal("signup");
reservationLink.onclick = () => openModal("reservation");

/* DARK MODE */
const toggle = document.getElementById("darkToggle");
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",
    document.body.classList.contains("dark") ? "dark" : "light");
};

/* SIGNUP */
signupForm.onsubmit = e => {
  e.preventDefault();
  localStorage.setItem("username", signupUsername.value);
  localStorage.setItem("password", signupPassword.value);
  alert("Signup successful!");
  closeModal("signup");
};

/* LOGIN */
loginForm.onsubmit = e => {
  e.preventDefault();
  if (
    loginUsername.value === localStorage.getItem("username") &&
    loginPassword.value === localStorage.getItem("password")
  ) {
    welcomeMsg.innerText = `Welcome, ${loginUsername.value} 👋`;
    logoutBtn.style.display = "inline";
    closeModal("login");
  } else {
    alert("Invalid credentials");
  }
};

/* LOGOUT */
logoutBtn.onclick = () => {
  localStorage.removeItem("username");
  welcomeMsg.innerText = "";
  logoutBtn.style.display = "none";
};

/* RESERVATION */
reservationForm.onsubmit = e => {
  e.preventDefault();
  if (!localStorage.getItem("username")) {
    alert("Please login first!");
    return;
  }
  alert("Reservation Confirmed!");
  closeModal("reservation");
};

/* REVIEWS */
document.querySelectorAll(".reviewBtn").forEach((btn, i) => {
  const p = btn.nextElementSibling;
  const saved = localStorage.getItem("review" + i);
  if (saved) p.innerText = saved;

  btn.onclick = () => {
    const text = btn.previousElementSibling.value;
    if (!text) return;
    localStorage.setItem("review" + i, text);
    p.innerText = text;
    btn.previousElementSibling.value = "";
  };
});

/* AUTO LOGIN */
if (localStorage.getItem("username")) {
  welcomeMsg.innerText = `Welcome, ${localStorage.getItem("username")} 👋`;
  logoutBtn.style.display = "inline";
}
