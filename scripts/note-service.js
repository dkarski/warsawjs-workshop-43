(function (window) {
  const apiUrl = 'https://api.luck.org.pl/api/v2/notes';

  function getAll(userId) {
    return fetch(`${apiUrl}?userId=${userId}`)
      .then(response => response.json());
  }

  function addNewOne(data = {}) {
    return fetch(apiUrl, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then(response => response.json());
  }

  function updateOne(id, data = {}) {
    return fetch(`${apiUrl}/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then(response => response.json());
  }

  window.app.noteService = {getAll, addNewOne, updateOne};
})(window);
