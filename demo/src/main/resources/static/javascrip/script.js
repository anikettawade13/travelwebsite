document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('bookingModal');
  const modalDestination = document.getElementById('modalDestination');
  const modalPrice = document.getElementById('modalPrice');
  const closeModalBtn = document.querySelector('.close-modal');
  const bookingForm = document.querySelector('.booking-form');

  // Open modal when any BOOK NOW button is clicked
  document.querySelectorAll('.btn2').forEach(button => {
    button.addEventListener('click', function () {
      const destination = this.getAttribute('data-destination');
      const price = this.getAttribute('data-price');
      modalDestination.textContent = destination;
      modalPrice.textContent = price;
      modal.style.display = 'block';
    });
  });

  // Close modal when close button is clicked
  closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside the modal content
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Handle form submission (for demonstration, prevent actual submission)
  bookingForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Booking confirmed! Thank you.');
    modal.style.display = 'none';
    bookingForm.reset();
  });
});
