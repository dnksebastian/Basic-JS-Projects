const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')


let fahrenheit
let celsius
// T(*F) = T(*C) x 1.8 + 32
// T(*C) = (T(*F) - 32) / 1.8

const switchTemp = () => {
    if (one.textContent === "°F") {
        one.textContent = "°C"
        two.textContent = "°F"
        result.textContent = ''
    } else {
        one.textContent = "°F"
        two.textContent = "°C"
        result.textContent = ''
    }
}

const fahrToCelsius = () => {
    fahrenheit = converter.value * 1.8 + 32
    result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`
    converter.value = ''
}

const celToFahr = () => {
    celsius = (converter.value - 32) / 1.8
    result.textContent = `${converter.value}°F to ${celsius.toFixed(1)}°C`
    converter.value = ''
}

const conversion = () => {
    if (converter.value !== '') {
        if (one.textContent === '°C') {
            fahrToCelsius()
        } else {
            celToFahr()
        }
    } else {
        result.textContent = 'Musisz podać jakąś wartość!'
    }
}

// const resetAll = () => {
//     if (converter.value !== '' || result.textContent !== '') {
//         converter.value = ''
//         result.textContent = ''
//     }
// }
// moje rozwiązanie ^^^^^^^^^^^
// rozwiązanie z kursu:

const resetAll = () => {
            converter.value = ''
            result.textContent = ''
        }

changeBtn.addEventListener('click', switchTemp)
convBtn.addEventListener('click', conversion)
resetBtn.addEventListener('click', resetAll)