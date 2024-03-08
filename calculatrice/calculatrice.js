const n9 = document.getElementById("n9");
const n8 = document.getElementById("n8");
const n7 = document.getElementById("n7");
const n6 = document.getElementById("n6");
const n5 = document.getElementById("n5");
const n4 = document.getElementById("n4");
const n3 = document.getElementById("n3");
const n2 = document.getElementById("n2");
const n1 = document.getElementById("n1");
const n0 = document.getElementById("n0");
const ecrant = document.getElementById("ecrant")
const virgule = document.getElementById("virgule");
const egale = document.getElementById("egale");
const plus = document.getElementById("plus");
const moins = document.getElementById("moins");
const fois = document.getElementById("fois");
const diviser = document.getElementById("diviser");
const back = document.getElementById("back");
const clean = document.getElementById("clean");
let reset = true
if (ecrant.value === "") {
    ecrant.value = "0"
    reset = true
}
ecrant.setAttribute("disabled", "disabled")

n0.addEventListener("click", () => {

    if (ecrant.value.length < 13) {
        if (reset) {
            ecrant.value = "0"
        } else {
            ecrant.value += "0"
        }
    }
})

n1.addEventListener("click", () => {

    if (ecrant.value.length < 13) {
        if (reset) {
            ecrant.value = "1"
            reset = false
        } else {
            ecrant.value += "1"
        }
    }
})

n2.addEventListener("click", () => {

    if (ecrant.value.length < 13) {
        if (reset) {
            ecrant.value = "2"
            reset = false
        } else {
            ecrant.value += "2"
        }
    }

})

n3.addEventListener("click", () => {

    if (ecrant.value.length < 13) {
        if (reset) {
            ecrant.value = "3"
            reset = false
        } else {
            ecrant.value += "3"
        }
    }
})

n4.addEventListener("click", () => {

    if (ecrant.value.length < 13) {
        if (reset) {
            ecrant.value = "4"
            reset = false
        } else {
            ecrant.value += "4"
        }
    }

})

n5.addEventListener("click", () => {

    if (ecrant.value.length < 13) {
        if (reset) {
            ecrant.value = "5"
            reset = false
        } else {
            ecrant.value += "5"
        }
    }


})

n6.addEventListener("click", () => {

    if (ecrant.value.length < 13) {
        if (reset) {
            ecrant.value = "6"
            reset = false
        } else {
            ecrant.value += "6"
        }
    }

})

n7.addEventListener("click", () => {

    if (ecrant.value.length < 13) {
        if (reset) {
            ecrant.value = "7"
            reset = false
        } else {
            ecrant.value += "7"
        }
    }

})

n8.addEventListener("click", () => {

    if (ecrant.value.length < 13) {
        if (reset) {
            ecrant.value = "8"
            reset = false
        } else {
            ecrant.value += "8"
        }
    }

})

n9.addEventListener("click", () => {

    if (ecrant.value.length < 13) {
        if (reset) {
            ecrant.value = "9"
            reset = false
        } else {
            ecrant.value += "9"
        }
    }

})

virgule.addEventListener("click", () => {
    if (ecrant.value.length < 13) {
        if (reset) {
            ecrant.value = "0."
            reset = false

        } else {
            ecrant.value += "."

        }

    }
})

egale.addEventListener("click", () => {
    ecrant.value = eval(ecrant.value)
    reset = true

})

plus.addEventListener("click", () => {
    if (ecrant.value.length < 13) {
        ecrant.value += "+"
    }
})

moins.addEventListener("click", () => {
    if (ecrant.value.length < 13) {
        ecrant.value += "-"
    }
})

fois.addEventListener("click", () => {
    if (ecrant.value.length < 13) {
        ecrant.value += "*"
    }
})

diviser.addEventListener("click", () => {
    if (ecrant.value.length < 13) {
        ecrant.value += "/"
    }
})

back.addEventListener("click", () => {
    if (ecrant.value.length === 1) {
        ecrant.value = "0"
        reset = true
    } else {
        ecrant.value = ecrant.value.toString().slice(0, -1)
    }
})

clean.addEventListener("click", () => {
    ecrant.value = "0"
    reset = true
})