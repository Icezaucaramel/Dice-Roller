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

// function lancerTotal() {
//   let random = (document.querySelector('.inputNumber').value)
//   let totalRandom = (random * parseInt(document.getElementById('0of99').innerHTML))
//   let total4 = (4 * parseInt(document.getElementById('0of4').innerHTML))
//   let total6 = (6 * parseInt(document.getElementById('0of6').innerHTML))
//   let total8 = (8 * parseInt(document.getElementById('0of8').innerHTML))
//   let total10 = (10 * parseInt(document.getElementById('0of10').innerHTML))
//   let total12 = (12 * parseInt(document.getElementById('0of12').innerHTML))
//   let total20 = (20 * parseInt(document.getElementById('0of20').innerHTML))
//   let total = parseInt(total4 + total6 + total8 + total10 + total12 + total20 + totalRandom)
//   totalAffichage = 1 + Math.floor(Math.random() * total)
//   document.getElementById('totalSac').innerHTML = totalAffichage
// }

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

function checkNumberFieldLength(){
  let lenghtOfInput = document.querySelector('.inputNumber').value
  if (lenghtOfInput.lenght > 2 ) {
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
  document.querySelector('.totalGreen').innerHTML = restNb
  document.querySelector('.totalBlue').innerHTML = restNb
  document.querySelector('.totalPurple').innerHTML = restNb
  document.querySelector('.totalBlack').innerHTML = restNb
  document.querySelector('.totalRed').innerHTML = restNb
  document.querySelector('.totalOrange').innerHTML = restNb
  document.querySelector('.totalRedDk').innerHTML = restNb
  document.getElementById('totalSac').innerHTML = restNb
}

// function lancerTotal() {
//   let random = (document.querySelector('.inputNumber').value)
//   let totalRandom = ( random * parseInt(document.getElementById('0of99').innerHTML))
//   let total4 = ( 4 * parseInt(document.getElementById('0of4').innerHTML))
//   let total6 = ( 6 * parseInt(document.getElementById('0of6').innerHTML))
//   let total8 = ( 8 * parseInt(document.getElementById('0of8').innerHTML))
//   let total10 = ( 10 * parseInt(document.getElementById('0of10').innerHTML))
//   let total12 = ( 12 * parseInt(document.getElementById('0of12').innerHTML))
//   let total20 = ( 20 * parseInt(document.getElementById('0of20').innerHTML))
//   let totalRandomAll = 1 + Math.floor(Math.random() * totalRandom)
//   let total4Random =  1 + Math.floor(Math.random() * total4)
//   let total6Random = 1 + Math.floor(Math.random() * total6)
//   let total8Random = 1 + Math.floor(Math.random() * total8)
//   let total10Random = 1 + Math.floor(Math.random() * total10)
//   let total12Random = 1 + Math.floor(Math.random() * total12)
//   let total20Random = 1 + Math.floor(Math.random() * total20)
//   document.getElementById('changeRandomOfBlack').innerHTML = random
//   document.querySelector('.totalGreen').innerHTML = total4Random
//   document.querySelector('.totalBlue').innerHTML = total6Random
//   document.querySelector('.totalPurple').innerHTML = total8Random
//   document.querySelector('.totalBlack').innerHTML = totalRandomAll
//   document.querySelector('.totalRed').innerHTML = total10Random
//   document.querySelector('.totalOrange').innerHTML = total12Random
//   document.querySelector('.totalRedDk').innerHTML = total20Random
//   let totalAffichage = parseInt(total4Random + total6Random + total8Random + total10Random + total12Random + total20Random + totalRandomAll)
//   document.getElementById('totalSac').innerHTML = totalAffichage
// }

function lancerTotal() {
  let random = (document.querySelector('.inputNumber').value)
  let totalRandom = ( random * parseInt(document.getElementById('0of99').innerHTML))
  let total4 = ( 4 * parseInt(document.getElementById('0of4').innerHTML))
  let total6 = ( 6 * parseInt(document.getElementById('0of6').innerHTML))
  let total8 = ( 8 * parseInt(document.getElementById('0of8').innerHTML))
  let total10 = ( 10 * parseInt(document.getElementById('0of10').innerHTML))
  let total12 = ( 12 * parseInt(document.getElementById('0of12').innerHTML))
  let total20 = ( 20 * parseInt(document.getElementById('0of20').innerHTML))
  let totalRandomAll = 1 + Math.floor(Math.random() * totalRandom)
  let total4Random =  1 + Math.floor(Math.random() * total4)
  let total6Random = 1 + Math.floor(Math.random() * total6)
  let total8Random = 1 + Math.floor(Math.random() * total8)
  let total10Random = 1 + Math.floor(Math.random() * total10)
  let total12Random = 1 + Math.floor(Math.random() * total12)
  let total20Random = 1 + Math.floor(Math.random() * total20)
  if (total4 == 0) {
    document.querySelector('.totalGreen').innerHTML = 0
  } else {
    document.querySelector('.totalGreen').innerHTML = total4Random
  }
  if (total6 == 0) {
    document.querySelector('.totalBlue').innerHTML = 0
  } else {
    document.querySelector('.totalBlue').innerHTML = total6Random
  }
  if (total8 == 0) {
    document.querySelector('.totalPurple').innerHTML = 0
  } else {
    document.querySelector('.totalPurple').innerHTML = total8Random
  }
  if (total10 == 0) {
    document.querySelector('.totalRed').innerHTML = 0
  } else {
    document.querySelector('.totalRed').innerHTML = total10Random
  }
  if (total12 == 0) {
    document.querySelector('.totalOrange').innerHTML = 0
  } else {
    document.querySelector('.totalOrange').innerHTML = total12Random
  }
  if (total20 == 0) {
    document.querySelector('.totalRedDk').innerHTML = 0
  } else {
    document.querySelector('.totalRedDk').innerHTML = total20Random
  }
  if (totalRandom == 0) {
    document.querySelector('.totalBlack').innerHTML = 0
  } else {
    document.querySelector('.totalBlack').innerHTML = totalRandomAll
  }
  let total4Affichage = parseInt(document.querySelector('.totalGreen').innerHTML)
  let total6Affichage = parseInt(document.querySelector('.totalBlue').innerHTML)
  let total8Affichage = parseInt(document.querySelector('.totalPurple').innerHTML)
  let total10Affichage = parseInt(document.querySelector('.totalRed').innerHTML)
  let total12Affichage = parseInt(document.querySelector('.totalOrange').innerHTML)
  let total20Affichage = parseInt(document.querySelector('.totalRedDk').innerHTML)
  let totalRandomAffichage = parseInt(document.querySelector('.totalBlack').innerHTML)
  let totalAffichage = parseInt(total4Affichage + total6Affichage + total8Affichage + total10Affichage + total12Affichage + total20Affichage + totalRandomAffichage)
  document.getElementById('totalSac').innerHTML = totalAffichage
}