function yesClicked() {
  playMusic();
  showPage("page2");
}

function noClicked() {
  showPage("pageSlideshow");
  startSlideshow();
}

function goToDate() {
  showPage("page3");
}

function goToFinal() {
  showPage("pageFinal");
}

function showPage(pageId) {
  document.querySelectorAll(".container").forEach(div => {
    div.classList.add("hidden");
  });
  document.getElementById(pageId).classList.remove("hidden");
}

function playMusic() {
  const iframe = document.getElementById("music");
  iframe.src += "&autoplay=1";
}

let photos = [
  "photos/WhatsApp Image 2026-02-14 at 12.23.16 PM",
  "photos/WhatsApp Image 2026-02-14 at 12.23.16 PM (1)",
  "photos/WhatsApp Image 2026-02-14 at 12.23.17 PM",
  "photos/WhatsApp Image 2026-02-14 at 12.23.17 PM (1)"
  "photos/WhatsApp Image 2026-02-14 at 12.23.18 PM"
  "photos/WhatsApp Image 2026-02-14 at 12.23.21 PM"
  "photos/WhatsApp Image 2026-02-14 at 12.23.26 PM"
  "photos/WhatsApp Image 2026-02-14 at 12.23.27 PM"
];

let current = 0;

function startSlideshow() {
  setInterval(() => {
    current = (current + 1) % photos.length;
    const img = document.getElementById("slide");
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = photos[current];
      img.style.opacity = 1;
    }, 1000);
  }, 4000); // synced to slow romantic beat
}

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 400);
