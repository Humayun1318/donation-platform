


// This is a toggle function 
function toggle(id) {
  document.getElementById('donate-container').classList.add('hidden');
  document.getElementById('history-container').classList.add('hidden');

  //remove specific one
  document.getElementById(id).classList.remove('hidden');
}