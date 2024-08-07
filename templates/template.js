function getNoteTemplate(indexNote){
    return `    <div class="note">
                    <h3>${allNotes.myNotes[indexNote]}</h3>
                    <p>${allNotes.myDescriptions[indexNote]}</p>
                    <button onclick="moveNote(${indexNote}, 'myNotes', 'inProgressNotes')">IN PROGRESS</button>
                </div>`
}

function getInProgressNoteTemplate(indexinProgressNote){
    return `    <div class="note">
                    <h3>${allNotes.inProgressNotes[indexinProgressNote]}</h3>
                    <p>${allNotes.inProgressDescriptions[indexinProgressNote]}</p>
                    <button onclick="moveNote(${indexinProgressNote}, 'inProgressNotes', 'myNotes')">ASSIGMNMENT</button>
                    <button onclick="moveNote(${indexinProgressNote}, 'inProgressNotes', 'doneNotes')">DONE</button>
                </div>`
}

function getInDoneNoteTemplate(indexDoneNote){
    return `    <div class="note">
                    <h3>${allNotes.doneNotes[indexDoneNote]}</h3>
                    <p>${allNotes.doneDescriptions[indexDoneNote]}</p>
                    <button onclick="moveNote(${indexDoneNote}, 'doneNotes', 'inProgressNotes')">IN PROGRESS</button>
                </div>`
}