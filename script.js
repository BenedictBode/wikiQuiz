let correctYear;  // This will hold the correct year

// Fetch the event and correct year when the page loads
window.onload = function() {
    fetchEventData();
};

async function fetchEventData() {
    let today = new Date();
    let month = String(today.getMonth() + 1).padStart(2,'0');
    let day = String(today.getDate()).padStart(2,'0');
    let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/selected/${month}/${day}`;

    let response = await fetch(url);
    let data = await response.json();
    let selected = data.selected[0];

    correctYear = selected.year;

    // Update the event paragraph
    document.getElementById('event').textContent = selected.text;
}

function checkYear() {
    let guess = document.getElementById('year').value;
    let result = document.getElementById('result');
    
    if (guess == correctYear) {
        result.textContent = "Correct! The event happened in " + correctYear + ".";
        result.style.color = "green";
    } else {
        result.textContent = "Sorry, that's incorrect. The event happened in " + correctYear + ".";
        result.style.color = "red";
    }
}
