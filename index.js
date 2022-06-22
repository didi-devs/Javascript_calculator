const calculator = () => {

    let firstNumber = parseFloat(prompt("Enter a number"));
    if (isNaN(firstNumber)) {
        return alert("Invalid Number")
    };


    let operator = prompt("Enter operator");
    if (operator != '+' && operator != '-' && operator != '*' && operator !== '/') {
        return alert("Invalid operator")
    };

    let secondNumber = parseFloat(prompt("Enter another number"));
    if (isNaN(secondNumber)) {
        return alert("Invalid Input")
    };

    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break
        case '-':
            result = firstNumber - secondNumber;
            break
        case '*':
            result = firstNumber * secondNumber;
            break
        case '/':
            result = firstNumber / secondNumber;
            break
    }

    return alert(`${result}`)
}


calculator();