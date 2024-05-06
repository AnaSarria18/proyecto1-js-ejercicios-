console.log('Hola desde la consola');

function saludar (){
    console.log("Hola soy la primera funcions");
}
saludar()

function saludar2 (){


    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
}

saludar2();

function sumar (){
    var numero1 = 25;
    var numero2 = 10;
    var resultado = numero1 + numero2;
    console.log('elresultado de la suma es:' + resultado );
}


sumar();
sumar();
sumar();
sumar();


function bienvenido(){
    console.log('Hola eres bienvenido al ADSO');
};

bienvenido();

    function bienvenido(){
        console.log('Hola eres bienveido al ADSO');

        return "Hola desde consola ADSO";
    };

    bienvenido();
    const bienve = bienvenido();
    console.log(bienve);


    /* funciones con parametros */

    function suma (numero1, numero2){
        return numero1 +numero2;
    }

    suma(8, 3);
    const res = suma(8, 3);
    console.log(res);

    const res1 = suma(20, 15);
    console.log(res1);

    const res2 = suma(30, 14);
    console.log(res2);


  /*   crear una funcion que reciba el nombre Maria y que diga "Hola Maria como estas*/

  function saludar (nombre){
  }
  const nombre = ('Ana Maria');
    console.log(`Hola ${nombre}, como estas?`);

    /* funcion anonima */

    const suma4 = function suma (numero1, numero2){
        return numero1 +numero2;
    }
    const res3= suma(30, 14);
    console.log(res3);

    /* funcion anonima */
   let nom =function saluda (nombre){
    }
    const nombre1 = ('Ana Maria');
      console.log(`Hola ${nombre}, como estas?`);


      /* funcion fecha */
      const funcioncuatro = ()=>{
        console.log(2);
      }


      /* crear una funcion que me diga si el numero es primo o no utilizando retrun */

      let num = parseInt(prompt('Ingrese un numero'));

      const primo = function Nprimo(){
        for(var5 =1; var5 < num; var5++)
        {
            if (num / var5 ==0) {
                return console.log("El numero ingresado no es primo");
            } else{
                return console.log("El numero ingresado es primo");
            }
        }
      }

      const var4= primo();
      console.log(var4)



      /* escribe una funcion que solicite un numero y imprima la tabla de multiplicar */
     
     