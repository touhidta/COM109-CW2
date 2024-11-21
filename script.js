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
  },
  {
    category: "starters",
    name: "Samosa",
    description: "Crispy pastry filled with spiced potatoes and peas.",
    price: "$8",
    image:
      "https://images.pexels.com/photos/14477873/pexels-photo-14477873.jpeg"
  },
  {
    category: "starters",
    name: "Paneer Tikka",
    description: "Grilled Indian cottage cheese marinated in spices.",
    price: "$12",
    image:
      "https://pixahive.com/wp-content/uploads/2020/10/Paneer-tikka-135473-pixahive.jpg"
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

// Scroll-to-Top Button
const scrollToTopButton = document.getElementById("scrollToTop");

// Show or Hide the Button on Scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    // Show button after scrolling down 200px
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});
// Sample reviews data (in a real app, you would fetch this from a server)
const reviews = [
  {
    name: "Alice",
    rating: 5,
    feedback:
      "Amazing food! The butter chicken was out of this world. Highly recommend!"
  },
  {
    name: "John",
    rating: 4,
    feedback:
      "Great ambiance and delicious food, but the wait time could be shorter."
  },
  {
    name: "Samantha",
    rating: 5,
    feedback: "Absolutely loved the biryani. The best I’ve had in ages!"
  }
];

// Function to display reviews
function displayReviews() {
  const reviewsGrid = document.getElementById("reviewsGrid");
  reviewsGrid.innerHTML = "";

  reviews.forEach((review) => {
    const reviewItem = document.createElement("div");
    reviewItem.className = "review-item";
    reviewItem.innerHTML = `
      <h3>${review.name}</h3>
      <div class="rating">${"★".repeat(review.rating)}${"☆".repeat(
      5 - review.rating
    )}</div>
      <p>${review.feedback}</p>
    `;
    reviewsGrid.appendChild(reviewItem);
  });
}

// Handle review form submission
document.getElementById("reviewForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get the values from the form
  const customerName = document.getElementById("customerName").value;
  const customerRating = parseInt(
    document.getElementById("customerRating").value
  );
  const customerFeedback = document.getElementById("customerFeedback").value;

  // Create a new review object and add it to the reviews array
  const newReview = {
    name: customerName,
    rating: customerRating,
    feedback: customerFeedback
  };
  reviews.push(newReview);

  // Display the updated reviews
  displayReviews();

  // Reset the form fields
  document.getElementById("reviewForm").reset();
});

// Initial call to display reviews
displayReviews();

// Get elements
const showReviewFormBtn = document.getElementById("showReviewFormBtn");
const reviewFormContainer = document.getElementById("reviewFormContainer");

// Toggle visibility of the review form
showReviewFormBtn.addEventListener("click", function () {
  if (
    reviewFormContainer.style.display === "none" ||
    reviewFormContainer.style.display === ""
  ) {
    reviewFormContainer.style.display = "block"; // Show the form
    showReviewFormBtn.textContent = "Hide Review Form"; // Change button text
  } else {
    reviewFormContainer.style.display = "none"; // Hide the form
    showReviewFormBtn.textContent = "Leave a Review"; // Reset button text
  }
});

// Scroll Back to Top on Button Click
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Smooth scrolling
  });
});
