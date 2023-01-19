function squareDigits(num){
    const arr = num.toString().split(''); // [ '9', '1', '1', '9' ]
    const squeared = [];

    arr.forEach(number => {
        squeared.push(number*number)
    })
    
    console.log(typeof(parseInt(squeared.join(''))))
}

squareDigits(9119);