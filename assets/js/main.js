




const pokemonList = document.getElementById("pokemonList")






PokeAPI.getPokemons().then( (pokemons = [])=>{
    pokemonList.innerHTML+=pokemons.map(pokemonToLi).join('')
    
    })
        


function pokemonToLi(pokemon) {
    return `
    <li class="pokemon">
        <span class ="number">#001</span>
        <span class ="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>

            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
            // alt="${pokemon.name}">
        </div>
    </li>
    `
}

    // fetch(pokemonList.url)
    // .finally(()=> console.log("Requisição concluida!"))
    

