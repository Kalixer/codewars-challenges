function squareSum(numbers){
    let rta = 0;

    numbers.forEach((number) => {
        rta = rta + (number**2)
        console.log('The number is ' + number)
        console.log('The result is: ' + rta)
    })
    console.log(rta)

}

squareSum([1, 2, 2])