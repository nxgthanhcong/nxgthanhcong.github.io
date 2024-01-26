(() => {
  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    const cursor = document.querySelector(".cursor-overlay");
    if (cursor) {
      cursor.style.backgroundImage = ` 
      radial-gradient(
        600px at ${x}px ${y}px,
        rgba(29, 78, 216, 0.15),
        transparent 80%
      )
      `;
    }
  });
})();
