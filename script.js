// Typing Animation
const typingText = document.querySelector('.typing-text');
const texts = ['Data Analyst ', 'Excel Enthusiast ', 'SQL Developer ', 'Python Programmer '];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 150; // typing speed per character
const erasingSpeed = 100; // erasing speed per character
const delayBetweenTexts = 1000; // delay before erasing
const delayBeforeTyping = 500; // delay before typing next text

// Create a blinking cursor
typingText.insertAdjacentHTML('beforeend', '<span class="cursor">|</span>');

function type() {
  const cursor = typingText.querySelector('.cursor');

  if (charIndex < texts[textIndex].length) {
    typingText.textContent = texts[textIndex].substring(0, charIndex);
    typingText.appendChild(cursor); // keep cursor visible
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenTexts);
  }
}

function erase() {
  const cursor = typingText.querySelector('.cursor');

  if (charIndex > 0) {
    typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
    typingText.appendChild(cursor); // keep cursor visible
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, delayBeforeTyping);
  }
}
 function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Close when clicking outside
window.onclick = function(event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};
document.addEventListener('DOMContentLoaded', () => {
  type();
});
