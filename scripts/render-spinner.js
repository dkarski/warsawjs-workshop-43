(function (window) {
  function renderSpinner(element) {
    element.innerHTML = `
      <div class="note-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    `
  }

  window.app.renderSpinner = renderSpinner;
})(window);
