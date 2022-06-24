const arrowBtn = document.querySelector('.arrow')
const arrowIcon = document.querySelector('.fas')
const img = document.querySelector('.item1')

/* Co trzeba zrobić?
1. Nasłuchiwanie na clicka na przycisk
2. Dodawanie klasy 'hide'
3. Obracanie strzałki
*/

const showImg = () => {
    img.classList.toggle('hide')

    if(img.classList.contains('hide')) {
        arrowIcon.style.transform = "rotate(180deg)"
    } else {
        arrowIcon.style.transform = "rotate(0)"
    }
}

arrowBtn.addEventListener('click', showImg)
