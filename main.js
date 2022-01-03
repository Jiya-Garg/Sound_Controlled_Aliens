function startfunction() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/INJ9Uu_fi/model.json', modelReady)
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error,results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_red = Math.floor(Math.random() * 255) + 1;
        random_number_green = Math.floor(Math.random() * 255) + 1;
        random_number_blue = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_hear").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_accuracy").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_hear").style.color = "rgb("
        +random_number_red+","+random_number_green+","+random_number_blue+")";
        document.getElementById("result_accuracy").style.color = "rgb("
        +random_number_red+","+random_number_green+","+random_number_blue+")";
        img = document.getElementById('alien1');
        img1 = document.getElementById('alien2');
        img2 = document.getElementById('alien3');
        img3 = document.getElementById('alien4');
        if (results[0].label == "Clapping") {
            img.src = 'aliens-01.gif';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        }
        else if (results[0].label == "Bell") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.gif';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        }
        else if (results[0].label == "Snapping") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.gif';
            img3.src = 'aliens-04.png';
        }
        else {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.gif';
        }

    }
}