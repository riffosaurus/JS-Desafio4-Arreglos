//variables seteadas iniciales

//boton
const boton = document.querySelector('#btnBuscar');
//seleccionar div de propiedades
const propiedades = document.querySelector('#propiedades')


const propiedadesJSON = [
    {
      nombre: "Casa de campo",
      descripcion: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      cuartos: 2,
      metros: 170
    },
    {
      nombre: "Casa de playa",
      descripcion: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      cuartos: 2,
      metros: 130
    },
    {
      nombre: "Casa en el centro",
      descripcion: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      cuartos: 1,
      metros: 80
    },
    {
      nombre: "Casa rodante",
      descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      cuartos: 1,
      metros: 6
    },
    {
      nombre: "Departamento",
      descripcion: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      cuartos: 3,
      metros: 200
    },
    {
      nombre: "Mansión",
      descripcion: "Vive una vida lujosa en la mansión de tus sueños",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      cuartos: 5,
      metros: 500
    }
  ];




   



  //Agrear evento Click para el boton
  boton.addEventListener("click", () =>  {
   //Capturamos los valores de los input
   let dormitorios = document.getElementById("cuartos").value;
   let valorMin = document.getElementById("valorMin").value;
   let valorMax = document.getElementById("valorMax").value;
   // total de resultados
   let total = document.getElementById("total");
   totalConteo = 0;
   //declaramos la variable para el html
 let templateFiltrado = '';
//condicion que designa que si algun espacio está vacío, se alerte
 if (dormitorios == '' || valorMin == '' || valorMax == '') {
  alert('Por favor, rellene todos los datos')
 } else {
 //usamos un for para leer los valores del array
 for (let propiedad of propiedadesJSON) {
  //condicion que debe cumplirse para sumar al contador
  if (propiedad.cuartos >= dormitorios && (propiedad.metros >= valorMin && propiedad.metros <= valorMax))
  totalConteo++; 
  // si se cumplen las condiciones, se aplica este template para el objeto
  if (propiedad.cuartos >= dormitorios && (propiedad.metros >= valorMin && propiedad.metros <= valorMax))
  //aplicamos el template, lo concatenamos al valor vacio que declaramos antes
  templateFiltrado += 
  `
  <div class="propiedades">
            <div class="propiedad">
                <div class="img" style="background-image: url('${propiedad.src}')"></div>
                <section>
                    <h5>${propiedad.nombre}</h5>
                    <div class="d-flex justify-content-between">
                        <p>Cuartos: ${propiedad.cuartos}</p>
                        <p>Metros: ${propiedad.metros}</p>
                    </div>
                    <p class="my-3">${propiedad.descripcion}</p>
                    <button class="btn btn-info ">Ver más</button>
                </section>
            </div>
        </div>
        `
       
        
}


       
//se actualiza el HTML
propiedades.innerHTML = templateFiltrado;
total.innerHTML = totalConteo;
 }

  })




