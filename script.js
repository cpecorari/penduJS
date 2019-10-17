let myWord = "";
let points = 10;

function init(){
    document.getElementById("letterBtn").hidden = true;
    document.getElementById("letterInput").hidden = true;
    document.getElementById("ppoints").hidden = true;
    document.getElementById("playBtn").hidden = false;
    document.getElementById("wordInput").hidden = false;
    document.getElementById("wordInput").value = "";
    document.getElementById("letters").hidden = true;    
    document.getElementById("winlose").hidden = true;
    document.getElementById("restart").hidden = true;
    document.getElementById("points").textContent = '10';
    points = 10;
}

init();

document.getElementById("playBtn").addEventListener("click", function() {
    newGame();
});

// NEW GAME HERE
function newGame() {
    document.getElementById("playBtn").hidden = true;
    document.getElementById("wordInput").hidden = true;
    document.getElementById("letterBtn").hidden = false;
    document.getElementById("letterInput").hidden = false;
    document.getElementById("ppoints").hidden = false;
    document.getElementById("letters").hidden = false; 
    myWord = document.getElementById("wordInput").value;
    document.getElementById("letters").textContent = "";
    for(var i=0; i < myWord.length; i++){
        document.getElementById("letters").textContent += "_";
    }
    points = 10;
}

document.getElementById("letterInput").addEventListener('keydown', (event) => {
    const nomTouche = event.key;
    if(nomTouche == "Enter")
        tryLetter();
});

document.getElementById("wordInput").addEventListener('keydown', (event) => {
    const nomTouche = event.key;
    if(nomTouche == "Enter")
        newGame();
});

document.getElementById("letterBtn").addEventListener("click", function() {
    tryLetter();
});

function tryLetter(){

    // TROUVER si lettre dans le mot
    var inputLetter = document.getElementById("letterInput").value;
    document.getElementById("letterInput").value = "";
    var letterFound = false;
    for(var i=0; i < myWord.length; i++){
        if(myWord.split('')[i] == inputLetter)
        {
            console.log("lettre trouvée !");
            letterFound = true;
            var tab = document.getElementById("letters").textContent.split('');
            tab[i] = inputLetter;
            document.getElementById("letters").textContent = tab.join('');
        }
    }
    if(!letterFound) {
        points--;
        document.getElementById("points").textContent = points;
        console.log(points);
    }
    if(points == 0)
    {
        document.getElementById("winlose").textContent = "You LOSE";
        document.getElementById("winlose").hidden = false;
        document.getElementById("restart").hidden = false;
    }
    if(document.getElementById("letters").textContent.search("_") == -1)
    {
        document.getElementById("winlose").textContent = "You Win !!";
        document.getElementById("winlose").hidden = false;
        document.getElementById("restart").hidden = false;
    }
}

document.getElementById("restart").addEventListener("click", function() {
    init();
});

document.addEventListener('keydown', (event) => {
    const nomTouche = event.key;
    if(nomTouche == "Escape")
        init();
});