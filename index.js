function showAnswer(response) {
  alert(response.data.answer);
}

let apiKey = 'fct488b6f5355e5e50b3a1a472eo74dd';
let context = 'be polite and provide a very short answer';
let prompt = 'when was the first AI created?';
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log('Processing');
axios.get(apiUrl).then(showAnswer);
