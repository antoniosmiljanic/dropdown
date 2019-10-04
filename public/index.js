const NUM_OPTIONS_LOTS = 35;
const NUM_OPTIONS_LESS = 6;

const CLASS_OPTIONS_HIDDEN = "options-hidden";
const CLASS_OPTION = "option";

const dropdowns = document.getElementsByClassName("dropdown");
const optionsLots = document.getElementsByClassName("options-lots");
const optionsLess = document.getElementsByClassName("options-less");

createDropdownOptions();

function createDropdownOptions() {
  for (j = 0; j < optionsLots.length; j++) {
    for (i = 0; i < NUM_OPTIONS_LOTS; i++) {
      var option = document.createElement("div");
      option.className = CLASS_OPTION;
      option.innerHTML = `Option ${i}`;
      option.onmousedown = onOptionMouseDown;

      optionsLots[j].appendChild(option);
    }
  }

  for (j = 0; j < optionsLess.length; j++) {
    for (i = 0; i < NUM_OPTIONS_LESS; i++) {
      var option = document.createElement("div");
      option.className = CLASS_OPTION;
      option.innerHTML = `Option ${i}`;
      option.onmousedown = onOptionMouseDown;

      optionsLess[j].appendChild(option);
    }
  }
}

function onOptionMouseDown(event) {
  const dropdown = event.target.closest(".dropdown");

  const textInput = dropdown.querySelector(".text-input");

  textInput.value = event.target.innerText;

  hideOptions(dropdown);
}

function toggleOptions(dropdown) {
  const optionsHidden = dropdown.classList.contains(CLASS_OPTIONS_HIDDEN);

  if (optionsHidden) {
    showOptions(dropdown);
  } else {
    hideOptions(dropdown);
  }
}

function showOptions(dropdown) {
  dropdown.classList.remove(CLASS_OPTIONS_HIDDEN);
}

function hideOptions(dropdown) {
  dropdown.classList.add(CLASS_OPTIONS_HIDDEN);
}
