//console.log("hello!");

const synth = window.speechSynthesis;

document.querySelector("#my-button").onclick = () => {
	console.log("button clicked");

	// let read = document.querySelector("#episode").value;
  let read = "I was dreaming about quietness. I see quietness as a priority. I forget when the last time is for me to enjoy this kind of priority. I found myself becoming sensitive to sound when I was a sophomore in college. And I started to be suffered from insomnia. Because of the noises, I couldn’t sleep. And that’s not the whole story. When I was awakened by the sound, or I was struggling to sleep or to pay attention to certain things because of the sound, I become mad and irritable. I ask myself every night, why can’t I sleep? When is the last time I sleep while in a quiet environment? To anywhere I go, I hear those annoying sounds. It starts from the sound produced by a human. The sound from my roommates.The sound from the children who live upstairs. Then there are machine-generated noises following me everywhere. The sound from the street.The sound from the refrigerator.Noises. Noises. Noises. Is this world really that loud? Have I been changed or the world has been changed? I remember when I sought help from a psychologist. He said that one thing I should consider is I am not just mad at the noises. I am mad at the people who are not considerate. I understand so I was trying to tell myself they do not intend to generate those sounds to interrupt my sleep. I told myself every day but I still suffered. If that’s human-generated voices, I try to talk to them. If that’s machine-generated sound, I try to talk to people who are in charge of that. But I hardly get what I want. I think the only way I can free myself from noises and insomnia is just me. Besides talking to others about my feelings, I spent so much money on soundproof products. Fortunately, I found earbuds which work great, though they are quite large for my ears making me a little bit uncomfortable while sleeping. But they bring me the priority I am seeking for a long time. Quietness. My sound-sensitive journey continues. I miss the days when I don’t need the earbuds to sleep. I miss the days when I don’t feel anger when I hear noises during the day or night. "
  speak(read);

};




const speak = (read) => {
	if (synth.speaking) {
		console.error("it's speaking already");
		return;
	}

	let utterThis = new SpeechSynthesisUtterance(read);
  utterThis.lang = "en-IE";
  // utterThis.lang = "zh-CN";
  utterThis.pitch = 1.4;
  utterThis.rate = 0.75;
	synth.speak(utterThis);
};
