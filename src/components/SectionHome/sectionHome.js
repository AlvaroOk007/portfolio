    const texts = ["Fullstack Engineer", "Frontend Engineer", "Backend Engineer"];
    const element = document.getElementById("typing-text");
    const typingSpeed = 150;
    const deletingSpeed = 50;
    const pauseAfterType = 1200;
    const pauseAfterDelete = 400;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function tick() {
      const currentText = texts[textIndex];
      element.textContent = currentText.slice(0, charIndex);

      if (!isDeleting) {
        if (charIndex < currentText.length) {
          charIndex++;
          setTimeout(tick, typingSpeed);
        } else {
          isDeleting = true;
          setTimeout(tick, pauseAfterType);
        }
      } else {
        if (charIndex > 0) {
          charIndex--;
          setTimeout(tick, deletingSpeed);
        } else {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(tick, pauseAfterDelete);
        }
      }
    }

    window.addEventListener("load", tick);