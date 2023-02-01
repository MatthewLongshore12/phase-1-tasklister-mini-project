const form = document.getElementById('create-task-form');
const uList = document.getElementById('tasks');

function addTaskToList(eventObj) {
  eventObj.preventDefault();
  const listItem = document.createElement('li');
  const newText = eventObj.target['new-task-description'].value;
  listItem.textContent = newText;
  uList.append(listItem);
  createButton(listItem);
}

form.addEventListener('submit', addTaskToList);

function createButton() {
  const btn = document.createElement('button');
  btn.textContent = "X";
  uList.append(btn);
  btn.addEventListener('click', createButton);
}

function deleteTask() {
  
}

removeEventListener('click',);


document.addEventListener('DOMContentLoaded', () => {

  
})

