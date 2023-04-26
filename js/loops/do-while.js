let edad;

do {
    edad = parseInt(prompt("Ingrese la edad de la persona"));
} while (edad < 5 || edad > 130);

console.log(`Salio del script`);