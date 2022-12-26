
export const getPokemonx= async () => {
    let aux =[]
    try {
        let pokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
        const res = await fetch(pokemonUrl);
        const data = await res.json();
        // let img = await getImagen('ditto')
        // console.log('chupalo',  img)
        console.log('dataProvider', data.results[4].name);
        
        // getImagen( data.results[4].name).then(result => {aux.push(result)})

        // data.results.forEach(element => {
        //     geti
        // });
        return data.results;

    } catch (error) {
        return console.error(error)    
    }
}

export const getImagen = async (name) => {
  
        const response = await fetch(`"https://pokeapi.co/api/v2/pokemon/${name}`)
        const data =  await response.json();
        return data.sprites.other['official-artwork'].front_default;
}

