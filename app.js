/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


init();
var currentPlayer , scores , currentScore, winScore;

document.querySelector('.btn-roll').addEventListener('click', function(){
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    //show the dice image
    document.querySelector('.dice').style.display = 'block';

    // 2. Show the result
    var diceImg = 'img/dice-' + dice + '.png';
    var diceDom = document.querySelector('.dice');
    diceDom.src = diceImg;

    // 3. add to the current score to current player 
    //Check if the dice is 1. if so change the player.
    if(dice !== 1){ 
        currentScore += dice;
        document.querySelector('#current-' + currentPlayer).textContent = currentScore ;
    }else{
        //Next player
        nextPlayer()
    }

})

document.querySelector('.winScore').addEventListener('keyup', function(e){
    winScore = document.querySelector('.winScore').value;

})

document.querySelector('.btn-hold').addEventListener('click', function(e){
    scores[currentPlayer] += currentScore;
    document.getElementById('score-' + currentPlayer ).textContent = scores[currentPlayer];
    
    if(scores[currentPlayer] >= winScore ){
        console.log('yaaay player' + currentPlayer + ' has won the game!')
        alert('congratulations!! player ' + currentPlayer + ' has won the game.');
        init()
    }else{
        nextPlayer();
    }
    
    
})

function nextPlayer(){
    //before changing players; handle the current player
    document.querySelector('#current-' + currentPlayer).textContent = 0 ;
    document.querySelector('.player-'+ currentPlayer +'-panel').classList.remove('active')
    
    //change to the next player
    currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
    currentScore = 0;
    document.querySelector('.player-'+ currentPlayer +'-panel').classList.add('active');

}

 
document.querySelector('.btn-new').addEventListener('click', init)

function init(){

    winScore =  100;
    currentPlayer = 0;
    currentScore = 0;
    scores = [0 , 0];
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
     
    document.querySelector('.dice').style.display = 'none';
     

}
 