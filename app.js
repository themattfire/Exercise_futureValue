const investment = document.getElementById('investment')
const period = document.getElementById('period')
const interest = document.getElementById('interest')
const results = document.getElementById('results')

loadEvents()

function loadEvents() {
  results.addEventListener('click', showResults)
}

function showResults() {
  const noPowFutureValue = parseInt(investment.value) * (1 + parseInt(interest.value))
  const futureValue = Math.pow(noPowFutureValue, parseInt(period.value))
  showFutureValue(futureValue)
  if (investment.value === '' || period.value === '' || investment.value === '') {
    showAlert()
  }
}

function showFutureValue(futureValue) {
  const renderResult = document.querySelector('.futurContainer__results')
  renderResult.textContent = 'Your interest is ' + futureValue
  setTimeout(() => {
    renderResult.remove()
    cleanInput()
  }, 3000)
}

function cleanInput() {
  investment.value = ''
  period.value = ''
  interest.value = ''
}

function showAlert() {
  const renderAlert = document.querySelector('.futurContainer__results')
  renderAlert.textContent = 'All fields are necessary'
  setTimeout(() => {
    renderAlert.remove()
  }, 3000)
}
