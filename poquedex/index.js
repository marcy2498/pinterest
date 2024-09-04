const searchButton =document.getElementById("searcButton")
const pokemonNameImput =document.getElementById("pokemonName")
const pokemonInfoDiv =document.getElementById("pokemonInfo")

fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
    .then(res => res.json())
    .then(data => {
        let urlArray = []
        let arrayPromise = []
        data.results.forEach(pokemon => {
            urlArray.push(pokemon.url)
        });
        console.log(urlArray);


        urlArray.forEach(url => {
            arrayPromise.push(fetch(url).then(res => res.json()).catch(error => console.log(error)
            ))
        });
        console.log(arrayPromise);

        return Promise.all(arrayPromise)
    })
    .then(
        arrayRes => {
            let pokemonName = "Char"
            arrayRes.forEach(pokemon => {
                console.log(pokemon.name);
                console.log(pokemon.weight);
                console.log(pokemon.sprites.front_default);
                console.log("-----------------------------------");


                });
            let results = arrayRes.filter(pokemon =>{
                return pokemon.name.includes(pokemonName.toLowerCase())
            })

            results.forEach(pokemon =>{
                console.log(pokemon.name);

            })


        }
    )
    .catch(error => console.log(error))
