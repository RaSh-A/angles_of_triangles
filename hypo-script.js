const sides = document.querySelectorAll(".sides")
const calcBTN = document.querySelector("#calculate")
const outputDes = document.querySelector("#output")
const outputVal = document.querySelector("#output-value")
const refreshBTN = document.querySelector("#refresh")

function calcSquares(a, b) {
    var summ = a * a + b * b;

    return summ
}

function calcHypo() {
    // console.log("Hypoooo")
    var a1 = Number(sides[0].value);
    var b1 = Number(sides[1].value);

    var hypooSquare = calcSquares(a1, b1)
    // console.log(hypooSquare);
    var hypo = Math.sqrt(hypooSquare)
    hypo = hypo.toFixed(2);
    
    outputDes.style.display = "block"
    outputVal.style.display = "block"
    // console.log(hypo)
    if (a1 > 0 && b1 > 0) {
        outputDes.innerHTML = "Length of Hypotenuse is = " 
        outputVal.innerHTML = hypo + " units"
        
    } else {
        outputDes.innerHTML = "Please enter Valid values of sides";
        outputVal.innerHTML = ""

    }
}

function refreshHandler() {
    outputDes.style.display = "none"
    outputVal.style.display = "none"
    sides[0].value = "";
    sides[1].value = "";
    alert("Page Refreshed!")

}






calcBTN.addEventListener("click", calcHypo)
refreshBTN.addEventListener("click", refreshHandler)