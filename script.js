// დავასრულოთ X/0 თამაში. გაჩერდეს თამაში მოგებული კომბინაციის
// შემდეგ. თამაში განახლდეს რესტარტ ღილაკით.
// X/0 ლოგიკის დამთავრება მატრიცით, ჩაშენებული ფუნქციების გარეშე.

var items = document.querySelectorAll(".x")
var restart = document.querySelector(".restart")
var MyP = document.querySelector("#MyP")
var MyP1 = document.querySelector("#MyP1")
var counter = true
var lastindex = -1

for(var i of items){
    i.addEventListener("click", function () {
        lastindex = [...items].indexOf(this)
        if(this.innerText == ""){
            counter == true ? this.innerText = "X" : this.innerText = "0"
            counter = !counter
            checkWinner()
        }
    })
    function restart() {
        location.reload()
    }
}

function checkWinner () {
    // vertical
    for(var i = 0; i < 7; i+=3){
        if(items[i].innerText == items[i+1].innerText
            && items[i+2].innerText == items[i+1].innerText
            && items[i].innerText != ""){
                console.log(items[i].innerText, "Winner")
                MyP.innerText = `Winner ${items[i].innerText}`
                MyP1.innerText = "The end, restart"
                stopGame()
        }
    }
    // horizontal
    for(var i = 0; i < 3; i++){
        if(items[i].innerText == items[i+3].innerText
            && items[i+6].innerText == items[i+3].innerText 
            && items[i].innerText != ""){
                console.log(items[i].innerText, "Winner")
                MyP.innerText = `Winner ${items[i].innerText}`
                MyP1.innerText = "The end, restart"
                stopGame()
        }
    }
    // diagonal index(0)
    for(var i = 0; i < 3; i+=4){
        if(items[i].innerText == items[i+4].innerText
            && items[i+8].innerText == items[i+4].innerText 
            && items[i].innerText != ""){
                console.log(items[i].innerText, "Winner")
                MyP.innerText = `Winner ${items[i].innerText}`
                MyP1.innerText = "The end, restart"
                stopGame()
        }
    }
    // diagonal index(2)
    for(var i = 2; i < 3; i+=2){
        if(items[i].innerText == items[i+2].innerText
            && items[i+4].innerText == items[i+2].innerText 
            && items[i].innerText != ""){
                console.log(items[i].innerText, "Winner")
                MyP.innerText = `Winner ${items[i].innerText}`
                MyP1.innerText = "The end, restart"
                stopGame()
        }
    }
    //draw
    for(var i of items){
        if((items[0].innerText == 'X' || items[0].innerText == '0') && (items[1].innerText == 'X' ||
            items[1].innerText == '0') && (items[2].innerText == 'X' || items[2].innerText == '0') &&
           (items[3].innerText == 'X' || items[3].innerText == '0') && (items[4].innerText == 'X' ||
            items[4].innerText == '0') && (items[5].innerText == 'X' || items[5].innerText == '0') &&
           (items[6].innerText == 'X' || items[6].innerText == '0') && (items[7].innerText == 'X' ||
            items[7].innerText == '0') && (items[8].innerText == 'X' || items[8].innerText == '0')){
                MyP.innerText = "Draw";
                MyP1.innerText = "Try again, restart";
                stopGame()
        }
    }
}

function stopGame() {
    for(var i of items){
        i.style.pointerEvents = "none"
    }
}