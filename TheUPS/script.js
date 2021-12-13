const synth = window.speechSynthesis;

let startit = ''

let backgroundkn = "Background knowledge: Proteins are crucial for us to live but they do not regularly get attentions. Today is the chance for you to get to know two proteins: a ubiquitin ligase and a proteasome. They are from the ubiquitin-proteasome system, which controls the protein turnover inside of us. This system is critical for our life to persist. For example, if it does not function in a correct way, many serious diseases might happen, such as Alzheimer's diseases and Parkinson's diseases."
  let game = "In this small game, you need to collaborate with another person. One of you will play as the ubiquitin ligase, another of you will play as the proteasome. You collaborate with each other to clear five toxic protein aggregates which are usually seen in the brain of Alzheimer's patients. In short:"
  let role = "A ubiquitin ligase brings the -this protein needs to be cleared- tag to the target, so proteasome knows where to go. A proteasome degrades unneeded and damaged proteins which are tagged with -clear me-."
  let goal = "When you are ready, collaborate with each other to start your role as a ubiquitin ligase or a proteasome. Move your hand to control the movement of your assigned proteins. Once the ubiquitin ligase tags the toxic aggregate, proteasome can go ahead to clear it."

  let note = "Note: This simulation does not represent 100% scientific information. The ubiquitin-proteasome system is much more complex than what this game represents."

let textsArr = [startit,backgroundkn,game,document.getElementById("proteins").textContent,goal];
let i=0;

var audio;

//Snsynthesis
const speak = text =>{
  let utterThis = new SpeechSynthesisUtterance(text);

  speechSynthesis.getVoices().forEach(function(voice) {
  console.log(voice.name, voice.default ? voice.default :'');
  });
  utterThis.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Daniel'; })[0];
  utterThis.pitch = 1.1;
  utterThis.rate = 0.87;
  synth.speak(utterThis);
};

//
document.querySelector('#next').onclick = () => {
  audio = document.getElementById("music");

  i = i+1;
 //Text
  if(i<3){
  getText();
  speak(document.getElementById("textinfo").textContent);
  }

  if (i==3){
    document.getElementById("textinfo").style.visibility = "hidden";
    document.getElementById("proteins").style.visibility = "visible";
    speak(role);
  }
  if(i==4){
    document.getElementById("textinfo").textContent = goal;
    document.getElementById("proteins").style.visibility = "hidden";
    document.getElementById("textinfo").style.visibility = "visible";
    speak(goal);
  }

  //Next
  if(i<4){
    document.getElementById("next").textContent = "Click to continue to read>>";
  }
  if(i==4){
    document.getElementById("next").textContent = "Click to Start";
  }
  if (i==5){
    start = 1;
    audio.play();
    document.getElementById("textinfo").style.visibility = "hidden";
    document.getElementById("next").textContent = note;
  }
};

function getText(){
  document.getElementById("textinfo").textContent = textsArr[i];
}
