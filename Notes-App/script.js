const addBtn = document.getElementById("add"); // add a new note

const notes = JSON.parse(localStorage.getItem("notes")); //retrive the notes from local storage
// JSON.parse turns a string of JSON text into a JavaScript object.

if (notes) { // if the notes exists, then add each note to the display area using addNewNote function
    notes.forEach((note) => {
        addNewNote(note);
    });
}

addBtn.addEventListener("click", () => {
    addNewNote(); // function to add new note. Called when new note button is clicked
});

function addNewNote(text = "") { // new note with empty text (if no arguement is passed)
    const note = document.createElement("div"); // create a new div 
    console.log(typeof(note)); // note is an object
    note.classList.add("note"); // add a DIV of class "note" to the note object

    note.innerHTML = `
        <div class="notes">
            <div class="tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="main ${text ? "" : "hidden"}"></div>
            <textarea class="${text ? "hidden" : ""}"></textarea>
        </div>
    `;

    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");

    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");

    textArea.value = text;
    main.innerHTML = marked(text);

    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden"); // if not hidden, clicking on edit button will make it hidden and vice versa (toggle)
        textArea.classList.toggle("hidden");
    });

    deleteBtn.addEventListener("click", () => {
        note.remove(); 

        updateLS();
    });

    textArea.addEventListener("input", (e) => {
        const { value } = e.target;

        main.innerHTML = marked(value);

        updateLS();
    });

    document.body.appendChild(note);
}

function updateLS() { //updating local storage
    const notesText = document.querySelectorAll("textarea");

    const notes = [];

    notesText.forEach((note) => {
        notes.push(note.value);
    });

    localStorage.setItem("notes", JSON.stringify(notes)); // store the notes in local storage
    //JSON.stringify turns a JavaScript object into JSON text and stores that JSON text in a string, 

}