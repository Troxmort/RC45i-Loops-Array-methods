const producto1 = 346.56;
const producto2 = 596.3;
const producto3 = 1860.34;
const producto4 = 14.34;
const dolar = 470;
const iva = 1.21;
const ganancia = 1.35;

function calcularPrecios (valorProducto, cuotas) {
    const precioContado = calcularPrecioContado(valorProducto);
    const precioFinanciado = calcularPrecioLista(precioContado, cuotas);
    const precioCuota = calcularPrecioCuotas(precioFinanciado, cuotas)

    
    document.write(`<p><strong>PRECIO CONTADO: </strong> $ ${precioContado}</p>`)


    if (!cuotas) return;
    
    document.write(`<p><strong>${cuotas} cuotas de $ ${parseInt(precioCuota / 12)}</strong> </p>`)
    document.write(`<p><small>PRECIO LISTA: </small>$ ${precioFinanciado}</p>`)
}

function calcularPrecioContado(precioProd) {
    const precio = parseInt(precioProd * dolar * iva * ganancia);
    return precio;
}

const calcularPrecioLista = function(precioContado, cuotas) {
    let interesFinanciacion;
    switch (cuotas) {
        case 3:
            interesFinanciacion = 1.15;
            break;
        case 6:
            interesFinanciacion = 1.28;
            break;
        case 12:
            interesFinanciacion = 1.42;
            break;
        case 18:
            interesFinanciacion = 1.78;
            break
        default:
            interesFinanciacion = 1.40;
            break;
    }
    const precioLista = parseInt(precioContado * interesFinanciacion);
    return precioLista;
}

const calcularPrecioCuotas = (precioFinanciado, cuotas) => {
    const cuota = +(precioFinanciado / cuotas).toFixed(2);
    return cuota;
}
calcularPrecios(producto1);
calcularPrecios(producto2, 6);
calcularPrecios(producto3, 3);
calcularPrecios(producto4, 18);


// EJEMPLO FUNCIONES

// function saludar (nombre) {
//     console.log(`Bienvenido ${nombre} a mi sitio web`);
// }

// saludar("Matias");

// function calcularPerimetro ( diametro ) {
//     const perimetro = parseInt((Math.PI * diametro  * 100) / 100);
//     console.log(`Perimetro del ciculo es: ${perimetro}`);
// }

// calcularPerimetro(26);

// function calcularPerimetroRectangulo (base, altura) {
//     console.log(`base: ${base} altura: ${altura}`);
//     const perimetro = base * altura;

//     console.log(`Perimetro del rectangulo es: ${perimetro}`);   
// }

// calcularPerimetroRectangulo(50, 120);

// function cuadrado (lado) {
//     const perimetro = Math.pow(lado, 2);
//     console.log(`Perimetro del cuadrado es: ${perimetro}`);   
// }

// cuadrado(20);


