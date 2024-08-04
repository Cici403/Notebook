let myNotes = [];
let myDescriptions = [];

function addNote(){
    let noteInpuRef = document.getElementById('setNotiz');
    let descriptionInputRef = document.getElementById('setDescriptopn');
    if(noteInpuRef.value != "" && descriptionInputRef.value != ""){
        myNotes.push(noteInpuRef.value)
        myDescriptions.push(descriptionInputRef.value);
    }
        saveToLocalStorage()
        renderNotes()

        noteInpuRef.value = "";
        descriptionInputRef.value = "";
}

function saveToLocalStorage(){
    localStorage.setItem("myNotes", JSON.stringify(myNotes));
    localStorage.setItem("myDescriptions", JSON.stringify(myDescriptions));
}

function getFromLocalStorage(){
    let myNoteArr = JSON.parse(localStorage.getItem("myNotes"));
    let myDescriptionArr = JSON.parse(localStorage.getItem("myDescriptions"));

    if(myNoteArr && myNoteArr.length > 0 && myDescriptionArr && myDescriptionArr.length > 0){
        myNotes = myNoteArr;
        myDescriptions = myDescriptionArr;

        } else {
            myNotes = [];
            myDescriptions= [];
        }
}

function renderNotes() {
    let contentRef = document.getElementById('contentShowNotiz')
    contentRef .innerHTML = "";
    for(let indexNote = 0; indexNote < myNotes.length; indexNote++){
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}