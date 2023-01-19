function abbrevName(name){
    let n = name.split(' ') 
    // Esto devuelve un array con ambos nombres ['Sam', 'Harris']
    
    const intento = [];

    // Esto añade la primera letra al nuevo array
    n.forEach(element => {
        intento.push(element[0].toUpperCase())
    });
  
    const rta = intento.join('.');
    console.log(rta);
}

abbrevName('Sam Harris')
