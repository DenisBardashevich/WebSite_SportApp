const app_title = document.getElementById("app-title");
const app_subtitle_1 = document.getElementById("app-subtitle_1");
const app_subtitle_2 = document.getElementById("app-subtitle_2");
const app_subtitle_3 = document.getElementById("app-subtitle_2");
const app_img = document.querySelector(".hero-image-sportfanarena img");
const app_btn = document.getElementById("app-btn");
function updateHeroSection() {
  if (window.innerWidth <= 760) {
    app_title.textContent = "Get Our Mobile App for Android";
    app_subtitle_1.textContent =
      "Download the Android app (APK) in India for a top-notch experience.";
    app_subtitle_2.textContent = "Best app for fantasy sports in India.";
    app_subtitle_3.textContent = "Stay updated with instant notifications.";
    app_img.src = "img/fables_APP.png";
    app_btn.style.backgroundColor = "#ff3054";
} else {
    app_title.textContent = "Ignite Your Passion for Fantasy Sports";
    app_subtitle_1.textContent =
      "Join the premier fantasy sports adventure.";
    app_subtitle_2.textContent =
      "Play, compete, and score amazing rewards on Fables Fantasy.";
    app_subtitle_3.textContent = "Your game, your strategies.";
    app_img.src = "img/hero.webp";
    app_btn.style.backgroundColor = "#ff4500";
  }
}

// Вызываем при загрузке
document.addEventListener("DOMContentLoaded", updateHeroSection);

// Вызываем при изменении размера окна
window.addEventListener("resize", updateHeroSection);