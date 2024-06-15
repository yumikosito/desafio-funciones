let colorSave=undefined

function agregarElemento1() {
  contenedor = document.getElementById("contenedor1");
  nuevoElemento = document.createElement("div");
  nuevoElemento.id = "key";
  nuevoElemento.style.width="200px"
  nuevoElemento.style.height="200px"
  nuevoElemento.style.border="2px solid black"
  nuevoElemento.style.backgroundColor="white"
  contenedor.appendChild(nuevoElemento)

}

function agregarElemento2() {
  contenedor2 = document.getElementById("contenedor2");
  nuevoElemento2 = document.createElement("div");
  nuevoElemento2.id = colorSave;
  nuevoElemento2.style.width="200px"
  nuevoElemento2.style.height="200px"
  nuevoElemento2.style.border="2px solid black"
  nuevoElemento2.style.backgroundColor="white"
  contenedor2.appendChild(nuevoElemento2)
}

agregarElemento1()
document.addEventListener('keydown', function (event) {
  if (event.key === "a" || event.key === "A") {
    colorSave="pink"
    nuevoElemento.style.backgroundColor=colorSave
  } else if (event.key === 's' || event.key === "S") {
    colorSave="orange"
    nuevoElemento.style.backgroundColor=colorSave
  } else if (event.key === "d"|| event.key === "D") {
    colorSave="skyblue"
    nuevoElemento.style.backgroundColor=colorSave
  }
  })
  document.addEventListener('keydown', function (event) {
    if (event.key === "q" || event.key === "Q") {
      colorSave="purple"
      agregarElemento2()
      nuevoElemento2.style.backgroundColor=colorSave
    } else if (event.key === 'w' || event.key === "W") {
      colorSave="gray"
      agregarElemento2()
      nuevoElemento2.style.backgroundColor=colorSave
    } else if (event.key === "e"|| event.key === "E") {
      colorSave="brown"
      agregarElemento2()
      nuevoElemento2.style.backgroundColor=colorSave
    }
    })