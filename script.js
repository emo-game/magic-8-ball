
let CURRENT_SEQ = null

  

var myShakeEvent = new Shake({
    threshold: 15, // optional shake strength threshold
    timeout: 1000 // optional, determines the frequency of event generation
});

myShakeEvent.start();

window.addEventListener('shake', shakeEventDidOccur, false);
document.addEventListener('click', () => nextSeq()) // DEBUG
function nextSeq () {
    if (CURRENT_SEQ) {
      CURRENT_SEQ.remove()
    }

//function to call when shake occurs
function shakeEventDidOccur () {

    //put your own code here etc.

        if (lastX > 30) {
            console.log("c bon bg")
            function imageFun() {
                var Image_Id = document.getElementById('getImage');
                if (Image_Id.src.match("./img/Insaissables-bitmap.png")) {
                    Image_Id.src = "./img/Insaissables.jpg";
                }
                else {
                    Image_Id.src = "./img/Insaissables-bitmap.png";
                }
            }  
        //changer l'image
    }

  

    alert('shake!');
}

window.removeEventListener('shake', shakeEventDidOccur, false);

myShakeEvent.stop();

}