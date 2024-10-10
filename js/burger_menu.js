const nav = document.querySelector("#pags");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () =>{
    nav.classList.add("visual");
})

cerrar.addEventListener("click", () =>{
    nav.classList.remove("visual");
})