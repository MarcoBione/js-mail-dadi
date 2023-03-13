//register new player to array
function register (){
    // add newplayer to array
    let newPlayer = document.getElementById('uEmail').value;
    emailList.push(newPlayer);
    //check newplayer
    console.log(emailList);

    //access to the game
    document.getElementById('feedback').innerHTML=`
        <div class="mb-3 w-100">
            <button type="submit" id="play" class="btn btn-outline-warning mb-3">Gioca</button>
        </div>`;
};

//dice app
function dice(){

    //set min max value for the random generator
    const maxValue = 6;
    const minValue = 1;

    const numberpc = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    console.log(numberpc);

    const numberuser = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    console.log(numberuser);


    // Create newbox for the gameapp
    const App = document.createElement("div");

    // Aggiunta di testo all'interno del paragrafo
    App.innerHTML = `
    <!-- application body -->
            <div class="card">

                <div class="card-body">

                    <div class="box">
                        <span id="pcPlayer">
                            <div class="results" id="pcResult"></div>
                        </span>
                        <span id="User">
                            <div class="results" id="userResult"></div>
                        </span>
                        <viv id="parity">
                            <div class="parity" id="parityResult"></div>
                        </div>
                    </div>

                </div>

            </div>
            <!-- /application body -->
    `;

    // add game to index
    const game = document.getElementById("app");
    game.appendChild(App);

    document.getElementById('pcResult').innerHTML=`<p>PC:${numberpc}
    `;
    document.getElementById('userResult').innerHTML=`<p>user:${numberuser}
    `;

    if (numberpc == numberuser){
        document.getElementById('parityResult').innerHTML=`<p>pareggio!</p>
    `;
    }
}