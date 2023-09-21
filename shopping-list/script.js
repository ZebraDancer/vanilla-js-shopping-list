const form = document.querySelector('form');
const input = document.getElementById('item-input');
const unorderedList = document.querySelector('ul');

const handleFormSubmit = (e) => {
  e.preventDefault();
  const newItem = input.value;
  createNewItem(newItem);
  form.reset();
};

const createNewItem = (newItem) => {
  const li = document.createElement('li');
  li.textContent = newItem;
  //or
  //li.appendChild(document.createTextNode(newItem));

  unorderedList.appendChild(li);
};

form.addEventListener('submit', handleFormSubmit);
