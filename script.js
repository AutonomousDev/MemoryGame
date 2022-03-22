/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// global constants
let clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;

var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var buttonCount = 10;
var mistakeCount = 0;

function addMistake(){
  mistakeCount++
  document.getElementById("mistake-count").innerHTML = mistakeCount;
}

function updateButtonCount(i){
  buttonCount = i
  console.log(buttonCount)
  for(let i=1;i<=10;i++){ 
    console.log("button"+i);
    if (i<=buttonCount){
      document.getElementById("button"+i).classList.remove("hidden");
    }
    else{
      document.getElementById("button"+i).classList.add("hidden");
    }  
  }  
  randomPattern();
}
function randomPattern(){
  // randomize the patern each new game
  for(let i=0;i<=8;i++){
    pattern[i] = Math.floor(Math.random() * buttonCount) + 1;
  }
  console.log("New patern is: "+ pattern)
}

function startGame(){
  //initialize game variables
  randomPattern();
  clueHoldTime = 1000;    // Reset playback time for new game
  mistakeCount = 0;      // Reset Mistake count
  document.getElementById("myMistakes").classList.remove("hidden");
  document.getElementById("mistake-count").innerHTML = mistakeCount;
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("btn-count").classList.add("hidden");
  playClueSequence()
}
function stopGame(){
  //initialize game variables

  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("btn-count").classList.remove("hidden");
  document.getElementById("myMistakes").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
  6: 600,
  7: 700,
  8: 800,
  9: 900,
  10: 1000

}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  clueHoldTime -= (progress*20) // Playback speeds up each turn
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime
    delay += cluePauseTime;
    
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if (btn === pattern[guessCounter]){
    if (progress === guessCounter){
      if(progress === pattern.length-1){
        winGame();
      }
      else{
        progress++;
        playClueSequence();
      }
    }    
    else{
      guessCounter++
    }
  }
  else{
    if (mistakeCount<3){
      addMistake()
    }
    else{
      loseGame();
    }
    
  }
  // add game logic here
}