// Option 1

function basicOp(operation, value1, value2)
{
    if (operation == '+'){
     return value1 + value2
    }
    if (operation == '-'){
        return value1 - value2
    }
    if (operation == '*'){
        return value1 * value2
    }
    if (operation == '/'){
        return value1 / value2
    }
}

// Option 2
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return value1 / value2;
        default: return 'Operation must be one of + - * /';
    }
}

// Option 3 (The most elegant one on my opinion)
function basicOp(o, a, b) {
    return eval(a+o+b);
}
