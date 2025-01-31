function calculateProblem() {
    // asks for input
    const operator = prompt(`What would you like to do? (+, -, *, or /)`);

    // parseFloat takes a string and converts it into a positive or negative number with a decimal
    const number1 = parseFloat(prompt(`Enter first number: `));
    const number2 = parseFloat (prompt(`Enter second number: `));


    // if/ else if/ else chain that calculates
    let result;
    if (operator == `+`) {
        result = number1 + number2;
    }
    else if (operator == `-`) {
        result = number1 - number2;
    }
    else if (operator == `*`) {
        result = number1 * number2;
    }
    else {
        result = number1 / number2;
    }

    // display answer
    document.write(`${number1} ${operator} ${number2} = ${result}, ` + `refresh to try again.`);
}


