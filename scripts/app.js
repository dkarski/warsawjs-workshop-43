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
    app.renderNoteList(document.querySelector('.note-list-container'), {state})
    app.renderNoteEditor(document.querySelector('.note-editor-container'), {state})
  }
})();

