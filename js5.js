const form = document.querySelector("form");

form.addEventListener("input", (event) => {
    const input = event.target;
    const error = input.nextElementSibling;

    if (!input.validity.valid) {
        showError(input, error);
    } else {
        hideError(error);
    }
});

function showError(input, error) {
    if (input.validity.valueMissing) {
        error.textContent = "You need to enter a value.";
    } else if (input.validity.typeMismatch) {
        error.textContent = "Entered value is not valid.";
    } else if (input.validity.tooShort) {
        error.textContent = `Should be min ${input.minLength} characters.`;
    }
    error.classList.add("error", "active");
}

function hideError(error) {
    error.textContent = "";
    error.classList.remove("error", "active");
}

form.addEventListener("submit", (event) => {
    const inputs = form.querySelectorAll(".abc");

    for (const input of inputs) {
        if (!input.validity.valid) {
            const error = input.nextElementSibling;
            showError(input, error);
            event.preventDefault();
        }
    }
});