let myNotes = [];
let myDescriptions = [];

function addNote(){
    let noteInpuRef = document.getElementById('setNotiz');
    let descriptionInputRef = document.getElementById('setDescriptopn');
    if(noteInpuRef.value != "" && descriptionInputRef.value != ""){
        myNotes.push(allNotes.value)
        myDescriptions.push(allNotes + "Descriptions".value);
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
    for(let indexNote = 0; indexNote < allNotes.myNotes.length; indexNote++){
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}




function renderDoneNotesNotes() {
    let donecontentRef = document.getElementById('contentDoneNotiz')
    donecontentRef.innerHTML = "";
    for(let indexDoneNote = 0; indexDoneNote < allNotes.doneNotes.length; indexDoneNote++){
        donecontentRef.innerHTML += getInDoneNoteTemplate(indexDoneNote);
    }
}