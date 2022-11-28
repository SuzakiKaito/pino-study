const thumb =document.getElementById("thumb")
let overlay = document.querySelector(".overlay")

console.log(overlay.classList);

thumb.onclick = function(){
  console.log("click")
  overlay.classList.remove("hidden")
}
overlay.onclick = function(){
  console.log("click");
  overlay.classList.add("hidden")
}

