(function(window){
  function renderNotes(element, {state, handleNoteClick}) {
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

    element.querySelectorAll(".note-list__list__item").forEach((note, index) => {
      note.addEventListener("click", handleNoteClick(index));
    })
  }

  function renderNoteList(element, {state, handleNoteClick, handleAddButtonClick}) {
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

    renderNotes(document.querySelector('.note-list__list-container'), {state, handleNoteClick})
    element.querySelector(".note-list__heading__button-add").addEventListener("click", handleAddButtonClick);
  }

  window.app.renderNoteList = renderNoteList;
})(window);
