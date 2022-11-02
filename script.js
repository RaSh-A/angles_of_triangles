const inputs = document.querySelectorAll(".input-angle")
const checkBTN = document.querySelector("#check")
const outputDes = document.querySelector("#output")
const outputDes2 = document.querySelector("#output2")

// console.log(inputs[0].nodeValue)

function calculateSum(a1, a2, a3) {
    var summ = Number(a1) + Number(a2) + Number(a3);
    return summ;
}

function checkTriangle() {
    outputDes.innerHTML="";
    const ang1 = inputs[0].value;
    const ang2 = inputs[1].value;
    const ang3 = inputs[2].value;


    if (ang1>0 && ang2>0 && ang3 > 0) {
        // console.log(ang1, ang2, ang3)
        var sum = calculateSum(ang1, ang2, ang3);
        // console.log(typeof (ang1))
        // console.log("sum is ", sum)
        if (sum === 180) {
            outputDes.innerHTML = "Yayy! It forms a Triangle Buddy"
            outputDes2.innerHTML = ":)"

        } else {
            outputDes.innerHTML = "Oh No! Can't form a Triangle with these angles!"
            outputDes2.innerHTML = ":("
        }
    } else {
        // console.log("you oversmart !")
        outputDes.innerHTML = "Please Enter Valid Angle Values"
        outputDes2.innerHTML = ":0"
    }
}

checkBTN.addEventListener("click", checkTriangle)