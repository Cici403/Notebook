let doneNotes = [];
let doneDescriptions = [];

function noteIsDone(indexNote){    
    let noteDone = inProgressNotes.splice(indexNote, 1);   
    doneNotes.push(noteDone[0]);    
    let doneDescription = inProgressDescriptions.splice(indexNote, 1);
    doneDescriptions.push(doneDescription[0]);    

    saveDoneNoteToLocalStorage()
    saveInProgressNoteToLocalStorage()
    renderNotes()
    renderInProgressNotes()    
    renderDoneNotesNotes()
}

function saveDoneNoteToLocalStorage(){
    localStorage.setItem("doneNotes", JSON.stringify(doneNotes));
    localStorage.setItem("doneDescriptions", JSON.stringify(doneDescriptions));
}

function getDoneNoteFromLocalStorage(){
    let doneNoteArr = JSON.parse(localStorage.getItem("doneNotes"));
    let doneDescription = JSON.parse(localStorage.getItem("doneDescriptions"));

    if(doneNoteArr && doneNoteArr.length > 0 && doneDescription && doneDescription.length > 0){
        doneNotes = doneNoteArr;
        doneDescriptions = doneDescription;

        } else {
            doneNotes = [];
            doneDescriptions= [];
        }       
}

function renderDoneNotesNotes() {
    let donecontentRef = document.getElementById('contentDoneNotiz')
    donecontentRef.innerHTML = "";
    for(let indexDoneNote = 0; indexDoneNote < doneNotes.length; indexDoneNote++){
        donecontentRef.innerHTML += getInDoneNoteTemplate(indexDoneNote);
    }
}

// back to InProgress 
function doneNoteToInProgressNote(indexNote){
    let inProgressNote = doneNotes.splice(indexNote, 1);   
    inProgressNotes.push(inProgressNote[0]);    
    let inProgressDescription = doneDescriptions.splice(indexNote, 1);
    inProgressDescriptions.push(inProgressDescription[0]);    
 
    saveInProgressNoteToLocalStorage()
    saveDoneNoteToLocalStorage()
    init()
    
}

