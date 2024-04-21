
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


let image1_up, image2_over;
let snd1,snd2;
// var duration;
// var  slideWidth = 500;

// global manager object
var mgr;

// define your p5.play sprites that you want to use in more that 1 scene.
var chara;

var body;

var wShirt, wAcc, wSkirt;

let salon;


clothes = [];

function preload() {
    // sound should be loaded so its available for all places.
   snd1 = loadSound("assets/violin.wav");
   snd2 = loadSound("assets/calm.wav"); 
    snd3 = loadSound("assets/ending.wav");
    salon = loadSound('assets/salon.mp3');
    //0-3 acc, 4-6 shirt, 7-9 skirt, 10-11 socks, 12-13 shoes
    clothes[9] = loadImage('assets/apron.png');
    clothes[0] = loadImage('assets/bow.png');
    clothes[1] = loadImage('assets/headbow.png');
    clothes[2] = loadImage('assets/headdress.png');
    clothes[3] = loadImage('assets/necklace.png');
    clothes[4] = loadImage('assets/longsleeve.png');
    clothes[5] = loadImage('assets/shortsleeve.png');
    clothes[6] = loadImage('assets/turtleneck.png');
    clothes[7] = loadImage('assets/pinkskirt.png');
    clothes[8] = loadImage('assets/whiteskirt.png');
    clothes[10] = loadImage('assets/socks.png');
    clothes[11] = loadImage('assets/stockings.png');
    clothes[12] = loadImage('assets/teaparty.png');
    clothes[13] = loadImage('assets/maryjane.png');
    clothes[14] = loadImage('assets/blank.png');

    body = loadImage('assets/body.png');




}

function setup() {
    createCanvas(900, 700);
    //console.log(hell);
    mgr = new SceneManager();

    //chara = createSprite(0, 0);
    //chara.addAnimation("normal", "assets/body.png");  // first image, and last image
    //chara.addAnimation("stand", "assets/r_001.png",  "assets/r_009.png"); // first image, and last image

     // make the sprite invisible until you need it.
    //chara.visible = false;

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (intro);
    mgr.addScene (main);
    mgr.addScene (help);
    mgr.addScene (finish);
    mgr.showNextScene();



}

function draw()
{

    // passthe current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( intro );
            break;
        case '2':
            mgr.showScene( main );
            break;
        case '3':
            mgr.showScene( help );
            break;
        case '4':
            mgr.showScene( finish );
            break;
        case 'h':
            mgr.showScene( help );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
