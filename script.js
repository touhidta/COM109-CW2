// Menu Data
const menuItems = [
  {
    name: "Biryani",
    description: "Classic vibrant taste",
    price: "$32",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg"
  },
  {
    name: "Butter Chicken",
    description: "Tender beef stewed in red wine with carrots and herbs",
    price: "$38",
    image:
      "https://cdn.prod.website-files.com/6549128db41d15ae06784cbc/6644ab9937bf50fdaa8c99fa_Butter%20Chicken-p-1080.webp"
  },
  {
    name: "Chicken Tikka",
    description: "Traditional Provençal stewed vegetables",
    price: "$24",
    image:
      "https://cdn.prod.website-files.com/654924556009114c605140c3/65ddd0b47748864c7df79b63_chicken-tIkka-p-1080.avif"
  },
  {
    name: "Kebab",
    description: "Provençal fish stew served with rouille",
    price: "$42",
    image:
      "https://cdn.prod.website-files.com/654924556009114c605140c3/668851d94950a6cf566c6a35_P1014837-p-1080.avif"
  }
];

// Populate Menu
const menuGrid = document.getElementById("menuGrid");
menuItems.forEach((item) => {
  const menuItem = document.createElement("div");
  menuItem.className = "menu-item";
  menuItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p><strong>${item.price}</strong></p>
            `;
  menuGrid.appendChild(menuItem);
});

// Navigation Scroll Effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Form Validation
const reservationForm = document.getElementById("reservationForm");
const confirmationModal = document.getElementById("confirmationModal");
const closeModal = document.querySelector(".close-modal");

reservationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  // Clear previous errors
  document
    .querySelectorAll(".error")
    .forEach((error) => (error.textContent = ""));

  // Validate name
  const name = document.getElementById("name");
  if (name.value.trim().length < 2) {
    showError(name, "Please enter a valid name");
    isValid = false;
  }

  // Validate email
  const email = document.getElementById("email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    showError(email, "Please enter a valid email address");
    isValid = false;
  }

  // Validate date
  const date = document.getElementById("date");
  const selectedDate = new Date(date.value);
  const today = new Date();
  if (selectedDate < today) {
    showError(date, "Please select a future date");
    isValid = false;
  }

  // Validate guests
  const guests = document.getElementById("guests");
  if (guests.value < 1 || guests.value > 10) {
    showError(guests, "Please enter a number between 1 and 10");
    isValid = false;
  }

  if (isValid) {
    confirmationModal.style.display = "block";
    reservationForm.reset();
  }
});

function showError(input, message) {
  const errorDiv = input.nextElementSibling;
  errorDiv.textContent = message;
}

closeModal.addEventListener("click", () => {
  confirmationModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === confirmationModal) {
    confirmationModal.style.display = "none";
  }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }
  });
});
