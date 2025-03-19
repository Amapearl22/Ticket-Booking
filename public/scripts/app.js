// This file contains the JavaScript code for the ticket booking website.
// It handles user interactions, such as selecting the number of tickets,
// calculating the total price, and processing the ticket purchase.

document.addEventListener('DOMContentLoaded', function() {
    const ticketPrice = 20; // Price per ticket
    const ticketCountInput = document.getElementById('ticketCount');
    const totalPriceDisplay = document.getElementById('totalPrice');
    const purchaseButton = document.getElementById('purchaseButton');

    // Function to update the total price based on ticket count
    function updateTotalPrice() {
        const ticketCount = parseInt(ticketCountInput.value) || 0;
        const totalPrice = ticketCount * ticketPrice;
        totalPriceDisplay.textContent = `Total Price: $${totalPrice}`;
    }

    // Event listener for ticket count input change
    ticketCountInput.addEventListener('input', updateTotalPrice);

    // Event listener for purchase button click
    purchaseButton.addEventListener('click', function() {
        const ticketCount = parseInt(ticketCountInput.value) || 0;
        if (ticketCount > 0) {
            alert(`You have purchased ${ticketCount} ticket(s).`);
            ticketCountInput.value = 0; // Reset ticket count
            updateTotalPrice(); // Update total price display
        } else {
            alert('Please select at least one ticket.');
        }
    });
});