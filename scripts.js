const etapiersList = document.querySelectorAll('.etapier');
const leftArrow = ducument.querySelector('#left-arrow')
let curIndex = 0;

function changeFeaturedFeature(target) {
    index = target.dataset.index;
    afficheUpdate(index);
    etapierUpdate(index)
}

function afficheUpdate(index) {

}

function etapierUpdate(targetIndex) {
    let delayIndex = 0;
    let vitesseEtapier = 200;
    if (curIndex < targetIndex) {
        for (let index = curIndex; index <= targetIndex; index++) {


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

    console.log(event.target.dataset.index);
    // Clicker sur l'etapier courant ne fait rien
    if (event.target.dataset.index === curIndex) return

    changeFeaturedFeature(event.target);

}

etapiersList.forEach(elem => {
    elem.addEventListener("click", etapierOnClick);
});