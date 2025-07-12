export function countingAutoWhenScroll(el) {
  let goal = parseInt(el.dataset.goal); // The goal variable is parsed as an integer to ensure it's a valid number.
  let startTime = null;
  const duration = 2000; // Animation duration in milliseconds

  function counter(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }

    const progress = timestamp - startTime;
    const percentage = Math.min(progress / duration, 1); // The percentage variable represents the progress as a value between 0 and 1.
    const count = Math.floor(percentage * goal); //The count variable is calculated by multiplying the percentage with the goal and rounding it down to the nearest integer.

    el.textContent = count;

    if (progress < duration) {
      window.requestAnimationFrame(counter);
    } else {
      el.textContent = goal;
    }
  }

  window.requestAnimationFrame(counter);
}