// function minMax(arr){
//     const lista_ordenada = arr.sort((a, b) => a - b)

//     const min = lista_ordenada[0]
//     const max = lista_ordenada[lista_ordenada.length - 1]

//     const lista_final = [min, max]
//     console.log(lista_final)
// }

// minMax([1,2,3,4,5])
// minMax([2334454,5])
// minMax([1])


function sumArray(array) {
    if(array != null && array.length != 0){
        const lista = array.sort((a, b) => a - b)
        const last = lista[lista.length - 1]
        let first = 0
        if(array.length != 1){
            first = lista[0]
        }
        const both = last + first
        const rta = lista.reduce((sum, item) => sum + item, 0) - both
        console.log(array)
        console.log(rta)
    } else{
        console.log(array)
        console.log(0)
    }
}

sumArray(null)
sumArray([])
sumArray([3, 5])
sumArray([3])
sumArray([6, 2, 1, 8, 10])
sumArray([1, 1, 11, 2, 3])