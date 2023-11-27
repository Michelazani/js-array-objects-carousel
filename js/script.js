/*Dato un array di oggetti letterali con: URL dell’immagine, Titolo della slide, Descrizione della slide
Creare un carosello come nella foto allegata.*/

// arrey di oggetti
const images = [
    {
        image: './img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: './img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: './img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: './img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: './img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// variabile che serve per vedere da che punto di parte nel mostrare l'immagine. in questo caso con la prima, in quanto ho dato valore 0
let activeIndex= 0;

// variabile del padre 
const containerEl = document.querySelector('div.my_container')

// creo ciclo per ripetere quante immagini voglio 
for (let i= 0; i < images.length; i++){
    // creo elemento img
    const singleImageEl = document.createElement ('img');
    const textEl = document.createElement ('h1');

    containerEl.appendChild(singleImageEl);
    singleImageEl.appendChild(textEl);

    // per inserire le singole foto nell'html tramite js 
    singleImageEl.src = images[i].image;
};
//! come lo scrivo?????
// textEl.innerHTML= 'Marvel\' s Spiderman Miles Morale'

/*creo variabile dove seleziono tutte le immagini e che poi
mi permette di vedere solo una singola immagina selezionandola con il valore dell'indice all'interno delle parentesi []*/
const insideEl = document.querySelectorAll ('img');
// console.log (insideEl[1])
insideEl[activeIndex].classList.add('d-inline-block')

// creo variabile per richiamare il bottone 
const buttonUpElement = document.getElementById ('up');
const buttonDownElement = document.getElementById('down'); 

// creo funzione per il click up
buttonUpElement.addEventListener('click', function (){
    insideEl[activeIndex].classList.remove('d-inline-block');
    activeIndex--;
    insideEl[activeIndex].classList.add('d-inline-block');
});

// creo funzione per il click down
buttonDownElement.addEventListener('click', function (){
    insideEl[activeIndex].classList.remove('d-inline-block');
    activeIndex++;
    insideEl[activeIndex].classList.add('d-inline-block');
});

// variabile che fa ripetizione ogni 3 secondi
const additeration = setInterval(addEveryIteration,3000);



function addEveryIteration(){
insideEl[activeIndex].classList.remove('d-inline-block');
activeIndex++;
insideEl[activeIndex].classList.add('d-inline-block');
}


/*
function removeEveryIteration (){
    insideEl[activeIndex].classList.remove('d-inline-block');
    activeIndex--;
    insideEl[activeIndex].classList.add('d-inline-block'); 
}
*/