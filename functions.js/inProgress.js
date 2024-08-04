let inProgressNotes = [];
let inProgressDescriptions = [];

function noteToInProgress(indexNote){    
    let inProgressNote = myNotes.splice(indexNote, 1);   
    inProgressNotes.push(inProgressNote[0]);    
    let inProgressDescription = myDescriptions.splice(indexNote, 1);
    inProgressDescriptions.push(inProgressDescription[0]);    

    saveInProgressNoteToLocalStorage()
    renderNotes()
    renderInProgressNotes()    
    saveToLocalStorage()
}

function saveInProgressNoteToLocalStorage(){
    localStorage.setItem("inProgressNotes", JSON.stringify(inProgressNotes));
    localStorage.setItem("inProgressDescriptions", JSON.stringify(inProgressDescriptions));
}

function getInProgressNoteFromLocalStorage(){
    let inProgressNoteArr = JSON.parse(localStorage.getItem("inProgressNotes"));
    let inProgressDescriptionArr = JSON.parse(localStorage.getItem("inProgressDescriptions"));

    if(inProgressNoteArr && inProgressNoteArr.length > 0 && inProgressDescriptionArr && inProgressDescriptionArr.length > 0){
        inProgressNotes = inProgressNoteArr;
        inProgressDescriptions = inProgressDescriptionArr;

        } else {
            inProgressNotes = [];
            inProgressDescriptions= [];
        }   
}

function saveToLocalStorage(){
    localStorage.setItem("myNotes", JSON.stringify(myNotes));
    localStorage.setItem("myDescriptions", JSON.stringify(myDescriptions));
}

function renderInProgressNotes() {
    let inProgresscontentRef = document.getElementById('contentInProgressNotiz')
    inProgresscontentRef.innerHTML = "";
    for(let indexinProgressNote = 0; indexinProgressNote < inProgressNotes.length; indexinProgressNote++){
        inProgresscontentRef.innerHTML += getInProgressNoteTemplate(indexinProgressNote);
    }
}

// back to Assigment 
function InProgressNoteToAssignmentNote(indexNote){
    let myNote = inProgressNotes.splice(indexNote, 1);
    myNotes.push(myNote[0]);
    let myDescription = inProgressDescriptions.splice(indexNote, 1);
    myDescriptions.push(myDescription[0]);

     
    saveToLocalStorage()
    saveInProgressNoteToLocalStorage()
    init()     
}





