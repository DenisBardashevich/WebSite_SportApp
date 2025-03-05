const app_title = document.getElementById("app-title");
const app_subtitle_1 = document.getElementById("app-subtitle_1");
const app_subtitle_2 = document.getElementById("app-subtitle_2");
const app_subtitle_3 = document.getElementById("app-subtitle_2");
const app_img = document.querySelector(".hero-image-sportfanarena img");
const app_btn = document.getElementById("app-btn");
function updateHeroSection() {
  if (window.innerWidth <= 760) {
    app_title.textContent = "Download our mobile app for Android";
    app_subtitle_1.textContent =
      "Download app for Android (APK) in India for a premier experience.";
    app_subtitle_2.textContent = "Best book app in India.";
    app_subtitle_3.textContent = "Receive notifications about updates.";
    app_img.src = "img/raja_APP.png";
    app_btn.style.backgroundColor = "#ff3054";
  } else {
    app_title.textContent = "Unleash the Fan in You";
    app_subtitle_1.textContent =
      "Join the ultimate fantasy cricket experience.";
    app_subtitle_2.textContent =
      "Play, compete, and win big rewards on RajaBets Sport.";
    app_subtitle_3.textContent = "Your game, your rules.";
    app_img.src = "img/hero.webp";
    app_btn.style.backgroundColor = "#ff4500";
  }
}

// Вызываем при загрузке
document.addEventListener("DOMContentLoaded", updateHeroSection);

// Вызываем при изменении размера окна
window.addEventListener("resize", updateHeroSection);