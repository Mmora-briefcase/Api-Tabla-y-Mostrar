

function Tabla() {
    let contenidotabla =document.getElementById("contenidotabla")
    let misdatos ;
    fetch('tabla.json')
    .then(response=> response.json())
    .then(data=>{


        data.forEach(element => {
           misdatos += ` 
          
           <tr> 
                    
                     <td>${element.id}</td>  
                     <td>${element.nombre}</td>
                     <td>${element.email}</td>
                     <td>${element.estado ? "Activo" : "Inactivo"}</td>
           </tr>
                     `
            
        });
        contenidotabla.innerHTML = misdatos
    })

}


function Mostrar() {
//Declaracion variables 
let url ="https://randomuser.me/api/"
let contenido = document.getElementById("contenido")
let nombre ;
let imagen;
let miinformacion 
//

fetch(url)
.then(response => response.json())
.then(data => {
nombre =data.results[0].name.first
imagen = data.results[0].picture.large

miinformacion =` 
        <img src="${imagen}" alt="" class="img-fluid rounded-circle">
        <p>Nombre : ${nombre} </p>

    `

// variable div + innerhtml   
contenido.innerHTML = miinformacion
   

console.log(nombre)
console.log(imagen)



})

}