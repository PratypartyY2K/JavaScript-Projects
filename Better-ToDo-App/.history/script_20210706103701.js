const listsContainer = document.querySelector("[data-lists]");
const newListForm = document.querySelector("[data-new-list-form]");
const newListInput = document.querySelector("[data-new-list-input");

const LOCAL_STORAGE_LIST_KEY = "task.lists";
const LOCAL_STORAGE_SELECTED_LIST_KEY_ID_KEY = "task.selectedListId";
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(
  LOCAL_STORAGE_SELECTED_LIST_KEY_ID_KEY
);

listsContainer.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'li') {
        selectedListId = e.target.dataset.listId;
        saveAndRender();
    }
});

newListForm.addEventListener("submit", (e) => {
  e.preventDefault(); // we need to prevent the page from refreshing after hitting the enter button while submitting the form
  const listName = newListInput.value; // name of the element given in input
  if (listName == null || listName === "") return; //check if they have actually passed in the name
  const list = createList(listName);
  newListInput.value = null; //after input, clear out the input
  lists.push(list);
  render();
});

function createList(name) {
  return { id: Date.now().toString(), name: name, tasks: [] }; //return an object
} //unique id is made using Date object

function saveAndRender() {
  save();
  render();
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_KEY_ID_KEY, selectedListId);
}

function render() {
  clearElement(listContainer);
  lists.forEach((list) => {
    const listElement = document.createElement("li");
    listElement.dataset.listId = list.id;
    listElement.classList.add("list-name");
    listElement.innerText = list.name;
    if (list.id === selectedListId) {
      listElement.classList.add("active-list");
    }
    listsContainer.appendChild(listElement);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    //check whether element has a first child
    element.removeChild(element.firstChild); //if it has then remove
  }
}

render();
