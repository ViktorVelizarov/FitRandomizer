const canvas1 = document.querySelector("#canvasOne");
const cnx1 = canvas1.getContext("2d"); 

const canvas2 = document.querySelector("#canvasTwo");
const cnx2 = canvas2.getContext("2d"); 

const canvas3 = document.querySelector("#canvasThree");
const cnx3 = canvas3.getContext("2d"); 
let img = document.getElementById("defaultIcon");

//const mainCanvas = document.querySelector("#mainBoard")
//const cnx = mainCanvas.getContext("2d"); 

cnx2.drawImage(img, 0, 0, 200, 200);
cnx3.drawImage(img, 0, 0, 200, 200);
const button = document.querySelector("#generateButton")

button.addEventListener("click", generateFit);

function generateFit()
{
    console.log("click");
    cnx1.drawImage(img, 0, 0, 200, 200);
}



