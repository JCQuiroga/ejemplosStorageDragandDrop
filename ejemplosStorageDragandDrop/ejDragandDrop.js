if (!sessionStorage.getItem("nombre"))
    location.replace("ejStorage.html"); // Si no iniciaste sesion, te manda de vuelta a la págnia de incio de sesion






var idActual = undefined;
function drag(evt) {
    idActual = evt.target.id;
    //  evt.dataTransfer.setData("objeto",evt.target.id); //datatransfer asocia al evento la informacion sobre que estamos haciendo. En este caso, el ID del obj que estoy moviendo.
}

function allowDrop(evt) {
    evt.preventDefault(); //Evita que se interprete que queremos hacer el draganddrop con la capa de destino en vez de con el elemento que cogimos previamente.
}

function drop(evt) {
    evt.preventDefault();

   /* var data = evt.dataTransfer.getData("objeto");
    document.getElementById("destino").appendChild(document.getElementById(data));*/


    // evt.target.appendChild(document.getElementById(data)); En este caso, si lo sueltas sobre una imagen, mete la imagen dentro de la imagen destino, por lo que falla (quedaria <img id=1>  <img id=2></img>     </img>)

    document.getElementById("destino").appendChild(document.getElementById(idActual));
    idActual = undefined;

}

var imgs = document.querySelectorAll("img");
var destino = document.querySelector("#destino");

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("dragstart", drag);
}
destino.addEventListener("dragover", allowDrop);
destino.addEventListener("drop", drop);