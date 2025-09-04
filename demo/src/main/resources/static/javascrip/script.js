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

    const bookingData = {
      name: bookingForm.name.value,
      email: bookingForm.email.value,
      phone: bookingForm.phone.value,
      checkinDate: bookingForm.checkin.value,
      checkoutDate: bookingForm.checkout.value,
      guests: parseInt(bookingForm.guests.value),
      destination: modalDestination.textContent,
      price: parseFloat(modalPrice.textContent)
    };

    fetch('/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    })
    .then(response => response.text())
    .then(data => {
      alert(data);
      modal.style.display = 'none';
      bookingForm.reset();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Booking failed');
    });
  });
});
