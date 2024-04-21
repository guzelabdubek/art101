
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================



////////////////////////////// 1 /////////////////
function intro()  {
    var textX;
    var textY;
    //var loy= 0;  // exists as data saved when in the splash scene
    let btnevent1 =false;
    let btnevent2 =false;

    let back;

    // scene1.setup
    this.setup = function() {
      console.log("We are at setup for intro");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      outputVolume(.70);  // turn down the volume.
      back = loadImage("assets/title.jpg");
    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
      if(salon.isPlaying()) {
        salon.pause();
       }
      
      if ( snd2.isPlaying() ) {
        snd2.pause();
       }
        console.log("We are at entering intro");
        background("grey");
        textAlign(CENTER);
        textSize(30);
        noStroke();

        // reset or disable the other scenes and their stuff
        // turn off the other scene stuff
        snd1.stop();
        // make sure ghost is gone from this scene
        //chara.visible = false;
      

    }


    this.draw = function()
    {
      background("lightpink");
      // this is the draw function for all p5.play commands
     
      image(back, 50,100, back.width*1.5,back.height*1.5);
      
        push();
        
        translate(width-250,height/2-200);
        //fill(10,200,160);
        fill(0);
        textSize(50);
        text("Dress-up Time!",0,0);
        //ellipse(0,0,80,140);


        //if (loy > height-140) {
          //loy = 0;
        //}
         //loy++;



        pop();


    
   
                             // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
      btnevent1 = checkButtonPress("Help",width-290,height/2,100,40,color(220,100,100),color(100),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        this.sceneManager.showScene( help );
      }
                            // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
      btnevent2 = checkButtonPress("Start Here",width-300,height/2-100,120,40,color(120,180,100),color(100),color(250));
      if (btnevent2) {   // main or next scene
        btnevent2 = false;
         playshortsound();
         this.sceneManager.showNextScene();
      }

    }

    this.keyPressed = function() {
        fill(0,255,0);
        text(keyCode, textX, textY += 10);

        if ( textY > height )  {
            textX += 20;
            textY = 0;
        }
    }

    this.mousePressed = function() {

     
    }
}

///////////////////////  2  ////////////////////////

function main()  {

   this.y = 0;
    // var y = 0;
    this.lox = 50;
    // var lox = 50;

   this.loy = 120;
    // var loy = 120;

   let btnevent1 = false;


   let currentAcc, currentShirt, currentSkirt, currentSocks, currentShoes;

   let menuAcc, menuShirt, menuSkirt, menuSocks, menuShoe, menuMain;

   let accButton, shirtButton, skirtButton, shoesButton, socksButton, mainButton;

   let hd, b, hb, t, blankAcc, blankShirt, short, long, blankSkirt, apron, pink, white, blankSock, sock, stock, blankShoe, mj, tp;

   let textMode;

   let saveButton;

   let back;



  this.setup = function() {
    //snd2.pause();
      console.log("We are at setup for main");
      // make sure ghost is gone from this scene
      //chara.visible = false;


      saveButton = new Clickable();
      saveButton.locate(width/4-10,height-70);
      saveButton.width = 100;
      saveButton.height = 40;
      saveButton.upcolor = (220,100,100);
      saveButton.dncolor = 250;
      saveButton.ovcolor = 100;
      saveButton.textSize = 18;
      saveButton.onPress = function() {
        saveFrames('image-0', 'png', 1, 1);
      }
      saveButton.text = "Save Picture";


      //currentAcc, currentShirt, currentSkirt, currentSocks, currentShoes = clothes[14];


      accButton = new Clickable();
      accButton.locate(3*width/5+5,height/4+10);
      accButton.text = "Accessory";
      accButton.onPress = function() {
        console.log("Button pressed");
        menuAcc = true;
        menuMain = false;
      }
      shirtButton = new Clickable();
      shirtButton.locate(3*width/5+155,height/4+10);
      shirtButton.text = "Shirt";
      shirtButton.onPress = function() {
        menuShirt = true;
        menuMain = false;
      }
      skirtButton = new Clickable();
      skirtButton.locate(3*width/5+5,height/4+110);
      skirtButton.text = "Skirt";
      skirtButton.onPress = function() {
        menuSkirt = true;
        menuMain = false;
      }
      socksButton = new Clickable();
      socksButton.locate(3*width/5+155,height/4+110);
      socksButton.text = "Socks";
      socksButton.onPress = function() {
        menuSocks = true;
        menuMain = false;
      }
      shoesButton = new Clickable();
      shoesButton.locate(3*width/5+5,height/4+210);
      shoesButton.text = "Shoes";
      shoesButton.onPress = function() {
        menuShoes = true;
        menuMain = false;
      }

      mainButton = new Clickable();
      mainButton.locate(3*width/5+155,height/4+210);
      mainButton.text = "Main";
      mainButton.onPress = function() {
        menuAcc = false;
        menuShirt = false;
        menuSkirt  = false;
        menuSocks  = false;
        menuShoes = false;
        menuMain = true;
      }

      //blanks
      blankSkirt = new Clickable();
      blankSkirt.locate(3*width/5+5,height/4+10);
      blankSkirt.text = "None";
      blankSkirt.image = clothes[14];
      blankSkirt.fitImage = true;
      blankSkirt.imageScale = 7;
      blankSkirt.onPress = function() {
        currentSkirt = clothes[14];
        if (textMode) {
          
        }
      }

      blankShirt = new Clickable();
      blankShirt.locate(3*width/5+5,height/4+10);
      blankShirt.text = "None";
      blankShirt.image = clothes[14];
      blankShirt.fitImage = true;
      blankShirt.imageScale = 7;
      blankShirt.onPress = function() {
        currentShirt = clothes[14];
        if (textMode) {
          
        }
      }

      blankSock = new Clickable();
      blankSock.locate(3*width/5+5,height/4+10);
      blankSock.text = "None";
      blankSock.image = clothes[14];
      blankSock.fitImage = true;
      blankSock.imageScale = 7;
      blankSock.onPress = function() {
        currentSocks = clothes[14];
        if (textMode) {
          
        }
      }

      blankShoe = new Clickable();
      blankShoe.locate(3*width/5+5,height/4+10);
      blankShoe.text = "None";
      blankShoe.image = clothes[14];
      blankShoe.fitImage = true;
      blankShoe.imageScale = 7;
      blankShoe.onPress = function() {
        currentShoes = clothes[14];
        if (textMode) {
          
        }
      }

      blankAcc = new Clickable();
      blankAcc.locate(3*width/5+5,height/4+10);
      blankAcc.text = "None";
      blankAcc.image = clothes[14];
      blankAcc.fitImage = true;
      blankAcc.imageScale = 7;
      blankAcc.onPress = function() {
        currentAcc = clothes[14];
        if (textMode) {
          
        }
      }

      //acc
      hd = new Clickable();
      hd.locate(3*width/5+155,height/4+10);
      hd.text = "Headdress";
      //hd.image = clothes[2];
      //hd.fitImage = true;
      //hd.imageScale = 7;
      hd.onPress = function() {
        wAcc = true;
        currentAcc = clothes[2];
        if (textMode) {
          
        }
      }

      b = new Clickable();
      b.locate(3*width/5+5,height/4+110);
      b.text = "Small Bow";
      //b.image = clothes[0];
      //b.fitImage = true;
      //b.imageScale = 7;
      b.onPress = function() {
        currentAcc = clothes[0];
        if (textMode) {
          
        }
      }

      hb = new Clickable();
      hb.locate(3*width/5+155,height/4+110);
      hb.text = "Headbow";
      //hb.image = clothes[1];
      //hb.fitImage = true;
      //hb.imageScale = 7;
      hb.onPress = function() {
        currentAcc = clothes[1];
        if (textMode) {
          
        }
      }

      //sock
      sock = new Clickable();
      sock.locate(3*width/5+155,height/4+10);
      sock.text = "Under the\nKnee Socks";
      //sock.image = clothes[10];
      //sock.fitImage = true;
      //sock.imageScale = 7;
      sock.onPress = function() {
        currentSocks = clothes[10];
        if (textMode) {
          
        }
      }
      
      stock = new Clickable();
      stock.locate(3*width/5+5,height/4+110);
      stock.text = "Stockings";
      // stock.image = clothes[11];
      // stock.fitImage = true;
      // stock.imageScale = 7;
      stock.onPress = function() {
        currentSocks = clothes[11];
        if (textMode) {
          
        }
      }

      //shoe
      mj = new Clickable();
      mj.locate(3*width/5+155,height/4+10);
      mj.text = "Mary Janes";
      // mj.image = clothes[13];
      // mj.fitImage = true;
      // mj.imageScale = 7;
      mj.onPress = function() {
        currentShoes = clothes[13];
        if (textMode) {
          
        }
      }

      tp = new Clickable();
      tp.locate(3*width/5+5,height/4+110);
      tp.text = "Tea Parties";
      // tp.image = clothes[12];
      // tp.fitImage = true;
      // tp.imageScale = 7;
      tp.onPress = function() {
        currentShoes = clothes[12];
        if (textMode) {
          
        }
      }

      //skirt
      apron = new Clickable();
      apron.locate(3*width/5+155,height/4+10);
      apron.text = "Heart Apron";
      // apron.image = clothes[9];
      // apron.fitImage = true;
      // apron.imageScale = 7;
      apron.onPress = function() {
        currentSkirt = clothes[9];
        if (textMode) {
          
        }
      }

      white = new Clickable();
      white.locate(3*width/5+5,height/4+110);
      white.text = "White Skirt";
      // white.image = clothes[8];
      // white.fitImage = true;
      // white.imageScale = 7;
      white.onPress = function() {
        wSkirt = true;
        currentSkirt = clothes[8];
        if (textMode) {
          
        }
      }

      pink = new Clickable();
      pink.locate(3*width/5+155,height/4+110);
      pink.text = "Pink Skirt";
      // pink.image = clothes[7];
      // pink.fitImage = true;
      // pink.imageScale = 7;
      pink.onPress = function() {
        currentSkirt = clothes[7];
        if (textMode) {
          
        }
      }

      //shirt
      short = new Clickable();
      short.locate(3*width/5+155,height/4+10);
      short.text = "Short Sleeved\nBlouse";
      // short.image = clothes[5];
      // short.fitImage = true;
      // short.imageScale = 7;
      short.onPress = function() {
        wShirt = true;
        currentShirt = clothes[5];
        if (textMode) {
          
        }
      }

      long = new Clickable();
      long.locate(3*width/5+5,height/4+110);
      long.text = "Long Sleeved\nBlouse";
      // long.image = clothes[4];
      // long.fitImage = true;
      // long.imageScale = 7;
      long.onPress = function() {
        currentShirt = clothes[4];
        if (textMode) {
          
        }
      }

      t = new Clickable();
      t.locate(3*width/5+155,height/4+110);
      t.text = "Turtleneck";
      // t.image = clothes[6];
      // t.fitImage = true;
      // t.imageScale = 7;
      t.onPress = function() {
        currentShirt = clothes[6];
        if (textMode) {
          
        }
      }

      back = loadImage('assets/shop.png');

      
  }

  this.enter = function()
  {
    console.log("We are at entering main");
    //chara.position.x = 50;
    //chara.position.y = 80;
    //chara.position.x =  width/3;
    //chara.position.y =  height/2;
    //chara.visible = true;
    //chara.changeAnimation("normal");

    menuAcc =false;
    menuShirt=false;
    menuSkirt=false;
    menuSocks=false;
    menuShoe=false;
    menuMain=true;

    wShirt = false;
    wAcc= false;
    wSkirt= false;


    if ( !snd1.isPlaying() ) {
      snd1.play();
   }
   if (snd2.isPlaying()) {
    snd2.stop();
   }
   if(!salon.isPlaying()) {
    salon.play();
   }
   currentAcc = clothes[14];
   currentShirt = clothes[14];
   currentSkirt = clothes[14];
   currentSocks = clothes[14];
   currentShoes = clothes[14];

  }




    this.draw = function() {
      background("light yellow");
      // this is the draw function for all p5.play commands
      image(back,0,20);
      if(!salon.isPlaying()) {
        salon.play();
       }

      
      noStroke();
      //fill(100,50,20); //brown
      //ellipse(width/3,height/2,300,300);
      fill(150,120,130); //dull brown
      //rect(-5,height-190,width+5,190);
      fill(216,51,143); //pink
      rect(-5, -5, width+10, 25);
      rect(-5, height-80, width + 10, 105);
      rect(-5, -5, width/10, height+10);
      rect(width/2, -5, width/2 + 5, height +10);
      fill(250,250,170); //light yellow
      rect(width/2 + 50, height/5, width/2 - 100, 3*height/5);
      text("Closet", 3*width/4, height/6);


        //this.currentShirt, this.currentSkirt, this.currentSocks, this.currentShoes
    //chara.changeAnimation("normal");
      
    if (menuMain) {
      accButton.draw();
      shirtButton.draw();
      skirtButton.draw();
      socksButton.draw();
      shoesButton.draw();
    } else {
      mainButton.draw();
      if (menuAcc) {
        blankAcc.draw();
        hd.draw();
        b.draw();
        hb.draw();

      } else if (menuShirt) {
        blankShirt.draw();
        short.draw();
        long.draw();
        t.draw();

      } else if (menuSkirt) {
        blankSkirt.draw();
        apron.draw();
        pink.draw();
        white.draw();

      } else if (menuSocks) {
        blankSock.draw();
        sock.draw();
        stock.draw();

      } else { //shoes
        blankShoe.draw();
        mj.draw();
        tp.draw();

      }
    }
    

     //if ( chara.mouse.hovering() ) {
        //console.log("over");
        //chara.changeAnimation("stand");
        //chara.position.x += random(-5,5);
        //chara.position.y += random(-5,5);
        //snd2.play();  // lots of fast sound playing
        //this is causing demented sound playing
     //}
      
     //if (chara.mouse.pressing()) {
      //console.log("pressed");
           //if ( !snd2.isPlaying() ) {
              //snd2.play();
          //} else {
              //snd2.pause();

          //}

     //} 
     push();
     translate(30, 10);
     scale(1.2);
     image(body, 0,0);

     
     image(currentShirt,0,0);
      image(currentSocks, 0,0);
      image(currentAcc, 0,0);
      image(currentSkirt, 0,0);
      image(currentShoes, 0,0);
      pop();

     //clickable
     //saveButton.draw();

     //regular buttons

    // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPress("Help",width-150,height-70,100,40,color(220,100,100),color(100),color(250));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( help );
    }
    
    btnevent2 = checkButtonPress("Finish",width-150,height-120,100,40,color(220,100,100),color(100),color(250));  
    if (btnevent2) { // finish
      btnevent2 = false;
      this.sceneManager.showScene( finish );
    }
    push();
    translate(0, 200); //this exploits a glitch where if you translate clickables their original location will be where you press the button still.
    saveButton.draw();
    pop();

    btnevent3 = checkButtonPress("Save",width/4-10,height-70,100,40,color(220,100,100),color(100),color(250));  
    if (btnevent3) { // save, just for decoration since saveFrames here saves multiple instead of just one
      //saveFrames('image-0', 'png', 1, 1);
      btnevent3 = false;
    }


    }  //end

    this.mousePressed = function()
    {

    }


}



////////////////////////////// 3 /////////////////

function help() {
  let mainButton;

    this.setup = function()  {
      //snd2.pause();
        console.log("We are at setup for help");
        // access a different scene using the SceneManager
        mainButton = new Clickable();
        mainButton.text = "Main Menu";
        mainButton.onPress = function() {
        willReadFrequently = false;
        mgr.showScene(intro);
    }
    mainButton.locate(100,height-150);

    }

    this.enter = function()
    {
      if(salon.isPlaying()) {
        salon.pause();
       }
      if ( snd2.isPlaying() ) {
        snd2.pause();
       }
     console.log("We are at entering for help");
     //chara.visible = true;
     //chara.position.x = 100;
     //chara.position.y = 100;


    }

    this.draw = function() {
      background("lightyellow");
      // this is the draw function for all p5.play commands
      mainButton.draw();
     
      fill("black");
      textAlign(LEFT);
      textSize(25);
      text( "Create your own Lolita coordinate! \nLolita fashion is originated in Japan and is based on Roccoco and\nVictorian Fashion. This game is to simulate making your own outfit,\nor coordinate. This game is also based on the movie Kamikaze Girls,\nspecifically the protagonist Momoko's coordinates." ,50,70);
      text( "You can use keys 1 for the main menu, 2 for the dress-up screen,\n3 or h for the help screen, and 4 for the finish screen.\nPress on buttons in the closet to navigate your wardrobe\nand try on items. You can press Save to save an image of the screen\nand Finish to end the game.", 50, 250);
      text("If you try out enough clothing items, you might get a secret finish screen!  ", 50, 450);
      text("Music is Welcome to the Salon from Ghost Trick Phantom Detective.", 50, 650);

      

      // if ( chara.mouse.hovering() ) {
      //   console.log("over");
        //chara.changeAnimation("stand");
        //if ( snd1.isPlaying() ) {
          //snd1.pause();
       //}
        // ghosty.position.x += random(-4,4);
        // ghosty.position.y += random(-2,2);
      
    //  }  else {

      //chara.changeAnimation("normal");


    //  }
      

    //  if (chara.mouse.pressing()) {
    //        if ( !snd2.isPlaying() ) {
    //           snd2.play();
    //       } else {
    //           snd2.pause();

    //       }

    //    this.sceneManager.showScene( main );

    //  }  



        
    }

   

}

//4
function finish() { //need to add text and music
  var truck;
  var happy;
  var mainButton;
  this.setup = function() {
    console.log("We are at setup for finish");
    truck = loadImage("assets/truck.gif");
    happy = loadImage("assets/success.jpg");
    mainButton = new Clickable();
    mainButton.text = "Main Menu";
    mainButton.onPress = function() {
      willReadFrequently = false;
      mgr.showScene(intro);
    }
    mainButton.locate(100,height-150);
  }
  this.enter = function() {
    if(salon.isPlaying()) {
      salon.pause();
     }
    willReadFrequently = true;
    if ( snd2.isPlaying() ) {
      snd2.pause();
     }
     if ( snd1.isPlaying() ) {
      snd1.pause();
     }
     if ( snd3.isPlaying() ) {
      snd3.pause();
     } else {
      snd3.play();
     }
  }
  this.draw = function() {
    if (wSkirt&&wSkirt&&wAcc) {
      //hit by truck;
      image(truck, 0,0,truck.width*2.2, truck.height*2.2);
      fill(0);
      text("OH NO!!", 150, 100);

    } else {
      image(happy, -200,0,happy.width*1.25, happy.height*1.25);
      fill(0);
      text("Congrats on making\nyour first coordinate!", 200, 100);
    }
    mainButton.draw();
  }
  this.keyPressed = function() {

  }
}

//extra


function checkButtonPress(str,bx,by,boxW,boxH,upcolor,ovcolor,dncolor) {

  let btnc = "";
  let btnstate =false;

  // Test if the cursor is over the box
  if ( mouseX > bx - boxW &&
       mouseX < bx + boxW &&
       mouseY > by - boxH &&
       mouseY < by + boxH ) {
       overBox = true;

    if (!mouseIsPressed) {
      stroke(255);
      btnc = ovcolor;
      btnstate = false;
    } else {
      console.log(str + " pressed");
      stroke(255);
      btnc = dncolor;
      btnstate = true;
    }

  } else {
    stroke(255);
    btnc = upcolor;
    overBox = false;
  }

  push();
  translate(bx,by);
  fill(btnc);
  rect(0, 0, boxW, boxH,10); // draw the box

  fill(20);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  text (str,boxW/2,28);

    pop();

    return btnstate;

}



function playshortsound() {
  if ( !snd1.isPlaying() ) {
    snd1.play();
  }


}