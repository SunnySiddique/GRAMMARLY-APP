const charVal = document.getElementById("textarea");
let totalCount = document.getElementById("total-counter");
let remainingCount = document.getElementById("remaining-counter");

let char = 0;

const updateCounter = () => {
  userChar = charVal.value.length;
  totalCount.textContent = userChar;
  remainingCount.textContent = 500 - userChar;
};

charVal.addEventListener("keyup", () => updateCounter());

const copyText = () => {
  charVal.select();
  charVal.setSelectionRange(0, 9999); //mobile
  navigator.clipboard.writeText(charVal.value);
};
