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

    createPlatform(
      100,
      700,
      10,
      50,
      "black",
      0,
      canvas.width,
      0,
      0,
      canvas.height,
      2,
    );
createPlatform(150, 650, 12, 60, "black");
createPlatform(275, 540, 14, 55, "black");
createPlatform(410, 430, 10, 50, "black");
createPlatform(545, 320, 12, 45, "black");
createPlatform(680, 210, 11, 50, "black");

// TODO 3 - Create Collectables
//createCollectable("name", xPos, yPos, gravity, bounce)
createCollectable("database", 160, 120, 0.15, 0.9, 0, 900, 1);
createCollectable("database", 295, 140, 0.1, 1);
createCollectable("database", 420, 110, 0.12, 0.95);
createCollectable("database", 560, 130, 0.1, 1);
createCollectable("database", 690, 115, 0.13, 0.9);

// TODO 4 - Create Cannons
//createCannon("top / right / bottom / left", position, Speed);
createCannon("top", 220, 2500);
createCannon("top", 340, 1200);
createCannon("top", 470, 900);
createCannon("top", 610, 1400);
createCannon("top", 740, 1100);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
