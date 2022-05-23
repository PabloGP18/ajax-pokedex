    // your code here

    const poke_url = "https://pokeapi.co/api/v2/pokemon/";


    /*(async ()=>{
        let data = await getData(url));
        console.log(data)
    })();*/

    async function pokemonInfo () {

        let data =  await fetch(poke_url)
        let main =   await data.json()
        console.log(main)
    };

    pokemonInfo();