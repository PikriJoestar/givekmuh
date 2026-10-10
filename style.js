<script>
  const heartStyle = document.createElement("style");
  heartStyle.textContent = `
    .floating-heart {
      position: fixed;
      bottom: -40px;
      z-index: 9999;
      pointer-events: none;
      animation: float-heart var(--duration) linear forwards;
      will-change: transform, opacity;
    }

    @keyframes float-heart {
      0% {
        transform: translate(0, 0) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      100% {
        transform: translate(var(--drift), -110vh) rotate(var(--rotation));
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(heartStyle);

  function createHeart() {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = "❤️";

    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.fontSize = `${16 + Math.random() * 24}px`;
    heart.style.setProperty("--duration", `${4 + Math.random() * 4}s`);
    heart.style.setProperty("--drift", `${-80 + Math.random() * 160}px`);
    heart.style.setProperty("--rotation", `${-45 + Math.random() * 90}deg`);

    document.body.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }

  setInterval(createHeart, 350);
</script>
