const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

document.querySelector('.js-input-box')
  .addEventListener('keypress', (event) => {
  if (event.key === 'Enter'){
    addTask();
  }
});

document.querySelector('.js-add-btn')
  .addEventListener('click', () =>{
    addTask();
  });


function addTask(){
  if (inputBox.value === '') {
    alert('You must write something');
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = '';
  saveToLocalStorage();
}


listContainer.addEventListener('click', (e) => {

  if (e.target.tagName === 'LI') {
    e.target.classList.add('checked');
    saveToLocalStorage();
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveToLocalStorage();
  }

}, false);

function saveToLocalStorage() {
  localStorage.setItem('data', listContainer.innerHTML);
}
 
function loadLocalStorage() {
  listContainer.innerHTML = localStorage.getItem('data');
}

loadLocalStorage();
