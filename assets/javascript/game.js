//initializing variables
var wins=0,
  losses= 0,
  guessesLeft=9,
  guessesSoFar ="",
  userGuess,
  letterChoices= ['a', 'b', 'c', 'd', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  computerLetter
    
//connecting to html
var winsText = document.getElementById('wins')
var lossesText = document.getElementById('losses')
var guessesLeftText = document.getElementById('guessesLeft')
var guessesSoFarText = document.getElementById('guessesSoFar')


//initializing displayed text content
winsText.textContent="Wins: " +0
lossesText.textContent="Losses: " +0
guessesLeftText.textContent="Guesses Left: " +9 
guessesSoFarText.textContent= "Guessed Already: none "


//object with game functions
var game={

  computerPlayer: function(){
    //when key is pressed and all guesses remain a random computer choice will be established
    computerLetter= letterChoices[Math.floor(Math.random()*letterChoices.length)]
  },

  lost: function(){
    //if 1 last guesse and userGuess does not equal computer choice:
    //losses increased by one
    //guessesLeft, guessesSoFar, and text contents all re-initialized
    losses+= 1
    lossesText.textContent= "Losses: " + losses
    guessesLeft= 9
    guessesLeftText.textContent="Guesses Left: " + guessesLeft
    guessesSoFar=""
    guessesSoFarText.textContent="Guessed Already: none"
  },

  won: function(){
    //if userGuess equals computer choice:
    //wins increased by one
    //guessesLeft, guessesSoFar, and text contents all re-initialized
    wins += 1
    winsText.textContent="Wins: " + wins
    guessesLeft=9
    guessesLeftText.textContent= "Guesses Left: "+ guessesLeft
    guessesSoFar= ""
    guessesSoFarText.textContent= "Guessed Already: none"
  },

  wrongGuess: function(){
    //if userGuess does not equal computer choice and guesses are still left:
    //guesses go down by 1
    //guessesAlready adds the userGuess to it's string
    //text contents updated with results
    guessesLeft-= 1
    guessesLeftText.textContent="Guesses Left: "+ guessesLeft
    guessesSoFar+= userGuess
    guessesSoFarText.textContent= "Guessed Already: " + guessesSoFar
  }
}


//start of game
document.onkeyup= function(event){
   userGuess=event.key

   if(guessesLeft === 9){
     game.computerPlayer()
    }

   if (userGuess !== computerLetter && guessesLeft === 1){  
      game.lost()     
   }else if(userGuess === computerLetter){
      game.won()
   }else{
       game.wrongGuess()
   }
}