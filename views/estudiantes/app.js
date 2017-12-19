var seleccionarOpcion = function(event) {
  var indiceOpcion = (event.target.selectedIndex);
  var sede = event.target[indiceOpcion].dataset.sede;
  var generacion = event.target[indiceOpcion].dataset.generacion;
  //ingresa a la data
  var estudiantes = data[sede][generacion]['students'];
  //var score = data[sede][generacion]['students']
  document.getElementById('profile-student').innerHTML = '';
  //ingresa a array
  for(var i = 0; i < estudiantes.length; i += 1){
    var nombre = estudiantes[i].name;
    var photo = estudiantes[i].photo;
    var active = estudiantes[i].active;

    var profileStudent = document.getElementById('profile-student');
    var parrafoNombre = document.createElement('p');
    var photoElement = document.createElement('img');
    var parrafoActive = document.createElement('p');
    var divContainer = document.createElement('div');

    photoElement.src = 'http://lorempixel.com/200/200/people/';
    //añade clase a la imagen
    photoElement.classList.add('photo-coder');
    //añade clase al divContainer
    divContainer.classList.add('coder');
    parrafoNombre.classList.add('coder-line');
    parrafoNombre.innerText = nombre;
    parrafoActive.inerText = active;

    divContainer.appendChild(photoElement);
    divContainer.appendChild(parrafoNombre);
    divContainer.appendChild(parrafoActive);

    profileStudent.appendChild(divContainer);

  }
}
