/*
 * Custom JavaScript for Smiles & Braces Dental Clinic
 * Provides simple counter animations and other interactive features.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Counter animation to increment numbers smoothly on page load
  const counters = document.querySelectorAll('.count');
  const speed = 200; // Higher value slows down the animation
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const updateCount = () => {
      const count = +counter.innerText;
      const increment = Math.ceil(target / speed);
      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
});
