let todoInput; //miejsce, gdzie użytkownik wpisuje treść zadania
let errorInfo; // info o braku zadań i konieczności wpisania tekstu
let addBtn; // przycisk ADD - dodaje nowe elementy do listy
let ulList; // lista zadań, tagi UL
let newTodo; // nowo dodany LI, nowe zadanie

let popup; // popup
let popupInfo; //tekst w popupie jak się doda pusty tekst
let todoToEdit; // edytowanyTodo
let popupInput; // input w popupie
let popupAddBtn; // przycisk zatwierdz w popupie
let popupCloseBtn; //przycisk anuluj w popupie

const main = () => {
  //wywoływanie funkcji
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  todoInput = document.querySelector(".todo-input");
  errorInfo = document.querySelector(".error-info");
  addBtn = document.querySelector(".btn-add");
  ulList = document.querySelector(".todolist ul");

  popup = document.querySelector(".popup");
  popupInfo = document.querySelector(".popup-info"); //tekst w popupie jak się doda pusty tekst
  // todoToEdit = document.querySelector(''); // edytowanyTodo
  popupInput = document.querySelector(".popup-input"); // input w popupie
  popupAddBtn = document.querySelector(".accept"); // przycisk zatwierdz w popupie
  popupCloseBtn = document.querySelector(".cancel"); //przycisk anuluj w popupie
};

const prepareDOMEvents = () => {
  addBtn.addEventListener("click", addNewTodo);
  ulList.addEventListener("click", checkClick);
  popupCloseBtn.addEventListener("click", closePopup);
  popupAddBtn.addEventListener("click", changeTodoText);
  todoInput.addEventListener('keyup', enterKeyCheck);
};

/*
1. Tworzyć nowy Element li
2. Dodawać nowy element to ul
3. Funkcja odpalana na click na przycisk add
4. Przechwycić treść z inputa i umieścic w nowo utworzonym li
5. funkcja nie doda do listy pustego todosa
*/

const addNewTodo = () => {
  if (todoInput.value !== "") {
    newTodo = document.createElement("li");
    newTodo.textContent = todoInput.value;

    createToolsArea();
    ulList.append(newTodo);

    todoInput.value = "";
    errorInfo.textContent = "";
  } else {
    errorInfo.textContent = "Wpisz treść zadania!";
  }
};

const createToolsArea = () => {
  const toolsPanel = document.createElement("div");
  toolsPanel.classList.add("tools");
  newTodo.append(toolsPanel);

  const completeBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  completeBtn.classList.add("complete");
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';

  editBtn.classList.add("edit");
  editBtn.textContent = "EDIT";

  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

  toolsPanel.append(completeBtn, editBtn, deleteBtn);
};

const checkClick = (e) => {
  // console.log(e.target.classList.contains('complete'));
  if (e.target.matches(".complete")) {
    e.target.closest("li").classList.toggle("completed");
    e.target.classList.toggle("completed");
  } else if (e.target.matches(".edit")) {
    editTodo(e);
  } else if (e.target.matches(".delete")) {
    deleteTodo(e);
  }
};

const editTodo = (e) => {
  todoToEdit = e.target.closest("li");
  popupInput.value = todoToEdit.firstChild.textContent;

  popup.style.display = "flex";
};

const closePopup = () => {
  popup.style.display = "none";
  popupInfo.textContent = "";
};

const changeTodoText = () => {
  if (popupInput.value !== "") {
    todoToEdit.firstChild.textContent = popupInput.value;
    popup.style.display = "none";
    popupInfo.textContent = "";
  } else {
    popupInfo.textContent = "Musisz podać jakąś treść!";
  }
};

const deleteTodo = (e) => {
  e.target.closest("li").remove();

  const allTodos = ulList.querySelectorAll("li");

  if(allTodos.length === 0) {
    errorInfo.textContent = "Brak zadań na liście."
  }
};


const enterKeyCheck = e => {
  if(e.key === 'Enter') {
    addNewTodo()
  }
}

document.addEventListener("DOMContentLoaded", main);
