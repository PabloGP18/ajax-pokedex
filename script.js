    // your code here
    /*(async ()=>{
        let data = await getData(url));
        console.log(data)
    })();*/


    document.getElementById('run').addEventListener('click',pokemonInfo);

    async function pokemonInfo (){

        const poke_url = "https://pokeapi.co/api/v2/pokemon/";
        let inputPokeInfo = document.getElementById("poke-id").value;
        let input = inputPokeInfo;

        let data = await fetch(`${poke_url}${input}`)
        let response = await data.json();

        let name = document.querySelector(".name");
        name.textContent = response.name;

        let id = document.querySelector(".id");
        id.textContent = response.id;

        let moves = document.querySelector(".moves");
        moves.textContent = `${response.moves[0].move.name}, ${response.moves[1].move.name}, ${response.moves[2].move.name}, ${response.moves[3].move.name}`;

        let pokeImage = new Image(300,300);
        pokeImage.src = response.sprites.front_shiny;
        document.querySelector(".sprites").appendChild(pokeImage);

        console.log(response)
        console.log(response.name, response.id, response.moves[0],response.moves[1],response.moves[2],response.moves[3],response.moves[4],response.sprites.front_shiny);
    }


