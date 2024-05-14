document.addEventListener('DOMContentLoaded', function () {
  const blurDiv = document.getElementById('blur');
  const button = document.querySelector('button');

  button.addEventListener('click', function () {
      // Toggle the class to blur/unblur the image
      blurDiv.classList.toggle('blur');
      // Change the button text based on the state
      if (blurDiv.classList.contains('blur')) {
          button.textContent = 'See Image';
      } else {
          button.textContent = 'Hide Image';
      }
  });
});
