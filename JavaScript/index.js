function displayJoke(response) {
  console.log(response.data.answer);

  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 40,
  });
}

function generateJoke(event) {
  event.preventDefault();

  let apiKey = "69dcf419bt9cfo28b5060ce003c123a4";

  let context =
    "You are a funny AI Assistant that tells short and sweet jokes. The joke must be provided in HTML format. Example: <p>this is a joke</p>";
  let prompt = "Generate a short and unique joke about portuguese people. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke");

  jokeElement.innerHTML = "Generating a new joke for you... Please wait";

  console.log("called the AI api");
  axios.get(apiUrl).then(displayJoke);
}

let generatorButton = document.querySelector("#generate-joke-button");
generatorButton.addEventListener("click", generateJoke);
