const text = prompt("Ingrese un texto");

console.dir(text.length);

const vocales = "aeiou";
let totalvocales = 0;

for (let i = text.length - 1; i >= 0; i--) {
    document.write(`${text[i]}<br>`);

    const letra = text[i];
    if(vocales.includes(letra.toLowerCase())) {
        totalvocales++;
    }
}

console.log(`Se encontraron un total de ${totalvocales} vocales`)