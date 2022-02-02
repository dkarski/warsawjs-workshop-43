(function () {
    const element = null || document.getElementById("app");
    const notes = [];

    let state = {notes, activeNoteIndex: 0, isLoading: true};

    window.addEventListener('DOMContentLoaded', render());
    window.app.noteService.getAll("0").then(response => {
      state = {...state, notes: response.notes, isLoading: false};
      render();
    })

    function render() {
      window.app.renderApplication(element, {
        state,
        handleNoteClick,
        handleAddButtonClick,
        handleTitleChange: makeHandleChange("title"),
        handleContentChange: makeHandleChange("content")
      })
    }

    function handleNoteClick(index) {
      return function () {
        state = {...state, activeNoteIndex: index};
        render();
      }
    }

    function handleAddButtonClick() {
      window.app.noteService.addNewOne({
          title: "",
          content: "",
          userId: "0"
        }
      ).then(response => {
        state = {...state, notes: [response, ...state.notes], activeNoteIndex: 0};
        render();
      });
    }

    function makeHandleChange(stateKey) {
      return function ({target: {value}}) {
        const updatedNote = {...state.notes[state.activeNoteIndex], [stateKey]: value}

        window.app.noteService.updateOne(updatedNote.id, updatedNote)
          .then(response => {
            const noteIndex = state.notes.findIndex(note => note.id === response.id)
            const newNotes = [...state.notes]
            newNotes[noteIndex] = {...newNotes[noteIndex], ...response}
            state = {...state, notes: newNotes}
            render();
          });
      }
    }
  }

)();

