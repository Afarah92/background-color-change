const colorbtn =  
document.getElementById("Colorbtn");


  const Body = 
document.getElementById("body");


const color = ['red', 'green', 'black','purple','orange','Maroon','MediumAquamarine', 'Navy','Bisque','BlanchedAlmond','CornflowerBlue','DarkOliveGreen','DarkRed'];

colorbtn.addEventListener("click",change);

function change ()
 {
  //body.style.backgroundColor = color [0] ;


let random = Math.floor(Math.random()*color.length);
body.style.backgroundColor = color[random];
   
   };