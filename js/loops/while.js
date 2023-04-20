const numTabla = parseInt(prompt("Ingrese un numero para generar la tabla de multiplicar"))
let i = 1;

while (i <= 10) {
    const multiplicacion = i * numTabla;
    console.log(`El resultado de ${i}x${numTabla} = ${multiplicacion}`);
    i++;
}
