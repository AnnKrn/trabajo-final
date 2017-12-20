var seleccionarOpcion = function(event) {
  var indiceOpcion = (event.target.selectedIndex);
  var sede = event.target[indiceOpcion].dataset.sede;
  var generacion = event.target[indiceOpcion].dataset.generacion;
  //ingresa a la data
  var estudiantes = data[sede][generacion]['students'];

  document.getElementById('profile-student').innerHTML = '';
  //ingresa a array
  for(var i = 0; i < estudiantes.length; i += 1){
    var score = estudiantes[i]['sprints']
    //variable para obtener array de score Tech
    var arrayScoreTech = [];
    for (var j = 0; j < score.length; j += 1){
      var scoreTech = score[j].score.tech;

      arrayScoreTech.push(scoreTech);
    }

    //variable para obtener array de score hse
    var arrayScoreHSE = [];
    for (var k = 0; k < score.length; k += 1){
      var scoreHSE = score[k].score.hse;

      arrayScoreHSE.push(scoreHSE);
    }

    //promedio de los elementos del array score hse
    var sumaScoreHSE = 0;
    var promedioScoreHSE = 0;
    var promedioScoreHSERound = 0;
    for (var m = 0; m < arrayScoreHSE.length; m += 1 ) {
      sumaScoreHSE = sumaScoreHSE + arrayScoreHSE[m];
      promedioScoreHSE = sumaScoreHSE * 100 / 5400;
      //redondeo de numeros decimales
      promedioScoreHSERound = promedioScoreHSE.toFixed(2);
    }
    console.log(promedioScoreHSERound)
    //promedio de los elementos del array score tech
    var sumaScoreTech = 0;
    var promedioScoreTech = 0;
    var promedioScoreTechRound = 0;
    for (var l = 0; l < arrayScoreTech.length; l += 1 ) {
      sumaScoreTech = sumaScoreTech + arrayScoreTech[l];
      promedioScoreTech = sumaScoreTech * 100 / 5400;
      //redondeo de numeros decimales
      promedioScoreTechRound = promedioScoreTech.toFixed(2);
    }

    //variables con datos de cada estudiante
    var nombre = estudiantes[i].name;
    var photo = estudiantes[i].photo;
    var active = estudiantes[i].active;

    console.log(active)

    //Elementos de DOM
    var profileStudent = document.getElementById('profile-student');
    var parrafoNombre = document.createElement('p');
    var photoElement = document.createElement('img');
    //var parrafoActive = document.createElement('p');
    var parrafoScoreTechName = document.createElement('p');
    var parrafoScoreTech = document.createElement('p');
    var parrafoScoreHSEName = document.createElement('p');
    var parrafoScoreHSE = document.createElement('p');
    var divContainerHSE = document.createElement('div');
    var divContainerTech = document.createElement('div');
    var divContainer = document.createElement('div');

    photoElement.src = 'http://lorempixel.com/200/200/people/';
    //añade clase a la imagen
    photoElement.classList.add('photo-coder');
    //añade clase al divContainer
    divContainer.classList.add('coder');
    //parrafoNombre.classList.add('coder-line');
    parrafoNombre.innerText = nombre;
    //parrafoActive.innerText = active;
    parrafoScoreTechName.innerText = "Tech Skills"
    parrafoScoreTech.innerText = promedioScoreTechRound;
    parrafoScoreHSEName.innerText = "HSE Skills"
    parrafoScoreHSE.innerText = promedioScoreHSERound;
    console.log(parrafoScoreHSE)

    //appendChild a div contenedor
    divContainer.appendChild(parrafoNombre);
    divContainer.appendChild(photoElement);
    //divContainer.appendChild(parrafoActive);

    divContainerTech.appendChild(parrafoScoreTechName);
    divContainerTech.appendChild(parrafoScoreTech);

    divContainerHSE.appendChild(parrafoScoreHSEName);
    divContainerHSE.appendChild(parrafoScoreHSE);

    divContainer.appendChild(divContainerTech);
    divContainer.appendChild(divContainerHSE);

    //appendChild a seccion
    profileStudent.appendChild(divContainer);
  }
}
