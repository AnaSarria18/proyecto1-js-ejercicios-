const listanombres = document.getElementById('listanombres');
const entradanombre = document.getElementById('entradanombre');
const botonenviar = document.getElementById('botonenviar');


botonenviar.addEventListener('click', agregarnombre);

function agregarnombre() {
  const nombre = entradanombre.value.trim();

  if (nombre) {
    const elementoN = document.createElement('li');
    elementoN.textContent = nombre;
    listanombres.appendChild(elementoN);
    entradanombre.value = ''; 
  }
}

listanombres.style.height = '15rem'
listanombres.style.border = '1px solid black'

botonenviar.style.marginLeft = '50px'
botonenviar.style.marginTop = '15px'



  