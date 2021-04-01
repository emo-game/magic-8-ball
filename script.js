
// let CURRENT_SEQ = null

// function Shake(options) {
//     //feature detect
//     this.hasDeviceMotion = 'ondevicemotion' in window;

//     this.options = {
//         threshold: 15, //default velocity threshold for shake to register
//         timeout: 1000 //default interval between events
//     };
  

// }
// var myShakeEvent = new Shake({
//     threshold: 15, // optional shake strength threshold
//     timeout: 1000 // optional, determines the frequency of event generation
// });

// myShakeEvent.start();

// window.addEventListener('shake', shakeEventDidOccur, false);





// //function to call when shake occurs

// function shakeEventDidOccur () {
   
  

//     console.log("shake ya booty man!");

// }

var x, y, z;
var px, py, pz; // p = precedent
var dispo = true;
var shaked = false;

function setup(){
    let div = createDiv('./img/Insaissables-bitmap.png');
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
    if(shaked == true){
        // il se passe un tas de choses géniales
    let img = createImg('./img/Insaissables-bitmap.png');
    img.position(0, -10);
    //changer l'image
}
        shaked = false;
        dispo = true;


    }



function shakeTrue() {
    x = accelerationX;
    y = accelerationY;
    z = accelerationZ;
    
    //console.log(dist(x, y, z, px, py, pz));

    if(dist(x, y, z, px, py, pz) > 20 && dispo == true){
        console.log("shake it shake it up");
        shaked = true;
        dispo = false;
    }


    px = x;
    py = y;
    pz = z;
}