var answer = document.getElementById("answer");
var button = document.getElementById("button");
var input = document.getElementById("input");

let answers = [
   "Indubitably",
   "Yes, at a price",
   "I would bet your life on it",
   "Oh why not, I'm feeling generous",
   "By the Plateaus of Leng, it shall be so",
   "I'll allow it",
   "Ask nicer",
   "Pointless questions relinquish pointless answers",
   "You not knowing is half my fun",
   "Limitless knowledge, and you waste it with this?",
   "Some things are best left a mystery",
   "I could tell you, but then I'd have to kill you",
   "Not today, mortal",
   "It will never come to pass",
   "I think not",
   "Only in your dreams",
   "I wouldn't hold my breath",
   "That's going to be a 'no'"
];

button.addEventListener("click", function () {
   if (input.value.length < 1) {
      alert("Please enter a question!");
   } else {
      let num = input.value.length % answers.length;
      answer.innerText = answers[num];
   }
});