function boutonMinus(de) {
  boutonDisabled = document.querySelector('.bouton' + de + 'Disabled')
  count = document.getElementById("0of" + de).innerHTML
  if (count == 0) {
    boutonDisabled.disabled = true
  } else {
    boutonDisabled.disabled = false
    count -= 1
    document.getElementById("0of" + de).innerHTML = count
  }
}

function boutonPlus(de) {
  boutonDisabled = document.querySelector('.bouton' + de + 'Disabled')
  count = document.getElementById("0of" + de).innerHTML
  boutonDisabled.disabled = false
  count = parseInt(count) + 1
  document.getElementById("0of" + de).innerHTML = count
}

function lancerTotal() {
  let random = (document.querySelector('.inputNumber').value)
  let totalRandom = (random * parseInt(document.getElementById('0of99').innerHTML))
  let total4 = (4 * parseInt(document.getElementById('0of4').innerHTML))
  let total6 = (6 * parseInt(document.getElementById('0of6').innerHTML))
  let total8 = (8 * parseInt(document.getElementById('0of8').innerHTML))
  let total10 = (10 * parseInt(document.getElementById('0of10').innerHTML))
  let total12 = (12 * parseInt(document.getElementById('0of12').innerHTML))
  let total20 = (20 * parseInt(document.getElementById('0of20').innerHTML))
  let total = parseInt(total4 + total6 + total8 + total10 + total12 + total20 + totalRandom)
  totalAffichage = 1 + Math.floor(Math.random() * total)
  document.getElementById('totalSac').innerHTML = totalAffichage
}

let interval = setInterval(intervalFunction, 1500)

function intervalFunction() {
  let randomNumbersHolders = 1 + Math.floor(Math.random() * 99)
  document.getElementsByName('changePlaceHolder')[0].placeholder = parseInt(randomNumbersHolders)
}

textBox = document.querySelector('.inputNumber')

textBox.onkeypress = function(e) {
  e = e || window.event
  let charCode = (typeof e.which == "undefined") ? e.keyCode : e.which
  let charStr = String.fromCharCode(charCode)
  if (/\D/.test(charStr)) {
      return false
  }
}
let lenghtOfInput = (document.querySelector('.inputNumber').lenght)
console.log(lenghtOfInput)


function checkNumberFieldLength(){
  let lenghtOfInput = document.querySelector('.inputNumber').value
  if (lenghtOfInput.lenght > 2) {
  return false
  }
  return true
}

function resetAll() {
  const restNb = 0
  document.getElementById('0of99').innerHTML = restNb
  document.getElementById('0of4').innerHTML = restNb
  document.getElementById('0of6').innerHTML = restNb
  document.getElementById('0of8').innerHTML = restNb
  document.getElementById('0of10').innerHTML = restNb
  document.getElementById('0of12').innerHTML = restNb
  document.getElementById('0of20').innerHTML = restNb
}