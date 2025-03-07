// Target class (position and width)
class Target
{
  constructor(x, y, w, l, id)
  {
    this.x      = x - w*0.25 - w/2;
    this.y      = y-w/2;
    this.width  = w;
    this.label  = l;
    this.id     = id;
    this.click = false;
  }
  
  // Checks if a mouse click took place
  // within the target
  clicked(mouse_x, mouse_y)
  {
    if (mouse_x > this.x && mouse_x < this.x + this.width*1.3 && mouse_y > this.y && mouse_y < this.y + this.width*0.85) {
      return true;
    }
  }
  
  // Draws the target (i.e., a circle)
  // and its label
  draw(id)
  {
    // Draw target
    //fill(color(155,155,155));
    // I want to draw the id of the target too   
    //if (this.label.includes(" ")) {
    //  fill(color(255, 255, 255));
    //  rect(this.x - (this.width+4)/2, this.y - (this.width+4)/2, this.width+4);
    //}
    if (id < 27) {
      fill(color(255,20,0)); // Roxo escuro
    } else if (id < 38) {
      fill(color(255, 102, 0)); // Laranja claro
    } else if (id < 41) {
      fill(color(167,191,30)); // Azul claro
    } else if (id < 50) {
      fill(color(0, 158, 0)); // Verde claro
    } else if (id < 51) {
      fill(color(153,51,153)); // Amarelo
    } else if (id < 52) {
      fill(color(205, 70, 0)); // Lilás
    } else if (id < 56) {
      fill(color(18,10,193)); // Vermelho 
    } else if (id < 69) {
      fill(color(255, 20, 147)); // Rosa claro
    } else if (id < 79) {
      fill(color(204, 0, 204)); // Azul escuro
    } else if (id == 79) {
      fill(color(4,84,184)); // Laranja escuro
    }
    
    
    if(this.click == true){
      stroke(255);
      strokeWeight(3);
      rect(this.x, this.y, this.width*1.3, this.width*0.85, 7);
      strokeWeight(0);
      stroke(0);
      strokeWeight(2.2);
    }
    else{
      stroke(0);
      strokeWeight(2.2);
      rect(this.x, this.y, this.width*1.3, this.width*0.85, 7);
    }
    console.log(this.width);
      // Draw label
    textFont("Segoe UI Emoji", 18*this.width/82.681);
    fill(color(255, 255, 255));
    textAlign(CENTER);
    text(this.label, this.x + this.width/2 + this.width*0.15, this.y + this.width/2+ this.width*0.2);
    
    textFont("Segoe UI Semibold", 28*this.width/82.681);
    fill(color(255, 255, 255));
    textAlign(CENTER);
    // Draw the original text
    text(this.label.substring(0, 3), this.x + this.width/2+ this.width*0.15, this.y + this.width/2 - this.width*0.15);
  }
}