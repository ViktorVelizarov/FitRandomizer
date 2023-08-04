const canvas1 = document.querySelector("#canvasOne");
const cnx1 = canvas1.getContext("2d"); 

const canvas2 = document.querySelector("#canvasTwo");
const cnx2 = canvas2.getContext("2d"); 

const canvas3 = document.querySelector("#canvasThree");
const cnx3 = canvas3.getContext("2d"); 
let img = document.getElementById("defaultIcon");
let shoesImage = document.getElementById("shoesImage");

//const mainCanvas = document.querySelector("#mainBoard")
//const cnx = mainCanvas.getContext("2d"); 
var shoeArray = new Array();
shoeArray[0] = new Image();
shoeArray[0].src = './images/shoes/J1Blue.webp';
shoeArray[1] = new Image();
shoeArray[1].src = './images/shoes/J1Red.webp';
shoeArray[2] = new Image();
shoeArray[2].src = './images/shoes/J4Black.jpg';
shoeArray[3] = new Image();
shoeArray[3].src = './images/shoes/J4Red.jpeg';
shoeArray[4] = new Image();
shoeArray[4].src = './images/shoes/J4White.webp';
shoeArray[5] = new Image();
shoeArray[5].src = './images/shoes/J4Yellow.jpg';
shoeArray[6] = new Image();
shoeArray[6].src = './images/shoes/J1Brown.webp';
shoeArray[7] = new Image();
shoeArray[7].src = './images/shoes/J4Cement.webp';
shoeArray[8] = new Image();
shoeArray[8].src = './images/shoes/BlackDunk.jpg';

var pantsArray = new Array();
pantsArray[0] = new Image();
pantsArray[0].src = './images/pants/CargoGrey.webp';
pantsArray[1] = new Image();
pantsArray[1].src = './images/pants/GreyTech.webp';
pantsArray[2] = new Image();
pantsArray[2].src = './images/pants/RedTech.webp';
//pantsArray[3] = new Image();
//pantsArray[3].src = './images/pants/J4Red.jpeg';
//pantsArray[4] = new Image();
//pantsArray[4].src = './images/pants/J4White.webp';
//pantsArray[5] = new Image();
//pantsArray[5].src = './images/pants/J4Yellow.jpg';


var shirtArray = new Array();
shirtArray[0] = new Image();
shirtArray[0].src = './images/shirt/BrownTech.webp';
shirtArray[1] = new Image();
shirtArray[1].src = './images/shirt/CactusJack.webp';
shirtArray[2] = new Image();
shirtArray[2].src = './images/shirt/GAP.avif';
shirtArray[3] = new Image();
shirtArray[3].src = './images/shirt/GreyTeck.jpg';
shirtArray[4] = new Image();
shirtArray[4].src = './images/shirt/Vamp.jpg';
shirtArray[5] = new Image();
shirtArray[5].src = './images/shirt/BlueJacket.png';
shirtArray[6] = new Image();
shirtArray[6].src = './images/shirt/TurkishHoodie.png';
shirtArray[7] = new Image();
shirtArray[7].src = './images/shirt/TurkishShirt1.png';
shirtArray[8] = new Image();
shirtArray[8].src = './images/shirt/TurkishShirt2.png';
shirtArray[9] = new Image();
shirtArray[9].src = './images/shirt/TurkishShirt3.png';
shirtArray[10] = new Image();
shirtArray[10].src = './images/shirt/TurkishShirt4.png';



cnx1.drawImage(img, 0, 0, 200, 200);
cnx2.drawImage(img, 0, 0, 200, 200);
cnx3.drawImage(img, 0, 0, 200, 200);
const button = document.querySelector("#generateButton")

button.addEventListener("click", generateFit);

function generateFit()
{
    console.log("click");
    const randomShirt = shirtArray[(Math.floor(Math.random() * shirtArray.length))];
    cnx1.drawImage(randomShirt, 0, 0, 200, 200);
    const randomPants = pantsArray[(Math.floor(Math.random() * pantsArray.length))];
    cnx2.drawImage(randomPants, 0, 0, 200, 200);
    const randomShoe = shoeArray[(Math.floor(Math.random() * shoeArray.length))];
    cnx3.drawImage(randomShoe, 0, 0, 200, 200);
}



