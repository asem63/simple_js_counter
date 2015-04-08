window.onload = function(){
    var counterFace = document.getElementById("counter-face");
    var toggleBtn = document.getElementById("toggle");
    var stopBtn = document.getElementById("stop");
    var toggled = false;

    createNewElement();

    //counter
    var speed = 100;
    var counter = setInterval(update, speed);

    function update(){
        updateElements(counterFace.lastElementChild);
    }

    function createNewElement(){
        var elem = document.createElement("div");
        elem.className = "flex-item";
        elem.innerHTML = "0";
        counterFace.insertBefore(elem, counterFace.firstElementChild);
        return counterFace.firstElementChild;
    }

    function updateElements(elem){
        var number = parseInt(elem.innerHTML);
        var nextDigitElement;
        number++;

        if(number > 9){
            elem.innerHTML = "0";

            if(elem === elem.parentNode.firstElementChild){
                nextDigitElement = createNewElement();
            }else{
                nextDigitElement = elem.previousElementSibling;
            }
            updateElements(nextDigitElement);
        }else {
            elem.innerHTML = number.toString();

        }
    }

    toggleBtn.onclick = function() {
        if(toggled){
            counter = setInterval(update, speed);
        }else{
            clearInterval(counter);
        }
        toggled = !toggled;
    };

    stopBtn.onclick = function() {
        toggled = true;

        while (counterFace.hasChildNodes()) {
            counterFace.removeChild(counterFace.lastChild);
        }
        clearInterval(counter);
        createNewElement();
    };



};