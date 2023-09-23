// const form = document.querySelector("form");
//storage
// function storeList() {
//   window.localStorage.todolist = list.innerHTML;
// }

// function getTodos() {
//   if (window.localStorage.todolist) {
//     list.innerHTML = window.localStorage.todolist;
//   } else {
//     list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`;
//   }
// }
// window.addEventListener("load", getTodos);

//add element
// form.addEventListener("submit", (e) => {
//   e.preventDefault(); //permet de se premnunir contre son comportement par default(type rechager la page)
//   list.innerHTML += `<li>${item.value}</li>`;
//   item.value = "";
//   storeList();
// });

//remove element
// list.addEventListener("click", (e) => {
//   if (e.target.classList.contains("checked")) {
//     e.target.remove();
//   } else {
//     e.target.classList.add("checked");
//   }
//   storeList();
// });

// *****

// *on commence par selectionner le formulaire**
const form = document.querySelector("form");
//*faire une fonction de stockage
function storageList() {
  window.localStorage.todolist = list.innerHTML;
}
//*function pour attribuer la valeur du local storage à ma liste
function getTodos() {
  if (window.localStorage.todolist) {
    list.innerHTML = window.localStorage.todolist;
  } else {
    list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`;
  }
}
window.addEventListener("load", getTodos());

//*ajouter les elements à ma liste
form.addEventListener("submit", (e) => {
  e.preventDefault(); //permet de se premnunir contre son comportement par default(type rechager la page)
  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  storageList();
});

//*Pour supprimer un element à ma liste
