(function (window) {
  function renderNoteEditor(element, {state, handleTitleChange, handleContentChange}) {
    element.innerHTML = `
      <div class="note-editor">
        <div class="note-editor__heading">
            <p class="note-editor__heading__updateAt">${'Ostatnia zmiana: ' + new Date(state.notes[state.activeNoteIndex].updatedAt).toLocaleString("pl-PL")}</p>
        </div>
        <div class="note-editor__fields-container">
          <textarea placeholder="Tytuł" class="note-editor__fields-container__title" rows="1">${state.notes[state.activeNoteIndex].title}</textarea>
          <textarea placeholder="Zacznij pisać" class="note-editor__fields-container__content" rows="1">${state.notes[state.activeNoteIndex].content}</textarea>
        </div>
      </div>
    `
    element.querySelector(".note-editor__fields-container__title").addEventListener("change", handleTitleChange);
    element.querySelector(".note-editor__fields-container__content").addEventListener("change", handleContentChange);
  }

  window.app.renderNoteEditor = renderNoteEditor;
})(window);
