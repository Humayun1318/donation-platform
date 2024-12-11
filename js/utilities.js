


// This is a toggle function 
function toggle(id) {
  document.getElementById('donate-container').classList.add('hidden');
  document.getElementById('history-container').classList.add('hidden');

  //remove specific one
  document.getElementById(id).classList.remove('hidden');
}

//Get the input field text
function getInputFieldTextById(id) {
  const inputField = document.getElementById(id).value;
  document.getElementById(id).value = "";
  return inputField;
}

//Get the inner text
function getInnerText(id) {
  return parseFloat(document.getElementById(id).innerText);
}