const paisesLatam = [
    "Argentina",
    "Bolivia",
    "Brasil",
    "Chile",
    "Colombia",
    "Ecuador",
    "Guyana",
    "Guyana Francesa",
    "Paraguay",
    "Perú",
    "Suriname",
    "Uruguay",
    "Venezuela",
    "Guyana",
    "Guyana Francesa",
    "Paraguay",
    "Perú",
    "Suriname",
    "Uruguay",
    "Venezuela",
];

for (let i = 0; i < paisesLatam.length; i++) {

    const numero = (paisesLatam.length - i);
    // Forma 1 de poner un cero adelante
    const numeroToString = String(numero);
    const numeroTwoDigits = numeroToString.padStart(2, '0');

    //Forma 2 de poner un 0 adelante

    // if (numero < 10) numero = '0' + numero;

    document.write(`<p>${numeroTwoDigits} - ${paisesLatam[i]}</p>`);

}