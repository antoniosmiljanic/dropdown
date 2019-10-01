const NUM_OPTIONS = 35;
const CLASS_OPTIONS_HIDDEN = "options-hidden";
const CLASS_OPTION = "option";

const dropdown = document.getElementById("dropdown");
const options = document.getElementsByClassName("options")[0];
const textInput = document.getElementById("text-input");

createDropdownOptions();

function createDropdownOptions() {
    for (i = 0; i < NUM_OPTIONS; i++) {
        var option = document.createElement("div");
        option.className = CLASS_OPTION;
        option.innerHTML = `Option ${i}`;
        option.onmousedown = onOptionMouseDown;

        options.appendChild(option);
    }
}

function onOptionMouseDown(event) {
    textInput.value = event.target.innerText;
    hideOptions();
}

function toggleOptions() {
    const optionsHidden = dropdown.classList.contains(CLASS_OPTIONS_HIDDEN);

    if (optionsHidden) {
        showOptions();
    } else {
        hideOptions();
    }
}

function showOptions() {
    dropdown.classList.remove(CLASS_OPTIONS_HIDDEN);
}

function hideOptions() {
    dropdown.classList.add(CLASS_OPTIONS_HIDDEN);
}