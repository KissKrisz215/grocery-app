const list = document.getElementById("list");
const inputElement = document.querySelector('div input');
const containerTop = document.getElementById('container-top');
const clearSection = document.getElementById('clear');
const formSection = document.getElementById('formSection');

function clearCart(){
  clearSection.innerHTML = '';
  containerTop.innerHTML = `<p class="text-red bg-red">Empty List</p>`;
   setTimeout(() => {
     containerTop.innerHTML = ``;
   }, "5000");
  list.innerHTML = '';
}

let listId = 0;

function submitList(){
   if(inputElement.value === ''){
   containerTop.innerHTML = `<p class="text-red bg-red">Please enter value!</p>`;
   setTimeout(() => {
     containerTop.innerHTML = ``;
   }, "5000");
   }else{
      containerTop.innerHTML = `<p class="text-green bg-green">Item Added to the list!</p>`;
   setTimeout(() => {
     containerTop.innerHTML = ``;
   }, "5000");
       listId++;
       list.innerHTML += `<div id="${listId}" class="d-flex justify-content-between p-1">
   <p>${inputElement.value}</p>
   <span class="d-flex gap-1"><button onclick="editListItem(${listId})" class="d-flex align-items-start justify-content-start bg-transparent border-0 p-0 m-0"><i class="bi bi-pencil-square text-success"></i></button><button onclick="deleteItem(${listId})" class="d-flex align-items-start justify-content-start bg-transparent border-0 p-0 m-0"><i class="bi bi-trash text-danger"></i></button></span>
   </div>`
   inputElement.value =  '';
     clearSection.innerHTML = `<button class="text-red btn-link text-decoration-none border-0 bg-transparent" onclick="clearCart()">Clear Items</button>`;
   }
}

function editListItem(id){
  console.log(id);
  inputElement.value = document.getElementById(id).querySelector('p').innerText;
  formSection.innerHTML = `<button class="btn btn-primary" onclick="editItem(${id})">Edit</button>`
}

function deleteItem(id){
  const elementId = document.getElementById(id);
  elementId.remove();
    if(list.childNodes.length == 0){
    clearSection.innerHTML = '';
  }
  containerTop.innerHTML = `<p class="text-red bg-red">Item Removed!</p>`;
   setTimeout(() => {
     containerTop.innerHTML = ``;
   }, "5000");
}

function editItem(id){
  document.getElementById(id).querySelector('p').innerText =  inputElement.value;
  containerTop.innerHTML = `<p class="text-green bg-green">Value Changed!</p>`;
   setTimeout(() => {
     containerTop.innerHTML = ``;
   }, "5000");
  inputElement.value = "";
  formSection.innerHTML = `<button class="btn btn-primary" onclick="submitList()">Submit</button>`;
}