    // your code here
    /*(async ()=>{
        let data = await getData(url));
        console.log(data)
    })();*/


    document.getElementById('run').addEventListener('click',pokemonInfo);

    async function pokemonInfo (){

        const poke_url = "https://pokeapi.co/api/v2/pokemon/";
        let inputPokeId = document.getElementById("poke-id").value;
        let inputNr = Number(inputPokeId);


        let data = await fetch(`${poke_url}${inputNr}`)
        let response = await data.json();
        console.log(response)
        console.log(response.name, response.id, response.moves[0],response.moves[1],response.moves[2],response.moves[3],response.moves[4],response.sprites.front_default);

    }