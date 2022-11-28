document.getElementById("txt").addEventListener("keypress",function(event){
  if(event.key ==="Enter"){
    send()
    document.getElementById("txt").value=null
  }
})

    document.getElementById("text").addEventListener("click",function(e){
      send()
      document.getElementById("txt").value=null
    })


function send(){
  let text = document.getElementById("txt").value;
  let width = document.documentElement.clientWidth-200;
  let height = document.documentElement.clientHeight-200;
  let rWidth = Math.random()*(width-10)+10;
  let rHeight = Math.random()*(height-20)+20;
  let style =  `left:${rWidth}px; top:${rHeight}px;`;

  let element = document.createElement("div");
  let eleText = document.createTextNode(text);
  element.appendChild(eleText)
  element.setAttribute("class","chat")
  element.setAttribute("style",style)

}