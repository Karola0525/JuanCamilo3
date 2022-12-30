var matachito,guardarmatachito
var fondo,guardarfondo




function preload(){ //RECURSOS
guardarfondo = loadImage("path.png")
guardarmatachito =loadAnimation ("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png");



}




function setup(){
  createCanvas(300,500)

fondo =   createSprite(150,500)
fondo.addImage("fondo",guardarfondo)
fondo.velocityY = 5

matachito = createSprite(150,400,30,30)
matachito.addAnimation("movimineto",guardarmatachito)


}


function draw() {
background("red")

if (fondo.y>400){
  fondo.y=height/2
}











  
  drawSprites();
}
