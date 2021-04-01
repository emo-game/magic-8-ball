

var x, y, z;
var px, py, pz; // p = precedent

function setup(){
    let div = createDiv("sequence img");
    div.id('seq-img')
    //createCanvas(windowWidth, windowHeight, WEBGL);
  x = accelerationX;
  y = accelerationY;
  z = accelerationZ;
  px = x;
  py = y;
  pz = z;
  
}

function draw(){
    shakeTrue();

}

function shakeTrue() {
    x = accelerationX;
    y = accelerationY;
    z = accelerationZ;
    
    console.log(dist(x, y, z, px, py, pz));

    if(dist(x, y, z, px, py, pz) > 20){
        console.log("shake it shake it up");
    }


    px = x;
    py = y;
    pz = z;
}