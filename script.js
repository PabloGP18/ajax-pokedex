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
        name.textContent = "Name: " + response.name;

        let id = document.querySelector(".id");
        id.textContent = "Id: " + response.id;

        function moves (){
            const move = [];

            if (response.moves.length === 1){
                move.push(response.moves[0].move.name);
                document.querySelector(".moves").textContent="Moves: " + move;
            }

            else{
                for (let i = 0; i < 4; i++) {
                    move.push(response.moves[i].move.name);
                }

                console.log(move)
            document.querySelector(".moves").textContent="Moves: " + move;
        }}

        function AddingImage(){
            const imageCont = document.querySelector(".sprites") // Container div where image needs to be
            let pokeImage = new Image(300,300);
            pokeImage.src = response.sprites.other.home.front_default;;
            imageCont.innerHTML = '';
            imageCont.appendChild(pokeImage); // you put newimage (pokeImage) in the div container with appendchild
        }

        moves();
        AddingImage(response);

        console.log(response)
        console.log(response.name, response.id, response.moves[0],response.moves[1],response.moves[2],response.moves[3],response.moves[4],response.sprites.front_shiny);
    }

