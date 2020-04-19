(function (window) {
  const apiUrl = 'https://api.luck.org.pl/api/v2/notes';

  function getAll(userId) {
    return fetch(`${apiUrl}?userId=${userId}`)
      .then(response => response.json());
  }

  window.app.noteService = {getAll};
})(window);
