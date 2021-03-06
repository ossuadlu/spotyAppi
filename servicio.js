// consumo(traer datos) de appi desde un cliente js

const URI="https://api.spotify.com/v1/artists/4N5fp4zhTsVITZTVfsXpc2/top-tracks?market=US" 
const TOKEN= "Bearer BQAt_cat-HB8MFsteB0u3xwXrKf7KsXMKK_ZN2MU8CE2OHJ8Cx7dbg-mdJJcJwZDF4evYJ65pEH0XhB_gXPNx8d8XEH8hyAZ_FdWkzXLlHVUZ7flLWzyq66nrjYDPA8YLxcjXmkEkLvJ09WJa6bDrBCrcu2glPo"

// los parametros siempre seran un objeto
//1. method
//2.headers
//3.body
const PARAMETROS_PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}
//ir a tocar la puerta al server

fetch(URI,PARAMETROS_PETICION)
.then(function(respuesta){ // verificar el formato json de la respuesta
    return(respuesta.json())
})
.then(function(respuesta){ //hago lo que necesite con la respuesta
    pintarCanciones(respuesta.tracks)
    let fila= document.getElementById("fila")
    
    respuesta.tracks.forEach(function (cancion){  
       /* console.log(cancion.name) 
        console.log(cancion.preview_url) 
        console.log(cancion.album.images[0].url)*/

        let columna=document.createElement("div")
        //a columna le agregagamos la clase col
        columna.classList.add("col")
    
        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let imagen = document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("h-100")
        imagen.classList.add("p-3")
        imagen.src=cancion.album.images[0].url

        let separador = document.createElement("hr")
        separador.classList.add("w-50")
        separador.classList.add("mx-auto")
        separador.classList.add("d-block")

        let cuadroTexto = document.createElement("div")
        cuadroTexto.classList.add("px-3")
        cuadroTexto.classList.add("text-center")
    
        let nombreCancion = document.createElement("h4")
        nombreCancion.textContent=cancion.name

        let direccionCancion = document.createElement("audio")
        direccionCancion.src=cancion.preview_url
        direccionCancion.setAttribute("controls","controls")


        cuadroTexto.appendChild(nombreCancion)
        cuadroTexto.appendChild(direccionCancion)
    
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(separador)
        tarjeta.appendChild(cuadroTexto)
        
        columna.appendChild(tarjeta)
        fila.appendChild(columna)



    }) 
})

.catch(function(respuesta){ // mostrar el mensaje de error  de la respuesta
    console.log("UPS... "+ respuesta)
})

//**************/
// funcion pintar
//funcion encargada de recoger los datos y pintarlos en pantalla

function pintarCanciones(canciones){
    console.log("estamos pintando....")
    console.log(canciones)
}





