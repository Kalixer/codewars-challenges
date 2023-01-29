function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    const rta = [];
    for (let letter of str) {
        if (!vowels.includes(letter)){
            rta.push(letter)
        }
    }
    console.log(rta.join(''));
}

disemvowel("This website is for losers LOL!")