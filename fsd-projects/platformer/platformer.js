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
    toggleGrid();


    
createPlatform(100, 700, 10, 50, "black", 0, canvas.width, 0, 0, canvas.height, 2);    createPlatform(200, 600, 10, 50, "black");
    createPlatform(300, 500, 10, 50, "black");
    createPlatform(400, 400, 10, 50, "black");
    createPlatform(500, 300, 10, 50, "black");
    createPlatform(600, 200, 10, 50, "black");


    // TODO 3 - Create Collectables
    //createCollectable("name", xPos, yPos, gravity, bounce)


createCollectable("database", 180, 100, 0.1, 1, 0, 1000, 1);
createCollectable("database", 280, 100, 0.1, 1);
createCollectable("database", 380, 100, 0.1, 1);
createCollectable("database", 480, 100, 0.1, 1);
createCollectable("database", 580, 100, 0.1, 1);    

    // TODO 4 - Create Cannons
//createCannon("top / right / bottom / left", position, Speed);
createCannon("top", 259, 3000);
createCannon("top", 359, 1000);
createCannon("top", 459, 1000);
createCannon("top", 559, 1000);
createCannon("top", 659, 1000);

    //random timer on cannonballs
    //random stats on collectables
    //Change hallebot / find sprite sheet
    //moving platforms
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
