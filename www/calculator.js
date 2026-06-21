//  Calculator
// this variable stores whatever the user is typing like "5+3" "
let expression = ""

// this is true when the user just pressed equals
// if they type a new number after = it starts fresh
let justCalculated = false


// this function runs when any number or operator button is clicked
function appendChar(char) {

    // if the user just got a result and now types a number, clear everything
    if (justCalculated && !isNaN(char)) {
        expression = ""
        justCalculated = false
    }

    // if they press an operator after result, continue from the result
    if (justCalculated && isNaN(char)) {
        justCalculated = false
    }

    // add the character to the expression
    expression += char

    // update what is showing on screen
    updateDisplay()
}


// this clears everything and resets the calculator
function clearAll() {
    expression = ""
    justCalculated = false

    // show 0 on screen
    document.getElementById("expression").textContent = "0"
    document.getElementById("result").textContent = ""
}


// this works like the backspace key, removes last character
function deleteLast() {
    // slice removes the last character from the string
    expression = expression.slice(0, -1)
    justCalculated = false
    updateDisplay()
}


// this does the actual calculation when equals is pressed
function calculate() {

    // if nothing is typed do nothing
    if (expression === "") return

    try {
        // I replace the symbols with proper js math operators before calculating
        let mathExpression = expression
            .replace(/÷/g, "/")
            .replace(/×/g, "*")
            .replace(/−/g, "-")

        // eval() calculates the math expression
        // for example eval("5+3") gives 8
        let answer = eval(mathExpression)

        // if answer is a whole number remove the decimal
        // so 10.0 becomes just 10
        if (answer === Math.floor(answer)) {
            answer = Math.floor(answer)
        } else {
            // round to 6 decimal places to avoid long ugly numbers
            answer = parseFloat(answer.toFixed(6))
        }

        // show the answer on screen
        document.getElementById("result").textContent = "= " + answer

        // save the answer so user can keep calculating from here
        expression = String(answer)
        justCalculated = true

    } catch (error) {
        // if something is wrong like "5+" show error
        document.getElementById("result").textContent = "Error"
        expression = ""
        justCalculated = false
    }
}


// this updates the expression display on screen
function updateDisplay() {
    if (expression === "") {
        document.getElementById("expression").textContent = "0"
    } else {
        document.getElementById("expression").textContent = expression
    }
}


// I also added keyboard support so user can type with keyboard too
document.addEventListener("keydown", function(event) {

    let key = event.key

    if (key >= "0" && key <= "9") appendChar(key)
    else if (key === "+") appendChar("+")
    else if (key === "-") appendChar("-")
    else if (key === "*") appendChar("*")
    else if (key === "/") {
        event.preventDefault()  // prevent browser from opening search
        appendChar("/")
    }
    else if (key === ".") appendChar(".")
    else if (key === "%" ) appendChar("%")
    else if (key === "Enter") calculate()
    else if (key === "Backspace") deleteLast()
    else if (key === "Escape") clearAll()
})
