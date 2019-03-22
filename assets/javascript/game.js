var wins=0,
    losses= 0,
    guessesLeft=9,
    guessesSoFar,
    userGuess,
    letterChoices= ['a', 'b', 'c', 'd', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    computerLetter
    

var winsText=document.getElementById('wins'),
    lossesText=document.getElementById('losses'),
    guessesLeftText=document.getElementById('guessesLeft'),
    guessesSoFarText=document.getElementById('guessesSoFar')

winsText.innerText="Wins: 0"
lossesText.textContent="Losses: 0"
guessesLeftText.textContent="Guesses Left: 9"
guessesSoFarText.textContent= "Guessed Already: "


document.onkeyup= function(event){
   userGuess=event.key
   computerLetter= letterChoices[Math.floor(Math.random()*letterChoices.length)]
   if(userGuess === computerLetter){
       guessesLeft=9
       wins += 1
       winsText.textContent="Wins: " + wins
       guessesLeft.textContent= "Guesses Left: "+ guessesLeft
   } else if (userGuess !== computerLetter && guessesLeft === 0){  
           losses+= 1
           lossesText.textContent= "Losses: " + losses
           guessesLeftText.textContent="Guesses Left: "+ guessesLeft
       
       }else{
        guessesLeft-= 1
        guessesLeftText.textContent="Guesses Left: "+ guessesLeft
        guessesSoFar+= userGuess
        guessesSoFarText.textConent= "Guessed Already: " + guessesSoFar
       }
    
   




}