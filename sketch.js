var vaqueroImg,vaquero;
var forasteroImg,forastero;
var fondoImg, fondo;
var balaImg,bala;

function preload(){

forasteroImg = loadImage("forastero.png");  
fondoImg = loadImage("fondo.jpeg");
vaqueroImg = loadImage("vaquero.png");
  balaImg = loadImage("arrow.png");
  sonido = loadSound("Dis.mp3");
  musica = loadSound("Mus.mp3")
  explocion = loadSound("Ex.mp3")
}

function setup() {
  createCanvas(1800,850);
//crea el fondo
fondo = createSprite(300,300);
fondo.addImage("fondo",fondoImg); 
fondo.scale =5;  
  
 
//crea a el vaquero
vaquero = createSprite(1330,820,20,50);
vaquero.addImage("vaquero",vaqueroImg);
vaquero.scale = 0.05;  
  
  
//crea a el forasyero
forastero = createSprite(500,820,20,50);
forastero.addImage("forastero",forasteroImg);
forastero.scale = 0.09;
  
  
//crea las paredes
a1 = createSprite(900,750,1000,20);
a2 = createSprite(1600,770,30,30);
a3 = createSprite(200,780,30,30);
a4 = createSprite(1600,600,30,30);
a5 = createSprite(200,600,30,30);
a6 = createSprite(900,520,1000,20);
a7 = createSprite(1600,440,30,30);
a8 = createSprite(200,440,30,30);
a9 = createSprite(900,320,1000,20);
a10 = createSprite(1650,280,30,30);
a11 = createSprite(150,280,30,30);
a12 = createSprite(400,180,20,300);
a13 = createSprite(1400,180,20,300);
a14 = createSprite(1500,200,40,40);
a15 = createSprite(200,1300,30,30);
a16 = createSprite(300,200,40,40);
a1.shapeColor = "skyblue";
a2.shapeColor = "skyblue";
a3.shapeColor = "skyblue";
a4.shapeColor = "skyblue";
a5.shapeColor = "skyblue";
a6.shapeColor = "skyblue";
a7.shapeColor = "skyblue";
a8.shapeColor = "skyblue";
a9.shapeColor = "skyblue";
a10.shapeColor = "skyblue";
a11.shapeColor = "skyblue";
a12.shapeColor = "skyblue";
a13.shapeColor = "skyblue";
a14.shapeColor = "skyblue";
a15.shapeColor = "skyblue";
a16.shapeColor = "skyblue";
  
  
//crea el suelo
ground = createSprite(500,855,10000,20);
ground.shapeColor = "skyblue";
  

//crea el sonido
  musica.loop();
  
  
//crea los grupos
balas2g=new Group();
balasg=new Group(); 
}

function draw() {
  
  background("lightgreen");
 
  


  
  if(keyDown("up")) {
        vaquero.y = vaquero.y-16;
   
    
    
}
  
  
if(keyDown("left")) {
        vaquero.x = vaquero.x-9;
}
  if(keyDown("right")) {
        vaquero.x = vaquero.x+9;
}
  
  vaquero.velocityY = vaquero.velocityY + 0.6
  forastero.velocityY = forastero.velocityY + 0.6
  vaquero.collide(ground);
  forastero.collide(ground);
  vaquero.collide(a1);
  forastero.collide(a1);
  vaquero.collide(a2);
  forastero.collide(a2);
  vaquero.collide(a3);
  forastero.collide(a3);
  vaquero.collide(a4);
  forastero.collide(a4);
  vaquero.collide(a5);
  forastero.collide(a5);
  vaquero.collide(a6);
  forastero.collide(a6);
  vaquero.collide(a7);
  forastero.collide(a7);
  vaquero.collide(a8);
  forastero.collide(a8);
  vaquero.collide(a9);
  forastero.collide(a9);
  vaquero.collide(a10);
  forastero.collide(a10);
  vaquero.collide(a11);
  forastero.collide(a11);
  vaquero.collide(a12);
  forastero.collide(a12);
    vaquero.collide(a13);
  forastero.collide(a13);
    vaquero.collide(a14);
  forastero.collide(a14);
    vaquero.collide(a15);
  forastero.collide(a15);
      vaquero.collide(a16);
  forastero.collide(a16);
  forastero.collide(vaquero);
if(balas2g.isTouching(vaquero)) {
       vaquero.destroy();
      vaquero.y = -100000;
    }
  if(balasg.isTouching(forastero)) {
       forastero.destroy();
    forastero.y = -100000;
    }
   if(balasg.isTouching(balas2g)) {
       balasg.destroyEach();
  balas2g.destroyEach();
    } 
  if(keyDown("w")) {
        forastero.y = forastero.y-16;
}
if(keyDown("a")) {
        forastero.x = forastero.x-9;
}
  if(keyDown("d")) {
        forastero.x = forastero.x+9;
}

  if ((keyDown("k") && frameCount%10 ===0)|| ((touches.length>0) && frameCount%10 ===0) ){
    createBalas(); 
  }

  if (keyDown("q") && frameCount%10 === 0) {
    createBalas2(); 
  }

//crea los sprites
drawSprites();
  
  
//crea el texto
textSize(20);
fill("black");
text("VAQUERO:FLECHAS Y K",10,20);
text("FORASTERO:W A D Y Q",10,40);
}

//crea las balas
 function createBalas() {
  var balas= createSprite(100, 100, 60, 10);
  balas.addImage(balaImg);
  balas.x = vaquero.x;
  balas.y = vaquero.y;
  balas.velocityX = -30;
  balas.scale = 0.1;   
   balas.lifetime = 55;
  balasg.add(balas);
}
 function createBalas2() {
  var balas2= createSprite(100, 100, 60, 10);
  balas2.addImage(balaImg);
  balas2.x = forastero.x;
  balas2.y = forastero.y;
  balas2.velocityX = +30;
  balas2.scale = 0.1;
   balas2.lifetime = 55;
  balas2g.add(balas2);
}

