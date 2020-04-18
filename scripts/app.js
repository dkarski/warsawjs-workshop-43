import {renderNoteList} from "./render-note-list.js";
import {renderNoteEditor} from "./render-note-editor.js";

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
  renderNoteList(document.querySelector('.note-list-container'), {state})
  renderNoteEditor(document.querySelector('.note-editor-container'), {state})
}


