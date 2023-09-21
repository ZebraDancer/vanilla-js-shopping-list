const form = document.querySelector('form');
const input = document.getElementById('item-input');

const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log(input.value);
  form.reset();
};

form.addEventListener('submit', handleFormSubmit);
