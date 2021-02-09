var problem = "";
var hasOperator = false

const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('.calculator__display')

function operator(str) {
    if(problem.toString().slice(-1).includes('+')
    ||problem.toString().slice(-1).includes('-')
    ||problem.toString().slice(-1).includes('*')
    ||problem.toString().slice(-1).includes('/')) {
        console.log("No double operators.")
    } else {
        problem = solve()
        append(str)
    }
    refresh()
}

function refresh() {
    display.innerHTML = problem;
    console.log("Screen refreshed!")
}

function backspace() {
    problem = problem.slice(0, -1)
    console.log("problem: "+problem)
    display.innerHTML = "whatever";
    refresh()
}

function clearMath() {
    problem = ""
    console.log("Cleared!")
    refresh()
}

function solve() {
    let expr = problem

    var chars = expr.split("");
    var n = [], op = [], index = 0, oplast = true;

    n[index] = "";

    // Parse the expression
    for (var c = 0; c < chars.length; c++) {

        if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
            op[index] = chars[c];
            index++;
            n[index] = "";
            oplast = true;
        } else {
            n[index] += chars[c];
            oplast = false;
        }
    }

    // Calculate the expression
    expr = parseFloat(n[0]);
    for (var o = 0; o < op.length; o++) {
        var num = parseFloat(n[o + 1]);
        switch (op[o]) {
            case "+":
                expr = expr + num;
                break;
            case "-":
                expr = expr - num;
                break;
            case "*":
                expr = expr * num;
                break;
            case "/":
                expr = expr / num;
                break;
        }
    }
    problem = expr.toString()
    console.log(expr)
    refresh()
    return expr;
}

function append(str) {
    problem = problem + str
    console.log("problem: "+problem)
    refresh()
}