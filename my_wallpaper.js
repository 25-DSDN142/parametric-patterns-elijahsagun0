//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

let rect_w = 30;
let rect_h = 200;
let rect_x = 0;
let rect_y = 0;
let gap = 50;

function my_symbol() { // do not rename
//  this function. Treat this similarly to a Draw function
  rect(rect_x, rect_y, rect_w, rect_h);
  rect(rect_x+gap, rect_y, rect_w, rect_h);
  rect(rect_x+(gap*2), rect_y, rect_w, rect_h);
  rect(rect_x+(gap*3), rect_y, rect_w, rect_h);
  rect(rect_x+(gap*4), rect_y, rect_w, rect_h);
  drawBear(0, 0, 55); // calls the function to draw the bear
  drawBear(90, 90, 60); 
}

function drawBear(xPos, yPos, bear = 60, bearEarEye = bear/2, bearPupil= bear/3) {
  translate(xPos, yPos);
  
  if (bear >= 60) {
  stroke(41, 30, 24);
  fill(168, 134, 113); 
  } else {
  fill(41, 30, 24); 
  }

  ellipse(60, 60, bear,bear);
  ellipse(25, 30, bearEarEye, bearEarEye);
  ellipse(95, 30, bearEarEye, bearEarEye);

  fill (0);
  ellipse(70, 60, bearEarEye, bearEarEye);
  ellipse(35, 60, bearEarEye, bearEarEye);

  fill (255);
  ellipse(60, 60, bearPupil, bearPupil);
  ellipse(25, 60, bearPupil, bearPupil);
}
