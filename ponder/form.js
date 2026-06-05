const form = document.querySelector("#fsyForm");
console.log(form);

function getCheckedCampuses(campuses) {
    return Array.from(campuses)
        .filter(campus => campus.checked)
        .map(campus => campus.value);
}

function isDateValid() {
    const date = new Date(document.getElementById("availableDate").value);
    const todaysDate = new Date();  // Missing parentheses ()
    return date > todaysDate;
}

form.addEventListener("submit", event => {
    event.preventDefault();
    console.log(form.firstName.value);

    const numberOfCampuses = form.campus.value;  // Need .value to get the value
    const campuses = form.campus;
    console.log(campuses);

    if (numberOfCampuses === "one" &&
        getCheckedCampuses(campuses).length === 0) {  // === instead of ==
        document.getElementById("output")
            .textContent = "Please select one campus";
    }

    // Move isDateValid check INSIDE the submit listener
    if (!isDateValid()) {
        document.getElementById("output")
            .textContent = "Please select a future date";
    }
});