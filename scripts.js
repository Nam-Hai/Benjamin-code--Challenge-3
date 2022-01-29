const etapiersList = document.querySelectorAll('.etapier');
let curIndex = 0;

function changeFeaturedFeature(target) {
    index = target.dataset.index;
    afficheUpdate(index);
    etapierUpdate(index)
}

function afficheUpdate(index) {

}

function etapierUpdate(index) {

}

function etapierOnClick(event) {

    console.log(event.target.dataset.index);
    // Clicker sur l'etapier courant ne fait rien
    if (event.target.dataset.index === curIndex) return

    curIndex = event.target.dataset.index;
    for (let index = 0; index < etapiersList.length; index++) {
        etapiersList[index].classList.add('etapier-inactive');

        if (index <= curIndex) {
            etapiersList[index].classList.remove('etapier-inactive');
            console.log('yo');
        }
    }

}

etapiersList.forEach(elem => {
    elem.addEventListener("click", etapierOnClick);
});