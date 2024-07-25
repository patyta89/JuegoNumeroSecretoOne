let numeroSecreto = 0;
let intentos= 0;
console.log(numeroSecreto);
let listaNumerosSorteados=[];
let numeroMaximo=10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
       
}
function verificarIntento(){
   let numeroUsuario= parseInt(document.getElementById('valorUsuario').value);
  


   if (numeroUsuario===numeroSecreto){
    asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos==1)?'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');

   }else{
    // EL USUARIO NO ACERTO.
    if(numeroUsuario >numeroSecreto){
        asignarTextoElemento('p','El numero secreto es menor')
    }else{
        asignarTextoElemento('p','El numero secreto es mayor')
    }
    intentos++;

limpiarCaja();
   }
return;

}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value=valorCaja= ''; 
   } 

function generarNumeroSecreto(){
  let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  //si ya sorteamos todos los numeros
  if(listaNumerosSorteados.length==numeroMaximo){
asignarTextoElemento('p','ya se asignaron todos los numeros posibles');

  }else{
  
  //Si el numero generado esta incluido en la lista
  if(listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
  }else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
  }
} 



function condicionesIniciales(){
    asignarTextoElemento('h1','juego del numero secreto!');
    asignarTextoElemento('P',`indica un numero del 1 al${numeroMaximo}` ); 
    numeroSecreto = generarNumeroSecreto ();
    intentos=1;

}
function reiniciarJuego(){
    //limpiar caja
     limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Desahbilitar el boton del nuevo juego
    Document.querySelector('#reiniciar').setAttribute('disabled','true');
}
    condicionesIniciales();
