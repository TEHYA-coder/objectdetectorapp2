status ="";

function preload() {
    img = loadImage("globe.jpeg");
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting objects";
}

function modelLoaded() {
    console.log("Model is Loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if(error)
    {
        console.log(error);
    } 

    console.log(results);

    objects = results;

    
}