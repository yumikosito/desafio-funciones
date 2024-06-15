const ele = document.getElementById("ele1")

function cambio(color="green"){
    ele.style.backgroundColor = color
}

ele.addEventListener("click", function(){
  ele.style.backgroundColor = "yellow"
})

