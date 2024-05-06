console.log('Trabajndo desde js');

var body = document.querySelector('body');
console.log(body);

var container = document.querySelector("#container")
console.log(container)

container.style.display = "flex"



var cuadro = document.querySelector("#cuadro")
console.log(cuadro)

cuadro.style.border = '5px solid black';
cuadro.style.height = '500px';
cuadro.style.width = '500px';
container.style.gap = '5rem';
container.style.alignItems = 'center';



var botones = document.querySelector("#botones")
console.log(botones)

botones.style.display = 'flex';
botones.style.flexDirection = 'column';
container.style.justifyContent = 'center';




var cuadro2 = document.querySelector('#cuadro2')
console.log(cuadro2)
cuadro2.style.display = 'flex';
cuadro2.style.alignItems = 'center';
cuadro2.style.justifyContent = 'center';
cuadro2.style.border = '5px solid black';
cuadro2.style.height = '700px';

body.style.backgroundColor = 'white';

var amarillo = document.querySelector(`#amarillo`);
console.log(amarillo);

amarillo.addEventListener('click',
  function amarillo(){
    cuadro.style.backgroundColor = 'yellow';
  }
);
    
/* color azul */

var azul = document.querySelector(`#azul`);
console.log(azul);

azul.addEventListener('click',
  function azul(){
    cuadro.style.backgroundColor = 'blue';
    
  }
);


    

/* color rojo */
var rojo = document.querySelector(`#rojo`);
console.log(rojo);

rojo.addEventListener('click',
  function mensaje(){
    console.log('Buscando el color rojo');
    cuadro.style.backgroundColor = 'red';
  }
);

/* color gris */
var gris = document.querySelector(`#gris`);
console.log(gris);

gris.addEventListener('click',
  function gris(){
    cuadro.style.backgroundColor = 'grey';
    
  }
);

/* sin color   */
var sincolor = document.querySelector(`#sincolor`);
console.log(sincolor);

sincolor.addEventListener('click',
  function mensaje(){
    console.log('Buscando sin color');
    cuadro.style.backgroundColor = "transparent";
  }
);
