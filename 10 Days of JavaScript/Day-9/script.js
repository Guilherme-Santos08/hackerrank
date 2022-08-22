const button0 = document.getElementById('btn0')
const button1 = document.getElementById('btn1')

const buttonClear = document.getElementById('btnClr')
const buttonEql = document.getElementById('btnEql')
const buttonSum = document.getElementById('btnSum')
const buttonSub = document.getElementById('btnSub')
const buttonMul = document.getElementById('btnMul')
const buttonDiv = document.getElementById('btnDiv')

const res = document.getElementById('res')

buttonClear.addEventListener('click', () => (res.innerHTML = ''))

buttonEql.addEventListener('click', () => {
  let resHtml = res.innerHTML
  resHtml = Math.floor(eval(resHtml.replace(/([01]+)/g, '0b$1'))).toString(2)
  res.innerHTML = resHtml
})

button0.addEventListener('click', () => (res.innerHTML += '0'))
button1.addEventListener('click', () => (res.innerHTML += '1'))
buttonSum.addEventListener('click', () => (res.innerHTML += '+'))
buttonSub.addEventListener('click', () => (res.innerHTML += '-'))
buttonMul.addEventListener('click', () => (res.innerHTML += '*'))
buttonDiv.addEventListener('click', () => (res.innerHTML += '/'))
