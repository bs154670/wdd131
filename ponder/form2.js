const form = document.querySelector("#fsyForm");

function isDateValid() {
    const date = new Date(document.getElementById("availableDate").value);
    const todaysDate = new Date();
    return date > todaysDate;
}

form.addEventListener("submit", event => {
    event.preventDefault();

    if (!isDateValid()) {
        document.getElementById("output").textContent = "Please select a future date";
        return;
    }

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const type = form.travelRange.value === "one" ? "Guest" : "Student";
    const date = form.availableDate.value;

    document.getElementById("output").innerHTML = `
        <div class="ticket">
            <h2>🎟 Event Ticket</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Type:</strong> ${type}</p>
            <p><strong>Event Date:</strong> ${date}</p>
        </div>
    `;
});

document.getElementById("travelRange").addEventListener("change", function() {
    const notesContainer = document.getElementById("notesContainer");
    const accessCodeContainer = document.getElementById("accessCodeContainer");

    if (this.value === "many") {
        notesContainer.hidden = false;
        accessCodeContainer.hidden = true;
    } else if (this.value === "one") {
        accessCodeContainer.hidden = false;
        notesContainer.hidden = true;
    } else {
        notesContainer.hidden = true;
        accessCodeContainer.hidden = true;
    }
});