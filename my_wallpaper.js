//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;
let pos_x = 60;
let pos_y = 100;
let petal_gap = 20;
let petal_x = 60;
let petal_y = 20;
let bgShapes = 100;
let line_gap = 10;
let line_height = 200;
let line_width = 6;


function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;

}


function wallpaper_background() {
  background(239, 241, 243);
}


function my_symbol() { // do not rename
//  this function. Treat this similarly to a Draw function
  noStroke();
  fill(25, 42, 81); 
  rect(0,0,bgShapes, bgShapes);
  
  lines(pos_x, pos_y); 

  fill(206, 229, 242);
  rect(0, 100, bgShapes, bgShapes);
  rect(100,0,bgShapes, bgShapes);
  ellipse(50,pos_y, bgShapes, bgShapes);
 
  fill(25, 42, 81);
  rect(100, 100, bgShapes, bgShapes);

  lines(pos_x, pos_y);

  fill(206, 229, 242);
  ellipse(150,pos_y, bgShapes, bgShapes);
  
  drawFlower2(pos_x, pos_y);
  drawFlower(pos_x, pos_y);
}

function drawFlower(x, y) {
  if (petal_x > 50) {
    fill(0, 128, 255); //light blue
  } else {
    fill(25, 42, 81); //orange
  }
  ellipse(x, y, petal_x, petal_y);
  ellipse(x+petal_gap+petal_x, y, petal_x, petal_y);
  ellipse(100, y+petal_gap+petal_y, petal_y, petal_x);
  ellipse(100, 60, petal_y, petal_x);
}

function drawFlower2(x, y) {

  noStroke();
  fill(71, 160, 230); 
  ellipse(100, 100, 15, 15);
  stroke(0);
  strokeWeight(0.5);
  curve(100, 100, 100, 100, 150, 60, 200,200);
  curve(100, 100, 100, 100, 50, 60, 0, 200);

}

function lines(x,y) { 
  if (line_gap > 5) {
    fill(179, 221, 255);
  } else {
    fill(25, 42, 81);
  }
  rect(line_gap, 0, line_width, line_height);
  rect(line_gap*2, 0, line_width, line_height);
  rect(200-line_gap, 0, line_width, line_height);
  rect(200-(line_gap*2), 0, line_width, line_height);
}
  
