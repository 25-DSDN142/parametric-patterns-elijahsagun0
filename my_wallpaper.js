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
  pWallpaper.grid_settings.row_offset  = 0;
}


function wallpaper_background() {
  background(239, 241, 243);
}

let pos_x = 60;
let pos_y = 100;
petal_gap = 20;
petal_x = 60;
petal_y = 20;

function my_symbol() { // do not rename
//  this function. Treat this similarly to a Draw function
  noStroke();
  fill(15, 113, 115); 
  rect(0,0,100,100);
  
  fill(206, 229, 242);
  rect(0, 100, 100, 100);
  rect(100,0,100,100);
  ellipse(50,pos_y, 100, 100);
 
  fill(15, 113, 115);
  rect(100, 100, 100, 100);

  fill(206, 229, 242);
  ellipse(150,pos_y, 100, 100);
 
  //fill(15, 113, 115);
  //drawFlower(pos_x, pos_y);
}

function drawFlower(x, y) {
  fill(0, 128, 255); //light blue
  ellipse(x, y, petal_x, petal_y);
  ellipse(x+petal_gap+petal_x, y, petal_x, petal_y);
}
