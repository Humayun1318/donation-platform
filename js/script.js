//blog page navigation
function navigateBlogPage() {
  location.href = 'blog.html';
}

//By default Donate button clicked 
document.getElementById('donate-btn').style.background = '#B4F461';
document.getElementById('history-container').classList.add('hidden');

//Toggle function for the donate and history button
document.getElementById('donate-btn').addEventListener('click', function () {
  toggle('donate-container')
  document.getElementById('history-btn').style.background = ''
  document.getElementById('donate-btn').style.background = '#B4F461'
})
document.getElementById('history-btn').addEventListener('click', function () {
  toggle('history-container')
  document.getElementById('donate-btn').style.background = '';
  document.getElementById('history-btn').style.background = '#B4F461'
})

//for Noakhali donation
document.getElementById('donate-btn-1').addEventListener('click', function () {
  const havingMainBalance = getInnerText('main-balance');
  const totalCollection = getInnerText('total-collection');
  const amountForDonate = getInputFieldTextById('first-input-field');
  const actualAmount = parseFloat(amountForDonate)

  if (isNaN(actualAmount) || havingMainBalance < actualAmount || actualAmount <= 0
    || amountForDonate.trim() !== actualAmount.toString().trim()) {
    alert('Please give me the valid amount you want to donate')
    return;
  }
  const collectedAmount = totalCollection + actualAmount;
  const afterDonateMainBalance = havingMainBalance - actualAmount;
  document.getElementById('main-balance').innerText = afterDonateMainBalance;
  document.getElementById('total-collection').innerText = collectedAmount;
  //show modal 
  document.getElementById('my_modal_5').showModal();
  //Transaction history
  addedTransactionHistory(actualAmount, 'for-Noakhali')
});

//for feni donation
document.getElementById('donate-btn-2').addEventListener('click', function () {
  const havingMainBalance = getInnerText('main-balance');
  const totalCollection = getInnerText('total-collection-of-feni');
  const amountForDonate = getInputFieldTextById('second-input-field');
  const actualAmount = parseFloat(amountForDonate)

  if (isNaN(actualAmount) || havingMainBalance < actualAmount || actualAmount <= 0
    || amountForDonate.trim() !== actualAmount.toString().trim()) {
    alert('Please give me the valid amount you want to donate')
    return;
  }
  const collectedAmount = totalCollection + actualAmount;
  const afterDonateMainBalance = havingMainBalance - actualAmount;
  document.getElementById('main-balance').innerText = afterDonateMainBalance;
  document.getElementById('total-collection-of-feni').innerText = collectedAmount;
  //show modal
  document.getElementById('my_modal_5').showModal();
  //Transaction history
  addedTransactionHistory(actualAmount, 'for-feni')
});

//for Quota Movement donation
document.getElementById('donate-btn-3').addEventListener('click', function () {
  const havingMainBalance = getInnerText('main-balance');
  const totalCollection = getInnerText('total-collection-of-quota');
  const amountForDonate = getInputFieldTextById('third-input-field');
  const actualAmount = parseFloat(amountForDonate)

  if (isNaN(actualAmount) || havingMainBalance < actualAmount || actualAmount <= 0
    || amountForDonate.trim() !== actualAmount.toString().trim()) {
    alert('Please give me the valid amount you want to donate')
    return;
  }
  const collectedAmount = totalCollection + actualAmount;
  const afterDonateMainBalance = havingMainBalance - actualAmount;
  document.getElementById('main-balance').innerText = afterDonateMainBalance;
  document.getElementById('total-collection-of-quota').innerText = collectedAmount;
  //show modal
  document.getElementById('my_modal_5').showModal();
  //Transaction history
  addedTransactionHistory(actualAmount, 'for-quota')
});
