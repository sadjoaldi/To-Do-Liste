const form = document.querySelector("form");
//storage
function storeList() {
  window.localStorage.todolist = list.innerHTML;
}

function getTodos() {
  if (window.localStorage.todolist) {
    list.innerHTML = window.localStorage.todolist;
  } else {
    list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`;
  }
}
window.addEventListener("load", getTodos);

//add element
form.addEventListener("submit", (e) => {
  e.preventDefault(); //permet de se premnunir contre son comportement par default(type rechager la page)
  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  storeList();
});

//remove element
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeList();
});

//*****
