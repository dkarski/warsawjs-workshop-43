(function () {
  const element = null || document.getElementById("app");
  const notes = [{
    title: "",
    content: "",
    updatedAt: Date.now()
  }]

  let state = {notes, activeNoteIndex: 0};

  window.addEventListener('DOMContentLoaded', render());

  function render() {
    element.innerHTML = `
        <div class="container">
          <div class="note-list-container"></div>
          <div class="note-editor-container"></div>
        </div>
    `;
    app.renderNoteList(document.querySelector('.note-list-container'), {state, handleNoteClick, handleAddButtonClick})
    app.renderNoteEditor(document.querySelector('.note-editor-container'), {
      state,
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

