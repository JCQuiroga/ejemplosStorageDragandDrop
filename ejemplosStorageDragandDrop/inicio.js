if (sessionStorage.getItem("nombre")) {
    location.replace("ejDragandDrop.html");
}

function login() {
    if (document.getElementById("txtNom").value == "") {
        alert("nombre vacio");
        return;
    }

    sessionStorage.setItem("nombre", document.getElementById("txtNom").value);
    location.replace("ejDragandDrop.html");
}

document.getElementById("btnOk").addEventListener("click", login);