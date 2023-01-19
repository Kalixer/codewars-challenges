function lovefunc(flower1, flower2){
    if(isEven(flower1) && !isEven(flower2) || !isEven(flower1) && isEven(flower2)) {
        console.log('true')
    } else {
        console.log('false')
    }
}
  
  
function isEven(number){
  if(number % 2 == 0){
    return true
  } else {
    return false
  }
}

lovefunc(1, 4)
lovefunc(2, 2)
lovefunc(0, 1)
lovefunc(0, 0)