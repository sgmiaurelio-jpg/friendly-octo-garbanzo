
// Display the current year in the footer
const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent =
        "© " + new Date().getFullYear() +
        " CodeJourney. All Rights Reserved.";
}

// Create a Back to Top button
const topButton = document.createElement("button");

topButton.textContent = "Back to Top";
topButton.style.padding = "12px 20px";
topButton.style.margin = "20px";
topButton.style.backgroundColor = "#2563eb";
topButton.style.color = "white";
topButton.style.border = "none";
topButton.style.borderRadius = "6px";
topButton.style.cursor = "pointer";

document.body.appendChild(topButton);

// Scroll to the top when clicked
topButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
