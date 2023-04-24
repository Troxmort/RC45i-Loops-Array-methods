const potencia = prompt("Ingrese el numero de la potencia");

for (let i = 0; i <= 20; i++) {
    const resultado = Math.pow(i, potencia);
    document.write(`${i} ^ ${potencia} = ${resultado} <br>`);
    
}