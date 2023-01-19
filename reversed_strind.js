function solution(str){
    const splitted = str.split('');

    const rta = [];
    
    for(let i = splitted.length - 1; i >= 0; i--){
        rta.push(splitted[i])
    }


    console.log(rta.join(''))
}


solution('world')