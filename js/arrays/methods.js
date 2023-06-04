// const paisesLatinoamerica = [
//   {
//     nombre: "Argentina",
//     capital: "Buenos Aires",
//     habitantes: 44938712,
//     ubicacion: "Sudamérica",
//     imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
//     continentes: 'America'
//   },
//   {
//     nombre: "Bolivia",
//     capital: "La Paz",
//     habitantes: 11469896,
//     ubicacion: "Sudamérica",
//     imagen: 'https://flags-world.com/wp-content/uploads/2021/01/flag-of-bolivia_1.png',
//     continente: 'America'
//   },
//   {
//     nombre: "Brasil",
//     capital: "Brasilia",
//     habitantes: 211049527,
//     ubicacion: "Sudamérica"
//   },
//   {
//     nombre: "Chile",
//     capital: "Santiago",
//     habitantes: 18054726,
//     ubicacion: "Sudamérica"
//   },
//   {
//     nombre: "Colombia",
//     capital: "Bogotá",
//     habitantes: 50372424,
//     ubicacion: "Sudamérica"
//   },
//   {
//     nombre: "Costa Rica",
//     capital: "San José",
//     habitantes: 5047561,
//     ubicacion: "Centroamérica"
//   },
//   {
//     nombre: "Cuba",
//     capital: "La Habana",
//     habitantes: 11209628,
//     ubicacion: "Caribe"
//   },
//   {
//     nombre: "Ecuador",
//     capital: "Quito",
//     habitantes: 17373662,
//     ubicacion: "Sudamérica"
//   },
//   {
//     nombre: "El Salvador",
//     capital: "San Salvador",
//     habitantes: 6704864,
//     ubicacion: "Centroamérica"
//   },
//   {
//     nombre: "Guatemala",
//     capital: "Ciudad de Guatemala",
//     habitantes: 17679735,
//     ubicacion: "Centroamérica"
//   },
//   {
//     nombre: "Honduras",
//     capital: "Tegucigalpa",
//     habitantes: 9746117,
//     ubicacion: "Centroamérica"
//   },
//   {
//     nombre: "México",
//     capital: "Ciudad de México",
//     habitantes: 126190788,
//     ubicacion: "Norteamérica"
//   },
//   {
//     nombre: "Nicaragua",
//     capital: "Managua",
//     habitantes: 6624554,
//     ubicacion: "Centroamérica"
//   },
//   {
//     nombre: "Panamá",
//     capital: "Ciudad de Panamá",
//     habitantes: 4246439,
//     ubicacion: "Centroamérica"
//   },
//   {
//     nombre: "Paraguay",
//     capital: "Asunción",
//     habitantes: 7152703,
//     ubicacion: "Sudamérica"
//   },
//   {
//     nombre: "Perú",
//     capital: "Lima",
//     habitantes: 32165485,
//     ubicacion: "Sudamérica"
//   },
//   {
//     nombre: "República Dominicana",
//     capital: "Santo Domingo",
//     habitantes: 10766998,
//     ubicacion: "Caribe"
//   },
//   {
//     nombre: "Uruguay",
//     capital: "Montevideo",
//     habitantes: 3473730,
//     ubicacion: "Sudamérica"
//   },
//   {
//     nombre: "Venezuela",
//     capital: "Caracas",
//     habitantes: 28515829,
//     ubicación: "Sudamérica"
//   },
//   {
//     nombre: "Puerto Rico",
//     capital: "San Juan",
//     habitantes: 2860853,
//     ubicacion: "Caribe"
//   },
//   {
//     nombre: "Guayana Francesa",
//     capital: "Cayena",
//     habitantes: 294071,
//     ubicacion: "Sudamérica"
//   },
//   {
//     nombre: "Surinam",
//     capital: "Paramaribo",
//     habitantes: 581372,
//     ubicacion: "Sudamérica"
//   },
//   {
//     nombre: "Guyana",
//     capital: "Georgetown",
//     habitantes: 782766,
//     ubicacion: "Sudamérica"
//   },
//   {
//     nombre: "Haití",
//     capital: "Puerto Príncipe",
//     habitantes: 11577779,
//     ubicacion: "Caribe"
//   },
//   {
//     nombre: "Jamaica",
//     capital: "Kingston",
//     habitantes: 2948279,
//     ubicacion: "Caribe"
//   },
//   {
//     nombre: "Trinidad y Tobago",
//     capital: "Puerto España",
//     habitantes: 1394973,
//     ubicacion: "Caribe"
//   },
//   {
//     nombre: "Bahamas",
//     capital: "Nasáu",
//     habitantes: 385340,
//     ubicacion: "Caribe"
//   },
//   {
//     nombre: "Barbados",
//     capital: "Bridgetown",
//     habitantes: 287025,
//     ubicacion: "Caribe"
//   },
//   {
//     nombre: "Santa Lucía",
//     capital: "Castries",
//     habitantes: 183645,
//     ubicacion: "Caribe"
//   },
//   {
//     nombre: "San Cristóbal y Nieves",
//     capital: "Basseterre",
//     habitantes: 52441,
//     ubicacion: "Caribe"
//   },
//   {
//     nombre: "San Vicente y las Granadinas",
//     capital: "Kingstown",
//     habitantes: 110608,
//     ubicacion: "Caribe"
//   },
//   {
//     nombre: "Antigua y Barbuda",
//     capital: "Saint John's",
//     habitantes: 104084,
//     ubicacion: "Caribe"
//   },
//   {
//     nombre: "Dominica",
//     capital: "Roseau",
//     habitantes: 71986,
//     ubicacion: "Caribe"
//   },
//   {
  //     nombre: "Granada",
//     capital: "Saint George's",
//     habitantes: 112003,
//     ubicacion: "Caribe"
//   }
// ];

const paisesLatinoamerica = JSON.parse(localStorage.getItem('paises')) || [];

const copiaArray = Array.from(paisesLatinoamerica);

const tableBodyHtml = document.getElementById('tableBody');

const countriesForm = document.getElementById('countries-form');

let editIndex;

function editarPais(index) {
  //Buscar el pais con el index provenciente del click en el boton editar
  let pais = paisesLatinoamerica.find((pais, idx) => {
    if (pais.id === index) {
      editIndex = idx;
      return true;
    }
  });

  renderSubmitBtn();

  //Rellenar el formulario con los datos del pais

  if (!pais) {
    swal('Error', 'No se encontro un pais', 'error')
    return;
  }

  const el = countriesForm.elements;

  countriesForm.elements.nombre.value = pais.nombre;
  countriesForm.elements.capital.value = pais.capital;
  countriesForm.elements.ubicacion.value = pais.ubicacion;
  countriesForm.elements.habitantes.valueAsNumber = pais.habitantes;
  countriesForm.elements.imagen.value = pais.imagen;
  countriesForm.elements.continentes.value = pais.continente;
  countriesForm.elements.continentes.value = pais.continente;
  countriesForm.elements.active.checked = pais.active;

}

function agregarEditarPais(evt) {
   //Prevenir comportamiento por defecto del navegador(recarga)
   evt.preventDefault();

   const el = evt.target.elements;
 
   const pais = {
     nombre: el.nombre.value,
     capital: el.capital.value,
     habitantes: el.habitantes.valueAsNumber,
     ubicacion: el.ubicacion.value,
     imagen: el.imagen.value,
     continente: el.continentes.value,
     active: el.active.checked,
     id: Date.now()
   }
 
   if (editIndex) {
    paisesLatinoamerica[editIndex] = pais;
    editIndex = undefined;
   } else {
    paisesLatinoamerica.push(pais);
   }
 
   renderSubmitBtn()

   //Guardamos el array en localStorage
   localStorage.setItem('paises', JSON.stringify(paisesLatinoamerica));
 
   //Pintamos nuestro array actualizado
   // const data = JSON.parse(localStorage.getItem('pasies'));
 
   renderizarTable(paisesLatinoamerica);
 
   evt.target.reset();
   el.nombre.focus();
};

function renderSubmitBtn() {
  
  const submitBtnHTML = document.getElementById('submit-btn');

  if (editIndex) {
    submitBtnHTML.innerText = 'Editar Pais';
    submitBtnHTML.classList.add('btn-success');
    submitBtnHTML.classList.remove('btn-primary');
  }else {
    submitBtnHTML.innerText = 'Cargar Pais';
    submitBtnHTML.classList.remove('btn-success');
    submitBtnHTML.classList.add('btn-primary');
  }

}

function ordernarPaises(order) {
  const valorOrdenamiento = order ? 1 : -1;
  paisesLatinoamerica.sort((a, b) => {
    if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
      return valorOrdenamiento;
    } else if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
      return -valorOrdenamiento;
    } else {
      return 0;
    }
  });

  renderizarTable(paisesLatinoamerica);
};

countriesForm.addEventListener('submit', (evento) => agregarEditarPais(evento));


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

function borrarPais(idBorrar) {
  // Ya no necesitamos trabajar con la copia
  // copiaArray.splice(indice, 1); 

  // renderizarTable(copiaArray);
  // calcularPoblacionTotal(copiaArray);

  //Ahora trabajamos con el array original

  const idx = paisesLatinoamerica.findIndex(pais => pais.id === idBorrar);

  //No encontro coincidencia
  if (idx === -1) return swal('Error', 'El pais no se pudo borrar', 'error');

  paisesLatinoamerica.splice(idx, 1);

  localStorage.setItem('paises', JSON.stringify(paisesLatinoamerica));

  calcularPoblacionTotal(paisesLatinoamerica);

  renderizarTable(paisesLatinoamerica);

}

function calcularPoblacionTotal(listaPaises) {

  const acumuladorTotal = listaPaises.reduce((acumulador, item) => {

    acumulador += item.habitantes;

    return acumulador;

  }, 0);


  const populationCell = document.getElementById('total');

  populationCell.innerText = acumuladorTotal

}

function renderizarTable(arrayDePaises) {

  calcularPoblacionTotal(arrayDePaises)

  tableBodyHtml.innerHTML = '';

  arrayDePaises.forEach((pais, index) => {

    const posicion = String(index + 1).padStart(2, '0');
    const paisImage = pais.imagen ? pais.imagen : `/assets/img/default-img.png`; //Es un operador ternario que funciona como un if pero en una sola linea.

    tableBodyHtml.innerHTML +=
      `<tr>
    <td>
      <img src="${paisImage}" class="pais-imagen" alt="Bandera del pais ${pais.nombre}">
    </td> 
    <th scope="row">${posicion}</th>
    <td>
      ${pais.nombre}  
      <div>
        <small>${pais.continente ? pais.continente : ''}</small>
      </div>
    </td>
    <td>${pais.capital}</td>
    <td>${pais.ubicacion} </td>
    <td class="text-center">${pais.habitantes}</td>
    <td>
      <button class="btn btn-danger" px-1" onclick="borrarPais(${pais.id})"> <i class="fa-solid fa-trash"> </i></button>
      <button class="btn btn-success" px-1" onclick="editarPais(${pais.id})"> <i class="fa-solid fa-pen-to-square"></i> </i></button>
    </td>
    </tr>`;

  });

}

function filtrarPaises() {
  const paisesFiltrados = paisesLatinoamerica.filter((pais) => {
    if (pais.habitantes >= 15000000) {
      return true;
    }
  });
  renderizarTable(paisesFiltrados);
};



renderizarTable(paisesLatinoamerica);



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