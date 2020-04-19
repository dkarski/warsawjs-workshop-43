(function (window) {
  function renderApplication(element, {state, handleNoteClick, handleAddButtonClick, handleTitleChange, handleContentChange}) {
    if (state.isLoading) {
      element.innerHTML = `<div class="note-spinner-container"></div>`
      app.renderSpinner(document.querySelector('.note-spinner-container'))
    } else {
      element.innerHTML = `
        <div class="container">
          <div class="note-list-container"></div>
          <div class="note-editor-container"></div>
        </div>
    `;
      app.renderNoteList(document.querySelector('.note-list-container'), {state, handleNoteClick, handleAddButtonClick})
      app.renderNoteEditor(document.querySelector('.note-editor-container'), {
        state,
        handleTitleChange,
        handleContentChange
      })
    }
  }

  window.app.renderApplication = renderApplication;
})(window);
