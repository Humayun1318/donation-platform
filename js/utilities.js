
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

//Transaction history function
function addedTransactionHistory(amount, headingId) {
  const historyContainer = document.getElementById('history-container');
  const heading = document.getElementById(headingId).innerText;

  //set in UI using history container
  historyContainer.innerHTML += `
  <div class="p-8 rounded-2xl border border-solid border-[#1111111A] bg-[#fff]">
    <h4 class="text-xl font-bold mb-4">${amount} Taka is ${heading}</h4>
    <p class="font-light text-[#111111B3]">Date:${new Date}</p>
  </div>
  `
}