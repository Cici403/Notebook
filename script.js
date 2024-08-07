let myNotes = [];
let myDescriptions = [];
let inProgressNotes = [];
let inProgressDescriptions = [];
let doneNotes = [];
let doneDescriptions = [];

let allNotes = {
    'myNotes': ['Hallo'],
    'myDescriptions': ['Welt'],
    'inProgressNotes': [],
    'inProgressDescriptions': [],
    'doneNotes': [],
    'doneDescriptions': []
}

function init(){
    //getFromLocalStorage()
    //getInProgressNoteFromLocalStorage()
    //getDoneNoteFromLocalStorage()
    
    renderNotes()
    renderInProgressNotes()
    renderDoneNotesNotes()
    
}

function moveNote(indexNote, startKey, destinationKey) {
    let note = allNotes[startKey].splice(indexNote, 1);
    allNotes[destinationKey].push(note[0]);
    let noteTitle = allNotes[startKey + "Notes"].splice(indexNote, 1);
    allNotes[destinationKey + "Notes"].push(noteTitle[0]);

    renderAll()
}


function renderNotes() {
    let contentRef = document.getElementById('contentShowNotiz')
    contentRef .innerHTML = "";
    for(let indexNote = 0; indexNote < allNotes.myNotes.length; indexNote++){
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function renderInProgressNotes() {
    let inProgresscontentRef = document.getElementById('contentInProgressNotiz')
    inProgresscontentRef.innerHTML = "";
    for(let indexinProgressNote = 0; indexinProgressNote < allNotes.inProgressNotes.length; indexinProgressNote++){
        inProgresscontentRef.innerHTML += getInProgressNoteTemplate(indexinProgressNote);
    }
}

function renderDoneNotesNotes() {
    let donecontentRef = document.getElementById('contentDoneNotiz')
    donecontentRef.innerHTML = "";
    for(let indexDoneNote = 0; indexDoneNote < allNotes.doneNotes.length; indexDoneNote++){
        donecontentRef.innerHTML += getInDoneNoteTemplate(indexDoneNote);
    }
}




function renderAll(){
    renderNotes()
    renderInProgressNotes()
    renderDoneNotesNotes()
}