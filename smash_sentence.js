function smash (words) {
    let rta = ""
    
    words.forEach((item) => {
        rta = rta + " " + item
    })
    rta = rta.trimStart()
    console.log(`'${rta}'`)
};

smash(['hello', 'world', 'this', 'is', 'great'])