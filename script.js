
// ===== FUN FACT BUTTON =====

const factButton = document.getElementById("fact-button");
const factText = document.getElementById("fact-text");

const facts = [
  "I'm always learning something new! 🚀",
  "I enjoy working on creative projects. 🎨",
  "Every day is a chance to improve. 💙",
  "Thanks for visiting my website! ⭐",
  "This website was built with HTML, CSS, and JavaScript! 💻"
];

let lastFactIndex = -1;

factButton.addEventListener("click", function () {
  let randomIndex;

  // Avoid repeating the same fact twice in a row.
  do {
    randomIndex = Math.floor(Math.random() * facts.length);
  } while (facts.length > 1 && randomIndex === lastFactIndex);

  lastFactIndex = randomIndex;
  factText.textContent = facts[randomIndex];

  factButton.textContent = "Show Another Fact";
});

// ===== AUTOMATIC COPYRIGHT YEAR =====

document.getElementById("year").textContent =
  new Date().getFullYear();

// ===== BACK TO TOP BUTTON =====

const topButton = document.getElementById("top-button");

topButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
