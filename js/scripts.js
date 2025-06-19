document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
});

// Auto-select Card Type from URL param
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const cardType = urlParams.get('card');
    if (cardType) {
        const select = document.querySelector('select');
        if (select) {
            select.innerHTML = `<option selected>${cardType}</option>`;
        }
    }
});