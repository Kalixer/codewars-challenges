/*
    Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

    Examples
    "This is an example!" ==> "sihT si na !elpmaxe"
    "double  spaces"      ==> "elbuod  secaps"
*/
// function reverseWords(str) {
//     const arr = str.split(' ') // [ 'This', 'is', 'an', 'example!' ]
//     // Hacer un array que contenga los espacios como items
//     // Usar slice para cortar los espacios segun la cantidad de caracteres de las letras
//     // Usar Array.index() para saber la diferencia entre espacios


//     const rev = [];
//     let rta;
//     const largo = []
//     arr.forEach((word) => largo.push(word.length))

//     console.log(largo)
//     // arr.forEach((word) => {
//     //     for(i = word.length - 1; i>=0; i--){
//     //         rev.push(word[i])
//     //     }
//     //     rev.push(' ')
//     //     rta = rev.join('')
//     // })
//     // console.log(rta)
// }


// El mio no funcionó pero este sí
function reverseWords(str) {
    let arr = str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
    console.log(arr)
}

reverseWords("This is an example!")
reverseWords("Double  spaces")