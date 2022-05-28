function start() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/IhuKOiL-r/model.json", modelLoaded)

}

function modelLoaded() {
    console.log("model is loaded");
    classifier.classify(gotResults);
}

function gotResults(error, result) {
    if (error) {
        console.error(error);
    }
    else {
        document.getElementById("result").innerHTML = "I can hear: " + result[0].label;
if(result[0].label=="dog"){
    document.getElementById("img").src="dog.png"
}
else if(result[0].label=="cat"){
    document.getElementById("img").src="cat.jfif"
}
else if(result[0].label=="goat"){
    document.getElementById("img").src="goat.png"
}
else{
    document.getElementById("img").src="ear.webp" 
}
    }
}