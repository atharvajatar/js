// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1 = document.querySelector("#noun1");
const verb = document.querySelector("#verb");
const adjective = document.querySelector("#adjective");
const noun2 = document.querySelector("#noun2");
const setting = document.querySelector("#setting");

// Constants for p tag to display query selectors
const choosenNoun1 = document.querySelector("#choosenNoun1");
const choosenVerb = document.querySelector("#choosenVerb");
const choosenAdjective = document.querySelector("#choosenAdjective");
const choosenNoun2 = document.querySelector("#choosenNoun2");
const choosenSetting = document.querySelector("#choosenSetting");

// Constants for final buttons and p tags
const playback = document.querySelector("#playback");
const random = document.querySelector("#random");
const story = document.querySelector("#story");

// Variables for pre-defined arrays
const nouns = ["Actor", "Animal", "Camera", "Day", "Eye"]; // defining nouns in an array
const verbs = ["Slide", "Run", "Watch", "Rising", "Tiny"]; //verbs in array
const adjectives = ["Lucky", "narrow", "Proud", "Sarcastic", "Clean"]; // adjectives in array
const nouns2 = ["FLower", "Dogs", "Cats", "ball", "table"]; // nouns 2 for the 2nd button
const settings = ["Mumbai", "Pune", "Toronto", "Barrie", "Ontario"]; //places in arrays

var output = document.querySelector('body p:nth-of-type(5)');
// Variables for count to grab array elements
var count = 0; // a variable to reset the count while grabbing an element from the arrays
var store, store1, store2, store3, store4; // variables to store the array chosen by the user

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
        if (count >= nouns.length) {
            count = 0;  // Reseting the count when it reaches the end of the array
          }
          var element = nouns[count];
          output.textContent = element;
         count++;
         store = element;
          }

function verb_on_click() {
    if (count >= verbs.length) {
        count = 0;  // Reseting the count when it reaches the end of the array
      }
      var element = verbs[count];
      output.textContent = element;
        count++;
        store1 = element;
      }

function adjective_on_click() {
    if (count >= adjectives.length) {
            count = 0;  // Reseting the count when it reaches the end of the array
          }
          var element = adjectives[count];
          output.textContent = element;
            count++;
            store2 = element;
            
          }


function noun2_on_click() {
    if (count >= nouns2.length) {
        count = 0;  // Reseting the count when it reaches the end of the array
      }
      var element = nouns2[count];
      output.textContent = element;
        count++;
        store3 = element;
      }


function setting_on_click() {
    if (count >= settings.length) {
        count = 0;  // Reseting the count when it reaches the end of the array
      }
      var element = settings[count];
      output.textContent = element;
        count++;
        store4 = element;
      }


// concatenate the user story and display
function playback_on_click() {
    //taking in the user outputs and concatentaing it in a sentence.
    var sentence = store + " " + store1 + " "+ store2 + " "  + store3+ " "  + store4;
    output.textContent = sentence;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    function getRandomWord(array) {
        var randomIndex = Math.floor(Math.random() * array.length); // taking random indexes within the array length and picking up elements
        return array[randomIndex]; 
      }
      var word = getRandomWord(nouns);// storing the random element in another variable
      var word1 = getRandomWord(verbs);
      var word2 = getRandomWord(adjectives);
      var word3 = getRandomWord(nouns2);
      var word4 = getRandomWord(settings);

      var randomSentence = word1 + " " + "" + word2 + " " + word3 + " " + word4; // concatenating all the variables.
      output.textContent = randomSentence;
}
function del(){
    reset();
}

/* Event Listeners
-------------------------------------------------- */
noun1.addEventListener("click", noun1_on_click);
verb.addEventListener("click", verb_on_click);
adjective.addEventListener("click", adjective_on_click);
noun2.addEventListener("click", noun2_on_click);
setting.addEventListener("click", setting_on_click);

playback.addEventListener("click", playback_on_click);
random.addEventListener("click", random_on_click);
