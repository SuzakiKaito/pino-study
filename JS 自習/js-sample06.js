const btnA = document.getElementById("btnA")
const btnB = document.getElementById("btnB")


// btnA.addEventListener('click',function(){
//   changeBg('tomato');
//   // document.body.style.backgroundColor = 'tomato';
// })
// btnB.addEventListener('click',function(){
//   changeBg('skyblue');
//   // console.log("zaikoB");
//   // document.body.style.backgroundColor = 'skyblue';
// })

const btn = document.querySelectorAll(".btn");
for(let i=0; i<btn.length; i++){
  btn[i].onclick = function(evt){
    console.dir(evt.target.dataset.color);
    const color = evt.target.dataset.color;
    changeBg(color);
  }
}


function changeBg(value){
  console.log(value);
  document.body.style.backgroundColor = value;
}