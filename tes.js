let baterai = prompt('Berapa persen sisa baterai HP anda?')

if (baterai > 50 && baterai < 100) {
  console.log('Nanti saja charge HP')
} else {
  console.log('Siapkan charger anda')
}

let kondisiTubuh = prompt('Apakah anda capek? (y/t/?)')

if (kondisiTubuh === 'y' || kondisiTubuh === 'Y') {
  console.log('Break Time')
} else if (kondisiTubuh === 't' || kondisiTubuh === 'T') {
  console.log('Yakin?')
} else {
  console.log('Anda Ragu?')
}

const tes = prompt('berapa suhu celcius?')
const celcius = Number(tes)

const kelvin = celcius + 273.15
const fahrenheit = (celcius * 1.8) + 32

console.log(kelvin + ' Kelvin')

document.getElementById("hasil").innerHTML = fahrenheit + ' Fahrenheit'

console.log(fahrenheit + ' Fahrenheit')