console.log('Eventos del Dom');

let parrafo = document.querySelector('p');
console.log(parrafo);

parrafo.addEventListener(
    'click', () => {
     console.log('Me hiciste click')
    }
);


/* pasamos la funcion anterior a la funcion normal a la nativa  */

parrafo = document.querySelector('p');

parrafo.addEventListener('click', 
 function () {
     console.log('Me hiciste click 1')
 }
); 

   

let botonclick = document.querySelector('#btn-click');
console.log(botonclick);

botonclick.addEventListener('click',
 function alerta (){
    console.log('Hiciste click en el boton');
 }
);

botonclick.addEventListener('Dclick',
 function alerta (){
    console.log('Hiciste doble click en el boton');
 }
);



