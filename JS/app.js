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
    const minValue = 0;

    const randomNumber = Math.floor(Math.random(maxValue, minValue))
    console.log('randomNumber');
}