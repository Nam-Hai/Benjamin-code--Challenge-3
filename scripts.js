const etapiersList = document.querySelectorAll('.etapier');
const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow')
let curIndex = 0;

function changeFeaturedFeature(target) {
    index = Number(target.dataset.index);
    console.log(index);
    afficheUpdate(index);
    etapierUpdate(index)
}

function afficheUpdate(index) {

}

function etapierUpdate(targetIndex) {
    let vitesseEtapier = 200;
    let delayIndex = 0;
    if (curIndex < targetIndex) {
        for (let index = curIndex + 1; index <= targetIndex; index++) {
            setTimeout(() => {
                etapiersList[index].classList.remove('etapier-inactive');
            }, vitesseEtapier * delayIndex);
            delayIndex += 1;
        }
    } else {
        for (let index = curIndex; index > targetIndex; index--) {

            setTimeout(() => {
                etapiersList[index].classList.add('etapier-inactive');
            }, vitesseEtapier * delayIndex);
            delayIndex += 1;
        }
    }
    curIndex = targetIndex;
}

function etapierOnClick(event) {

    // Clicker sur l'etapier courant ne fait rien
    if (event.target.dataset.index === curIndex) return

    changeFeaturedFeature(event.target);

}

let etapierIndex = 0;
etapiersList.forEach(elem => {
    if (etapierIndex === 3) return
    elem.addEventListener("click", etapierOnClick);
    etapierIndex += 1;
});


leftArrow.addEventListener('click', leftArrowActoionner);
function leftArrowActoionner(event) {
    if (curIndex === 0) return
    etapierUpdate(curIndex - 1);
}

rightArrow.addEventListener('click', rightArrowActoinner);
function rightArrowActoinner(event) {
    if (curIndex === 2) return
    console.log(curIndex);
    console.log(curIndex + 1);
    etapierUpdate(curIndex + 1);
}