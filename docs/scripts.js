const etapiersList = document.querySelectorAll('.etapier');
const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');
const carrousel = document.querySelector('.carrousel');
let curIndex = 0;
const leftPanel = document.querySelector('.leftPanel');
const hiddenLeft = document.querySelector('.hiddenLeftTransition');

function changeFeaturedFeature(target) {
    index = Number(target.dataset.index);
    afficheUpdate(index);
    etapierUpdate(index);
    changeFeature(index);
}

function afficheUpdate(index) {

    carrousel.setAttribute("aria-labelledby", index);
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
    afficheUpdate(curIndex - 1);
    changeFeature(curIndex - 1);
    etapierUpdate(curIndex - 1);
}

rightArrow.addEventListener('click', rightArrowActoinner);
function rightArrowActoinner(event) {
    if (curIndex === 2) return
    afficheUpdate(curIndex + 1);
    changeFeature(curIndex + 1);
    etapierUpdate(curIndex + 1);
}

const feature = [
    {
        logoPath: 'assets/NH-logo.svg',
        Title: 'Un nouvel espoir',
        text: "C'est le premier opus de la saga Star Wars par sa date de sortie, mais le quatrième selon l'ordre chronologique de l'histoire.",
        date: "77"
    },
    {
        logoPath: 'assets/ESB-logo.svg',
        Title: 'L’empire contre-attaque',
        text: "La guerre entre le maléfique Empire galactique et son antagoniste, l’Alliance rebelle, bat son plein.",
        date: "80"
    },
    {
        logoPath: 'assets/ROTJ-logo.svg',
        Title: 'Le retour du Jedi',
        text: "Le maléfique Empire galactique construit une nouvelle station spatiale Étoile de la mort pour anéantir définitivement l'Alliance rebelle.",
        date: "83"
    },
]

const leftDateSpan = document.querySelector('.leftPanel-date-span');
const hiddenLeftDateSpan = document.querySelector('.hidden-leftPanel-date-span');

function changeFeature(index) {
    hiddenLeft.querySelector('h1').innerHTML = feature[index].Title;
    hiddenLeft.querySelector('p').innerHTML = feature[index].text;
    hiddenLeft.querySelector('img').src = feature[index].logoPath;
    hiddenLeftDateSpan.innerHTML = feature[index].date;

    hiddenLeft.classList.add('hiddenTransition');
    hiddenLeft.classList.remove('hidden');
    leftPanel.classList.add('leftTransition');

    hiddenLeftDateSpan.classList.add('hiddenTransition');
    hiddenLeftDateSpan.classList.remove('hidden');
    leftDateSpan.classList.add('leftTransition');

    setTimeout(() => {
        leftPanel.querySelector('h1').innerHTML = feature[index].Title;
        leftPanel.querySelector('p').innerHTML = feature[index].text;
        leftPanel.querySelector('img').src = feature[index].logoPath;
        leftDateSpan.innerHTML = feature[index].date;

        hiddenLeft.classList.add('hidden');
        hiddenLeft.classList.remove('hiddenTransition');
        leftPanel.classList.remove('leftTransition');

        hiddenLeftDateSpan.classList.add('hidden');
        hiddenLeftDateSpan.classList.remove('hiddenTransition');
        leftDateSpan.classList.remove('leftTransition');
    }, 250);
}