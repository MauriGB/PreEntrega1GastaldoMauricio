
function bucle() {
    let tabla = parseInt(prompt('Las tablas de que numero queres saber?'));
    for (let i = 1; i < 10; i++) {
        let resultado = (i * tabla)
        console.log(tabla + 'x' + i + '   ' + resultado);
    }
    alert('mira consola!')
    
}

function cereal(){
    const cerealKm = 2000;
    const acopladoKm = 3000;
    let pesoCereal = parseInt(prompt('cuantas toneladas debe trasportar? (maximo 45)'));
    if (pesoCereal <= 20){
        let distancia = parseInt(prompt('No vas a necesitar acoplado, cuantos km va a recorrer?'));
        let importe = (distancia * cerealKm);
        alert('El viaje sin acoplado de '+distancia+'km tiene un importe de '+importe+'$');
        
    } else if((pesoCereal > 20) && (pesoCereal <= 45)){
        let distancia = parseInt(prompt('Vas a necesitar acoplado, cuantos km va a recorrer?'));
        let importe = (distancia * acopladoKm);
        alert('El viaje con acoplado de '+distancia+'km tiene un importe de '+importe+'$');
        
    }else {
        alert('Se sobrepase el peso, vuelva a intentarlo');
        cereal();
    }
}

function ganado(){
    const ganadoKm = 2500;
    let distancia = parseInt(prompt('Selecciono ganado, cuantos km va a recorrer?'));
    let importe = (distancia * ganadoKm);
    alert('El viaje con el ganado de '+distancia+'km tiene un importe de '+importe+'$');
}

function camion(){
    let carga = parseInt(prompt('Bienvenido a la calculadora del camion, seleccione el tipo de carga para calcular el presupuesto: \n 1- cereal \n 2- ganado'));
    if (carga == 1) {
        cereal();
    }else if (carga == 2){
        ganado();
        }else{
            alert('opcion incorrecta vuelva a intentarlo');
            camion();
        }
}



let opcion = prompt('Bienvenido a la primera pre entrega, selecciona una opcion: \n 1- Las tablas (bucle) \n 2- Simulador calculadera de viajes de camion \n 0- salir');
switch (opcion) {
    case '1':
        bucle();  
        alert('Gracias, vuelvan pronto');  
        break;
    case '2':
        camion();
        alert('Gracias, vuelvan pronto');
        break;

    case '0':
        alert('Gracias, vuelvan pronto');
        break;
}
