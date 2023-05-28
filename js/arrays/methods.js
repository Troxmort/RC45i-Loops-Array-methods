const paisesLatinoamerica = [
  {
    nombre: "Argentina",
    ubicacion: "Sur de Sudamérica",
    habitantes: 45000000,
    capital: "Buenos Aires",
  },
  {
    nombre: "Bolivia",
    ubicacion: "Centro de Sudamérica",
    habitantes: 11000000,
    capital: "La Paz",
  },
  {
    nombre: "Brasil",
    ubicacion: "Este de Sudamérica",
    habitantes: 211000000,
    capital: "Brasilia",
  },
  {
    nombre: "Chile",
    ubicacion: "Sur de Sudamérica",
    habitantes: 19000000,
    capital: "Santiago",
  },
  {
    nombre: "Colombia",
    ubicacion: "Norte de Sudamérica",
    habitantes: 50340000,
    capital: "Bogotá",
  },
  {
    nombre: "Costa Rica",
    ubicacion: "Centroamérica",
    habitantes: 5100000,
    capital: "San José",
  },
  {
    nombre: "Cuba",
    ubicacion: "El Caribe",
    habitantes: 11400000,
    capital: "La Habana",
  },
  {
    nombre: "Ecuador",
    ubicacion: "Oeste de Sudamérica",
    habitantes: 17300000,
    capital: "Quito",
  },
  {
    nombre: "El Salvador",
    ubicacion: "Centroamérica",
    habitantes: 6500000,
    capital: "San Salvador",
  },
  {
    nombre: "Guatemala",
    ubicacion: "Centroamérica",
    habitantes: 18200000,
    capital: "Ciudad de Guatemala",
  },
  {
    nombre: "Honduras",
    ubicacion: "Centroamérica",
    habitantes: 10000000,
    capital: "Tegucigalpa",
  },
  {
    nombre: "México",
    ubicacion: "Norte de América Central",
    habitantes: 128900000,
    capital: "Ciudad de México",
  },
  {
    nombre: "Nicaragua",
    ubicacion: "Centroamérica",
    habitantes: 6400000,
    capital: "Managua",
  },
  {
    nombre: "Panamá",
    ubicacion: "Centroamérica",
    habitantes: 4300000,
    capital: "Ciudad de Panamá",
  },
  {
    nombre: "Paraguay",
    ubicacion: "Centro de Sudamérica",
    habitantes: 7200000,
    capital: "Asunción",
  },
];

const tableBodyHtml = document.getElementById('tableBody');

function pintarPaisesOriginales() {
  renderizarTable(paisesLatinoamerica);
}

function aplicarFiltroNombre(evtDesdeHTML) {
  
  const valorFiltro = evtDesdeHTML.target.value.toLowerCase();
  const paisesFiltrados = paisesLatinoamerica.filter(function (pais) {
    const nombrePais = pais.nombre.toLowerCase();
    if (nombrePais.includes(valorFiltro)) {
      return true;
    }
    return false;
  });

  renderizarTable(paisesFiltrados);

}

function renderizarTable(arrayDePaises) {

  tableBodyHtml.innerHTML = '';

  arrayDePaises.forEach((pais, index) => {

    const posicion = String(index + 1).padStart(2, '0');

    tableBodyHtml.innerHTML +=
      `<tr>
    <th scope="row">${posicion}</th>
    <td>${pais.nombre}</td>
    <td>${pais.capital}</td>
    <td>${pais.habitantes}</td>
    <td>${pais.ubicacion} </td>
    </tr>`;

  })

}

renderizarTable(paisesLatinoamerica);

function filtarPaises(params) {
  const paisesFiltrados = paisesLatinoamerica.filter((pais)=> {
    if (pais.habitantes >= 15000000) {
      return true;
    }
  });
  renderizarTable(paisesFiltrados);
};




// ** Ejemplo del filter

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// ** Otras forma de resolverlo
// const pares = numeros.filter((value) => value % 2 === 0 ? true : false)
// const pares = numeros.filter((value) => value % 2 === 0)

// const pares = numeros.filter((value) => {
//     if(value % 2 === 0) {
//         console.log(`${value} es par`)
//         return true;
//     } else {
//         console.log(`${value} es impar`)
//         return false;
//     }
// });