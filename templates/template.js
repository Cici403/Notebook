function getNoteTemplate(indexNote){
    return `    <div class="note">
                    <h3>${myNotes[indexNote]}</h3>
                    <p>${myDescriptions[indexNote]}</p>
                    <button onclick="noteToInProgress()">IN PROGRESS</button>
                </div>`
}

function getInProgressNoteTemplate(indexinProgressNote){
    return `    <div class="note">
                    <h3>${inProgressNotes[indexinProgressNote]}</h3>
                    <p>${inProgressDescriptions[indexinProgressNote]}</p>
                    <button onclick="InProgressNoteToAssignmentNote()">ASSIGMNMENT</button>
                    <button onclick="noteIsDone()">DONE</button>
                </div>`
}

function getInDoneNoteTemplate(indexDoneNote){
    return `    <div class="note">
                    <h3>${doneNotes[indexDoneNote]}</h3>
                    <p>${doneDescriptions[indexDoneNote]}</p>
                    <button onclick="doneNoteToInProgressNote()">IN PROGRESS</button>
                </div>`
}