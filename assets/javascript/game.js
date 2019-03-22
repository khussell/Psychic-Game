var wins=0
var losses= 0
var guessesLeft=9
var guessesSoFar =""
var userGuess
var letterChoices= ['a', 'b', 'c', 'd', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var computerLetter
    

var winsText = document.getElementById('wins')
var lossesText = document.getElementById('losses')
var guessesLeftText = document.getElementById('guessesLeft')
var guessesSoFarText = document.getElementById('guessesSoFar')

winsText.textContent="Wins: " +0
lossesText.textContent="Losses: " +0
guessesLeftText.textContent="Guesses Left: " +9 
guessesSoFarText.textContent= "Guessed Already: none "


document.onkeyup= function(event){
   userGuess=event.key

   if(guessesLeft === 9){
     computerLetter= letterChoices[Math.floor(Math.random()*letterChoices.length)]
    }
   if (userGuess !== computerLetter && guessesLeft === 1){  
    losses+= 1
    lossesText.textContent= "Losses: " + losses
    guessesLeft= 9
    guessesLeftText.textContent="Guesses Left: " + guessesLeft
    guessesSoFarText.textContent="Guessed Already: none"   
   } else if(userGuess === computerLetter){
    wins += 1
    winsText.textContent="Wins: " + wins
    guessesLeft=9
    guessesLeftText.textContent= "Guesses Left: "+ guessesLeft
    }else{
        guessesLeft-= 1
        guessesLeftText.textContent="Guesses Left: "+ guessesLeft
        guessesSoFar+= userGuess
        guessesSoFarText.textContent= "Guessed Already: " + guessesSoFar
       }
    
   




}