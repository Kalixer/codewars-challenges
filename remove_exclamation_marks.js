function removeExclamationMarks(s) {
    const phrase = [];

    for(letter of s) {
        phrase.push(letter)
    }
    let rta = phrase.filter(letter => letter != '!' && letter != '¡')
    return rta.join('');
}


removeExclamationMarks('!I want to eat pizza¡')