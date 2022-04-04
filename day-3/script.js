window.addEventListener('load', (event) => {
  let elem=document.getElementById('demo');
  elem.innerHTML='Hello Guys';

  elem=document.getElementsByClassName('spans');
  for(let i=0;i<elem.length;i++){
      elem[i].innerHTML='Span tag is here';
  }

  elem = document.getElementById("list");
  let y = elem.getElementsByTagName("li");
  for(let i=0;i<y.length;i++){
    y[i].innerHTML=`li - ${i}`;
  }
  elem = document.querySelectorAll("p.p");
  for(let i=0;i<elem.length;i++){
    elem[i].innerHTML=`p - ${i}`;
  }
  elem=document.getElementById("js-logo");
  elem.src = "images/js.png";
  elem.width=262;
  elem.height=262;
  elem=document.getElementById('date');
  elem.innerHTML="Date : " + Date();
  elem=document.getElementById('date-2');
  elem.innerHTML="Date : " + Date();
  elem.style.color="white";
  elem.style.backgroundColor="black";
  elem.style.padding=2;

});
function colorize(){
      document.getElementById('id-1').style.color = 'red' ;
}
function myMove() {
  let id = null;
  let elem = document.getElementById("animation");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}

function overed(obj) {
  obj.innerHTML = "Thank You";
}
function outed(obj) {
  obj.innerHTML = "Mouse Over Pls";
}