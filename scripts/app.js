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
    const newNote = {
      title: "",
      content: "",
      userId: "0"
    };
    state = {
      ...state, notes: [newNote, ...state.notes], activeNoteIndex: 0
    };
    render();
  }

  function makeHandleChange(stateKey) {
    return function ({target: {value}}) {
      const updatedNote = {...state.notes[state.activeNoteIndex], [stateKey]: value};
      const newNotes = [...state.notes];
      newNotes[state.activeNoteIndex] = updatedNote;
      state = {...state, notes: newNotes};
      render();
    }
  }
})();

