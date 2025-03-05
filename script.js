const app_title = document.getElementById("app-title");
const app_subtitle_1 = document.getElementById("app-subtitle_1");
const app_subtitle_2 = document.getElementById("app-subtitle_2");
const app_subtitle_3 = document.getElementById("app-subtitle_2");
const app_img = document.querySelector(".hero-image-sportfanarena img");
const app_btn = document.getElementById("app-btn");
const burgerButton = document.querySelector('.luxury-header__burger-button');
const navMenu = document.querySelector('.luxury-header__nav');

function updateHeroSection() {
  if (window.innerWidth <= 760) {
    app_title.textContent = "Get Our Mobile App for Android";
    app_subtitle_1.textContent = "Download the Android app (APK) in India for a top-notch experience.";
    app_subtitle_2.textContent = "Best app for fantasy sports in India.";
    app_subtitle_3.textContent = "Stay updated with instant notifications.";
    app_img.src = "img/bg-2.png";
    app_btn.style.backgroundColor = "#ff3054";
  } else {
    app_title.textContent = "Ignite Your Passion for Fantasy Sports";
    app_subtitle_1.textContent = "Join the premier fantasy sports adventure.";
    app_subtitle_2.textContent = "Play, compete, and score amazing rewards on Fables Fantasy.";
    app_subtitle_3.textContent = "Your game, your strategies.";
    app_img.src = "img/bg-1.jpg";
    app_btn.style.backgroundColor = "#ff4500";
  }
}

function toggleFAQAnswer(event) {
  const answer = event.currentTarget.nextElementSibling;
  const allAnswers = document.querySelectorAll(".faq-answer-sportfanarena");

  allAnswers.forEach((ans) => {
    if (ans !== answer) {
      ans.classList.remove("active");
    }
  });

  answer.classList.toggle("active");
}

function toggleNavMenu() {
  navMenu.classList.toggle('luxury-header__nav--visible');
}

document.addEventListener("DOMContentLoaded", () => {
  updateHeroSection();

  const faqQuestions = document.querySelectorAll(".faq-question-sportfanarena");
  faqQuestions.forEach(question => {
    question.addEventListener("click", toggleFAQAnswer);
  });

  // Add a click event listener to the burger button
  burgerButton.addEventListener('click', toggleNavMenu);
});

window.addEventListener("resize", updateHeroSection);