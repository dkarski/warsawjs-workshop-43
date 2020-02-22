(function () {
  const element = null || document.getElementById("app");
  const notes = [{
    title: "",
    content: "",
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
    renderNoteList(document.querySelector('.note-list-container'))
    renderNoteEditor(document.querySelector('.note-editor-container'))
  }

  function renderNoteEditor(element) {
    element.innerHTML = `
      <div class="note-editor">
        <div class="note-editor__heading">
            <p class="note-editor__heading__updateAt">${state.notes[state.activeNoteIndex].updatedAt ? 'Ostatnia zmiana: ' + new Date(state.notes[state.activeNoteIndex].updatedAt).toLocaleString("pl-PL") : ""}</p>
        </div>
        <div class="note-editor__fields-container">
          <textarea placeholder="Tytuł" class="note-editor__fields-container__title" rows="1">${state.notes[state.activeNoteIndex].title}</textarea>
          <textarea placeholder="Zacznij pisać" class="note-editor__fields-container__content" rows="1">${state.notes[state.activeNoteIndex].content}</textarea>
        </div>
      </div>
    `
  }

  function renderNotes(element) {
    element.innerHTML = `
        <ul class="note-list__list">
            ${state.notes.map((note, index) => `   
              <li class="note-list__list__item ${state.activeNoteIndex === index && 'note-list__list__item--active'}">
                <h3 class="note-list__list__item__heading">${note.title ? note.title : "Brak tytułu"}</h3>
                <p class="note-list__list__item__content">${note.content ? note.content : '&nbsp;'}</p>
              </li>  
            `).join('')}
        </ul>
      `
  }

  function renderNoteList(element) {
    element.innerHTML = `
      <div class="note-list">
        <div class="note-list__heading">
            <div class="note-list__heading__content-container">
              <h2 class="note-list__heading__title">Wszystkie notatki</h2>
              <p class="note-list__heading__count">${state.notes.length} notatki</p>
            </div>
            <button class="note-list__heading__button-add">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                  <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h30v30H0z"></path>
                      <circle cx="15" cy="15" r="14" fill="#00A82D"></circle>
                      <rect width="14" height="2" x="8" y="14" fill="#FFF" rx="1"></rect>
                      <rect width="2" height="14" x="14" y="8" fill="#FFF" rx="1"></rect>
                  </g>
              </svg>
            
            </button>
        </div>
        <div class="note-list__list-container"></div>
      </div>
    `
    renderNotes(document.querySelector('.note-list__list-container'), {state})
  }
})();

