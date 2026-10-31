const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// /change the postion of no button
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// yes button functionality

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});


function hearts(e) {
  const emojis = ["💖","💕","💋","❤️","💗","muah","心肝宝贝","kiss","我爱你"];
  const heart = document.createElement("span");

  heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  heart.style.position = "fixed";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  heart.style.fontSize = "24px";
  heart.style.pointerEvents = "none";
  heart.style.transition = "transform 1.2s ease, opacity 1.2s";
  heart.style.opacity = "1";

  document.body.appendChild(heart);

  requestAnimationFrame(() => {
    heart.style.transform = "translateY(-80px) scale(1.5)";
    heart.style.opacity = "0";
  });

  setTimeout(() => heart.remove(), 1200);}


  function loveWave(e) {
  const wave = document.createElement("span");

  wave.style.position = "fixed";
  wave.style.left = e.clientX + "px";
  wave.style.top = e.clientY + "px";
  wave.style.width = "20px";
  wave.style.height = "20px";
  wave.style.borderRadius = "50%";
  wave.style.border = "2px solid pink";
  wave.style.pointerEvents = "none";
  wave.style.transform = "translate(-50%, -50%) scale(1)";
  wave.style.opacity = "0.8";
  wave.style.transition = "transform 0.8s ease, opacity 0.8s ease";

  document.body.appendChild(wave);

  requestAnimationFrame(() => {
    wave.style.transform = "translate(-50%, -50%) scale(8)";
    wave.style.opacity = "0";
  });

  setTimeout(() => wave.remove(), 800);
  if (!document.getElementById("loveInput")) {
    const input = document.createElement("input");
    input.id = "loveInput";
    input.placeholder = "Write something sweet… 💖";

    input.style.position = "fixed";
    input.style.bottom = "30px";
    input.style.left = "50%";
    input.style.transform = "translateX(-50%)";
    input.style.padding = "12px 18px";
    input.style.borderRadius = "20px";
    input.style.border = "2px solid pink";
    input.style.outline = "none";
    input.style.fontSize = "16px";
    input.style.opacity = "0";
    input.style.transition = "opacity 0.5s ease";

    document.body.appendChild(input);

    setTimeout(() => {
      input.style.opacity = "1";
      input.focus();
    }, 300);
  }
}

function magic() {
  const colors = ["#ff9ecf", "#ff6fa1", "#ffb6d9", "#ff80aa", "#ff4d85"];
  
  function createHeart() {
    const heart = document.createElement("span");
    heart.textContent = "💖";
    
    const size = Math.random() * 20 + 15; // 15px to 35px
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";
    heart.style.fontSize = size + "px";
    heart.style.opacity = Math.random() * 0.5 + 0.5; // 0.5 to 1
    heart.style.pointerEvents = "none";
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.transition = "transform 5s linear, opacity 5s linear";

    document.body.appendChild(heart);

    // Floating animation
    requestAnimationFrame(() => {
      const xMove = (Math.random() - 0.5) * 200; // left/right drift
      const yMove = -window.innerHeight - size;   // float up
      heart.style.transform = `translate(${xMove}px, ${yMove}px)`;
      heart.style.opacity = "0";
    });

    setTimeout(() => heart.remove(), 5000);
  }

  // Create hearts every 300ms
  setInterval(createHeart, 300);
}

function music(){
  const audio = document.getElementById("aa"); // your <audio> element

audio.src = "rose.mp3";  // set the file
audio.loop = true;             // optional, repeat forever
audio.volume = 0.4;            // optional, soft volume

audio.play()                     // play returns a Promise
  .then(() => console.log("Music started 🎵"))
  .catch(err => console.log("Music blocked until user clicks"));

}


// 1. Floating hearts and butterflies
function floatingSymbols() {
  const symbols = ["💗", "💕", "🦋", "♡", "✨"];

  const el = document.createElement("div");
  el.className = "floating-symbol";
  el.textContent = symbols[
    Math.floor(Math.random() * symbols.length)
  ];

  el.style.left = Math.random() * 100 + "vw";
  el.style.bottom = "-40px";
  el.style.fontSize = 15 + Math.random() * 20 + "px";

  document.body.appendChild(el);
  setTimeout(() => el.remove(), 6000);
}

// 2. Heart explosion on click
function heartExplosion(x, y) {
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("div");
    heart.className = "burst-heart";
    heart.textContent = "💗";

    const angle = Math.random() * Math.PI * 2;
    const distance = 40 + Math.random() * 80;

    heart.style.left = x + "px";
    heart.style.top = y + "px";
    heart.style.setProperty("--x", Math.cos(angle) * distance + "px");
    heart.style.setProperty("--y", Math.sin(angle) * distance + "px");

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  }
}

// 3. Bouncing strawberries
function addStrawberries() {
  ["🍓", "🍓"].forEach((fruit, i) => {
    const el = document.createElement("div");
    el.className = "corner-strawberry";
    el.textContent = fruit;
    el.style.bottom = "15px";
    el.style[i === 0 ? "left" : "right"] = "20px";
    document.body.appendChild(el);
  });
}

// 4. Magical cursor trail
function sparkleTrail(e) {
  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";
  sparkle.textContent = "✧";
  sparkle.style.left = e.clientX + "px";
  sparkle.style.top = e.clientY + "px";
  sparkle.style.color = "#ff80a8";
  sparkle.style.fontSize = "20px";

  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 800);
}

// 5. Initialize decorations
function startRomanticEffects() {
  setInterval(floatingSymbols, 900);
  addStrawberries();
  document.addEventListener("click", e =>
    heartExplosion(e.clientX, e.clientY)
  );
  document.addEventListener("mousemove", sparkleTrail);
}

startRomanticEffects();



const $ = (id) => document.getElementById(id);

// 1. HEART LOCKET
$("love-locket").addEventListener("click", function() {
  this.classList.toggle("open");
  heartExplosion(
    window.innerWidth * 0.15,
    window.innerHeight * 0.4
  );
});

// 2. HEART EXPLOSION
function heartExplosion(x, y) {
  const symbols = ["💗", "💕", "💖", "✨", "♡"];

  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("span");
    heart.className = "magic-heart";
    heart.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    const angle = Math.random() * Math.PI * 2;
    const distance = 50 + Math.random() * 100;

    heart.style.left = x + "px";
    heart.style.top = y + "px";
    heart.style.setProperty("--dx", Math.cos(angle) * distance + "px");
    heart.style.setProperty("--dy", Math.sin(angle) * distance + "px");

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
  }
}

// 3. SHOOTING STARS
function shootingStar() {
  const star = document.createElement("div");
  star.className = "shooting-star";
  star.textContent = "🌟";

  $("star-container").appendChild(star);
  setTimeout(() => star.remove(), 2000);
}

setInterval(shootingStar, 7000);

// 4. MAGIC BEAR
function showBear() {
  const bear = $("magic-bear");
  bear.classList.add("show");

  setTimeout(() => {
    bear.classList.remove("show");
  }, 5000);
}

setInterval(showBear, 18000);

$("magic-bear").addEventListener("click", () => {
  heartExplosion(
    window.innerWidth / 2,
    window.innerHeight - 60
  );
});

// 5. BUBBLES
function createBubble() {
  const bubble = document.createElement("div");
  bubble.className = "magic-bubble";

  bubble.style.left = Math.random() * 95 + "vw";
  bubble.style.animationDuration = (5 + Math.random() * 5) + "s";

  bubble.addEventListener("click", () => {
    const rect = bubble.getBoundingClientRect();

    heartExplosion(
      rect.left + 12,
      rect.top + 12
    );

    bubble.remove();
  });

  $("bubble-container").appendChild(bubble);

  setTimeout(() => bubble.remove(), 10000);
}

setInterval(createBubble, 1600);

// 6. BUTTERFLY
$("magic-butterfly").addEventListener("click", function() {
  heartExplosion(
    window.innerWidth / 2,
    window.innerHeight * 0.2
  );

  this.style.filter = "drop-shadow(0 0 15px pink)";

  setTimeout(() => {
    this.style.filter = "";
  }, 1000);
});

// 7. MAGIC CRYSTAL BALL
$("crystal-ball").addEventListener("click", function() {
  const surprises = [
    "💗💗💗",
    "🦋✨🦋",
    "💕🌸💕",
    "🍓💖🍓",
    "🌟💗🌟"
  ];

  this.textContent = "✨";

  heartExplosion(
    window.innerWidth * 0.85,
    window.innerHeight * 0.4
  );

  setTimeout(() => {
    this.textContent = "🔮";
  }, 1000);
});


function openSecret() {
    document.getElementById("loveEnvelope").style.display = "none";
    document.getElementById("secretQuestion").style.display = "block";
}

const loveSlider = document.getElementById("loveSlider");

loveSlider.addEventListener("input", function () {
    document.getElementById("loveNumber").textContent =
        this.value + "% 💗";
});

