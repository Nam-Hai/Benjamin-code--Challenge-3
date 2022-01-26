const etapiers = document.querySelectorAll('.etapier');
const curIndex = 0;

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

    // Clicker sur l'etapier courant ne fait rien
    if (event.target.dataset.index == curIndex) return

    console.log('object');
}

etapiers.forEach(elem => {
    elem.addEventListener("click", etapierOnClick);
});