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

