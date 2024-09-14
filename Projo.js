// Add event listener to the "Read More" button
const readMoreBtn = document.querySelector('.btn');
readMoreBtn.addEventListener('click', () => {
  // Redirect to the about page or perform any other action
  window.location.href = 'about.html'; 
});

// Add event listener to the "Submit Here" button
const submitBtn = document.querySelector('.cta button');
submitBtn.addEventListener('click', () => {
  // Redirect to the registration page or perform any other action
  window.location.href = 'registration.html'; 
});
