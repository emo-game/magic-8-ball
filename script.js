
let CURRENT_SEQ = null

function Shake(options) {
    //feature detect
    this.hasDeviceMotion = 'ondevicemotion' in window;

    this.options = {
        threshold: 15, //default velocity threshold for shake to register
        timeout: 1000 //default interval between events
    };
  

}
var myShakeEvent = new Shake({
    threshold: 15, // optional shake strength threshold
    timeout: 1000 // optional, determines the frequency of event generation
});

myShakeEvent.start();

window.addEventListener('shake', shakeEventDidOccur, false);





//function to call when shake occurs

function shakeEventDidOccur () {
   
  

    console.log("shake ya booty man!");

}
