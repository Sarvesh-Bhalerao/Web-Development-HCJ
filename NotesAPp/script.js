const addbtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("allnotes"));
// console.log(notes);

if (notes) {
  notes.forEach((note) => addnewnote(note));
}

addbtn.addEventListener("click", () => addnewnote());

function addnewnote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
  <div class="tools">
  <button class="edit"><i class="fas fa-edit"></i></button>
  <button class="delete"><i class="fas fa-trash"></i></button>
</div>
<div class="main ${text ? "" : "hidden"}"></div>
<textarea class="${text ? "hidden" : ""}"></textarea>`;

  const editbtn = note.querySelector(".edit");
  const deletebtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  textArea.value = text;
  main.innerHTML = marked(text);

  deletebtn.addEventListener("click", () => {
    note.remove();
    updatelocalstore();
  });

  editbtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);
    updatelocalstore();
  });

  document.body.appendChild(note);
}

// localStorage.setItem("name", "abc");
// localStorage.setItem("stringified", JSON.stringify(obj));
// localStorage.getItem("name");
// JSON.parse(localStorage.getItem("name"));
// localStorage.removeItem("name");
//You can use session storage it works same as localstorage but after session all data will get erased

function updatelocalstore() {
  const notestext = document.querySelectorAll("textarea");
  const notes = [];

  notestext.forEach((note) => notes.push(note.value));

  localStorage.setItem("allnotes", JSON.stringify(notes));
}
