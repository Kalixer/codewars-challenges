function isNarcissistic(number){
    // Este array contiene los digitos separados del número en cuestión
    // Te será útil para potenciarlos por el exponente
    const digitos = [] 
    const number_string = number.toString()
    
    for (digito of number_string){
        digitos.push(digito)
    }
    const exponente = digitos.length // Esto servirá para potenciar los números

    console.log(digitos)
    console.log(exponente)
    
    let rta = 0

    digitos.forEach((digito) => {
        rta = rta + digito ** exponente
    })

    if(rta == number) {
        return true
    } else {
        return false
    }

}
// Debes partir el número en sus dígitos fundamentales (Checked)
// Luego debes elevarlos a la potencia de su longitud
// Si al sumar sus resultados te da el número original, retorna true


isNarcissistic(153);

/*
    A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

    Ex: 153, where l = 3 ( the number of digits in 153 )
    13 + 53 + 33 = 153
    
    Write a function that, given n, returns whether or not n is a Narcissistic Number.
*/