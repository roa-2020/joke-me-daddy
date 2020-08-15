document.addEventListener('keypress', editJoke);

function editJoke(evt){
  if (evt.key === 'e'){
    const id = document.getElementById('jokeId').textContent;
    window.location.href = "/edit/" + id;
  }
}