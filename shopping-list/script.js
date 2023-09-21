const form = document.querySelector('form');
const input = document.getElementById('item-input');
const unorderedList = document.querySelector('ul');

const handleFormSubmit = (e) => {
  e.preventDefault();
  const newItem = input.value;
  createNewItem(newItem);
  form.reset();
};

const createIcon = () => {
  const icon = document.createElement('i');
  icon.classList.add('fa-solid', 'fa-xmark');
  return icon;
};

const createBtn = () => {
  const button = document.createElement('button');
  button.classList.add('btn-link', 'remove-item', 'text-red');
  //you could also pass icon classes in the function below as argument
  const icon = createIcon();
  button.appendChild(icon);
  return button;
};

const createNewItem = (newItem) => {
  const li = document.createElement('li');
  li.textContent = newItem;
  //you could also pass button classes in the function below as argument
  const button = createBtn();
  li.appendChild(button);
  //or
  //li.appendChild(document.createTextNode(newItem));

  unorderedList.appendChild(li);
};

form.addEventListener('submit', handleFormSubmit);
