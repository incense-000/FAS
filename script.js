const options = document.querySelectorAll('.testimonial-option');
    const details = document.querySelectorAll('.testimonial-details');

    options.forEach(option => {
      option.addEventListener('click', () => {
        options.forEach(o => o.classList.remove('active'));
        option.classList.add('active');

        details.forEach(detail => detail.classList.remove('active'));
        document.querySelector(option.dataset.target).classList.add('active');
      });
    });