const form = document.querySelector('form');
const input = document.getElementById('item-input');
const unorderedList = document.querySelector('ul');
const clearAllBtn = document.getElementById('clear');
const filterInput = document.getElementById('filter');

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
  localStorage.setItem('new item', li);
  //or
  //li.appendChild(document.createTextNode(newItem));

  unorderedList.appendChild(li);
  resetState();
};

const removeItem = (e) => {
  //you want to target the i element, not the whole ul or li
  //its parent is the button and in order to grab that from the DOM, you need to target the parent element of i - button - and you do so by targetting the class of "remove-item"

  if (e.target.parentElement.classList.contains('remove-item')) {
    if (confirm('Are you sure?'))
      //you need to go two levels up in order to target the actual li to be deleted, hence the double parentElement
      e.target.parentElement.parentElement.remove();
    resetState();
  }
};

const removeAllItems = () => {
  const listItems = Array.from(unorderedList.children);

  listItems.forEach((item) => {
    item.remove();
  });
  resetState();
  //or
  //  listItem.innerHTML = ''

  //  while(listItem.firstChild){
  //  listItem.removeChild(listItem.firstChild)
  //  }
};

const resetState = () => {
  const items = document.querySelectorAll('li');

  // if (items.length === 0) {
  //   clearAllBtn.style.display = 'none';
  //   filterInput.style.display = 'none';
  // } else {
  //   filterInput.style.display = 'block';
  //   clearAllBtn.style.display = 'block';
  // }

  if (items.length === 0) {
    clearAllBtn.classList.add('hide-btn');
    filterInput.classList.add('hide-filter');
  } else {
    clearAllBtn.classList.remove('hide-btn');
    filterInput.classList.remove('hide-filter');
  }
};

clearAllBtn.addEventListener('click', removeAllItems);
unorderedList.addEventListener('click', removeItem);
form.addEventListener('submit', handleFormSubmit);

resetState();
