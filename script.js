    // your code here
    /*(async ()=>{
        let data = await getData(url));
        console.log(data)
    })();*/


    document.getElementById('run').addEventListener('click',pokemonInfo);

    async function pokemonInfo (){

        const evo_Url="https://pokeapi.co/api/v2/pokemon-species/";
        const poke_url = "https://pokeapi.co/api/v2/pokemon/";
        let inputPokeInfo = document.getElementById("poke-id").value;
        let input = inputPokeInfo;

        let data = await fetch(`${poke_url}${input}`)
        let response = await data.json();

        let dataEvo = await fetch(`${evo_Url}${input}`)
        let responseEvo = await dataEvo.json();

        function colors (){ // a function to change color background  = the type of pokemon
            if (responseEvo.color.name === "green"){
                document.body.style.background = "green"
            }
            else if (responseEvo.color.name === "blue")
            {
                document.body.style.background = "blue"
                document.querySelector(".name").style.color= "white"
                document.querySelector(".id").style.color= "white"
                document.querySelector(".moves").style.color= "white";
            }
            else if (responseEvo.color.name === "yellow")
            {
                document.body.style.background = "yellow"
            }
            else if (responseEvo.color.name === "brown")
            {
                document.body.style.background = "brown"
            }
            else if (responseEvo.color.name === "purple")
            {
                document.body.style.background = "brown"
            }
            else if (responseEvo.color.name === "pink")
            {
                document.body.style.background = "pink"
            }
            else if (responseEvo.color.name === "red")
            {
                document.body.style.background = "red"
                document.querySelector(".header").style.background= "blue"
                document.querySelector(".align-text-features").style.border= "1px solid white"
                document.getElementById("border").style.boxShadow = "10px 20px 30px white";
            }
            else if (responseEvo.color.name === "black")
            {
                document.body.style.background = "black"
                document.querySelector(".name").style.color= "white"
                document.querySelector(".id").style.color= "white"
                document.querySelector(".moves").style.color= "white";
            }
            else if (responseEvo.color.name === "gray")
            {
                document.body.style.background = "gray"
            }
            else if (responseEvo.color.name === "white")
            {
                document.body.style.background = "white"
            }
        }
        // fixing original colors, this way it doesn't paste the colors above
        document.getElementById("border").style.border= "1px solid red"
        document.getElementById("border").style.boxShadow = "10px 20px 30px red";
        document.querySelector(".header").style.background= "red"
        document.querySelector(".name").style.color= "black"
        document.querySelector(".id").style.color= "black"
        document.querySelector(".moves").style.color= "black";

        // printing in html the name, id, moves of the selected pokemon

        let name = document.querySelector(".name");
        name.textContent = "Name: " + response.name;
        if (input === "mr mime" ){
            input = "mr-mime"
        }

        let id = document.querySelector(".id");
        id.textContent = "Id: " + response.id;

        function moves (){ // function for finding moves pokemon
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

        function AddingImage(){ // function to add image to html
            const imageCont = document.querySelector(".sprites") // Container div where image needs to be
            let pokeImage = new Image(300,300);
            pokeImage.src = response.sprites.other.home.front_default;
            imageCont.innerHTML = '';
            imageCont.appendChild(pokeImage); // you put newimage (pokeImage) in the div container with appendchild
        }
        colors()
        moves();
        AddingImage(response);
    }
