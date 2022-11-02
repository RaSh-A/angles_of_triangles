const sides = document.querySelectorAll(".sides")
const calc = document.querySelector("#calculate")
const outputDes = document.querySelector(".output")
const outputVal = document.querySelector(".output-value")
const refreshBTN = document.querySelector("#refresh")

function calculateArea() {

    const a = sides[0].value;
    const b = sides[1].value;
    if (a > 0 && b > 0) {
        outputDes.style.display = "block"
        outputVal.style.display = "block"

        const c = 0.5 * a * b;
        outputDes.innerHTML = "The area of triangle is "
        const str = "2";
        outputVal.innerHTML = c + " unit" + str.sup();
        
    } else {
        outputDes.style.display = "block"
        outputVal.style.display = "block"
        
        outputDes.innerHTML = "Please enter VALID values of sides."
        outputVal.innerHTML = "";
    }

}

function refreshHandler() {
    outputDes.style.display = "none"
    outputVal.style.display = "none"
    sides[0].value = "";
    sides[1].value = "";
    alert("Page Refreshed!")

}





calc.addEventListener("click", calculateArea)
refreshBTN.addEventListener("click", refreshHandler)