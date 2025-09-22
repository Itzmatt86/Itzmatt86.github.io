$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
  //toggleGrid();

    // TODO 2 - Create Platforms
createPlatform(500, 0, 1, 800,) //Invis Wall in mid
           //  x     y    w   h
createPlatform(400, 700, 100, 100,)


    // TODO 3 - Create Collectables
//createCollectable("name", xPos, yPos, GravityNum, BounceNum)
createCollectable("database", 100, 0, 0.1, 1)
createCollectable("database", 200, 0, 0.1, 1)
createCollectable("database", 300, 0, 0.1, 1)

    
    // TODO 4 - Create Cannons
createCannon("top", 300, 1000);
createCannon("left", 400, 2000);

    

 
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});


   var bgm = new Audio("14 My Heart Will Go On.mp3"); // replace with the actual path to your mp3
bgm.loop = true; // keeps playing in a loop
bgm.volume = 1; // optional: volume between 0.0 and 1.0

window.playAudio = function () {
  if (bgm.paused) {
    bgm.play();
  } else {
    bgm.pause();
  }
};

// Music to not be mp3