var x, y, z; //coordonnées accelerometre
var px, py, pz; // p = precedent
var dispo; //shake disponible
var shaked;
var imgIndex;
var nombreImages = 2;
let androide, naif, sorciere;

function setup(){
  x = accelerationX;
  y = accelerationY;
  z = accelerationZ;
  px = x;
  py = y;
  pz = z;
  dispo = true;
  shaked = false;

  androide = select("#androide");
  naif = select("#naif");
  sorciere = select("#sorciere");
  console.log(androide);
  console.log(naif);

}

function draw(){

    shakeTrue();

    if(shaked == true){
        // il se passe un tas de choses géniales
        
        console.log("the shaking occured!");
        imgIndex = floor(random(nombreImages));
        // imgIndex = 0;

        if (imgIndex == 0){
            console.log("androide visible");
            androide.style('visibility', 'visible');
            
        } else if (imgIndex == 1){
            console.log("naif visible");
            naif.style('visibility', 'visible');

        

    } else if (imgIndex == 3){
        console.log("sorciere visible");
        sorciere.style('visibility', 'visible');

    }
}

        shaked = false;
        dispo = true;
    }       


// function mouseClicked(){

//     if(dispo == true){
//         shaked = true;
//         dispo = false;
//         console.log("click ! ta mère dans un clic clac");
//     }

// }


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