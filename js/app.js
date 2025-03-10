
// Declaring Variables

// query selectors for main buttons 
const noun1 = document.querySelector("#noun1");
const verb2 = document.querySelector("#verb2");
const adj3 = document.querySelector("#adj3");
const noun4 = document.querySelector("#noun4");
const comp5 = document.querySelector("#comp5");

//query selectors for other buttons 
const show = document.querySelector("#show");
const random = document.querySelector("#random");
const reset = document.querySelector("#reset");

//query selectors for p tag to display choosen words
const getNoun1 = document.querySelector("#chooseNoun1");
const getVerb2 = document.querySelector("#chooseVerb2");
const getAdj3 = document.querySelector("#chooseAdj3");
const getNoun4 = document.querySelector("#chooseNoun4");
const getComp5 = document.querySelector("#chooseComp5");
const getStory = document.querySelector("#story");

//var for pre-defined arrays
var nounsArray = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var verbsArray = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjsArray = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a sad"];
var nouns4Array = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var compsArray = ["on the moon", "on the chair", "in my spaguetti", "in my soup", "on the grass", "in my shoes"];

//var for count to grab array elements
var countNounsArray = nounsArray.length;
var countVerbsArray = verbsArray.length;
var countAdjsArray = adjsArray.length;
var countNouns4Array = nouns4Array.length;
var countCompsArray = compsArray.length;

//Image selectors

// col 1 - Nouns
var womanImg = document.querySelector("#woman");
var turkeyImg = document.querySelector("#turkey");
var dadImg = document.querySelector("#dad");
var dogImg = document.querySelector("#dog");
var teacherImg = document.querySelector("#teacher");
var elephantImg = document.querySelector("#elephant");
var catImg = document.querySelector("#cat");

//col 2 - Verbs
var satImg = document.querySelector("#sat");
var eatImg = document.querySelector("#eat");
var danceImg = document.querySelector("#dance");
var sawImg = document.querySelector("#saw");
var dislikeImg = document.querySelector("#dislike");
var kissImg = document.querySelector("#kiss");

//col 3 - Adjectives
var funnyImg = document.querySelector("#funny");
var scaryImg = document.querySelector("#scary");
var goofyImg = document.querySelector("#goofy");
var slimyImg = document.querySelector("#slimy");
var barkImg = document.querySelector("#bark");
var sadImg = document.querySelector("#sad");

//col 4 - Nouns
var goatImg = document.querySelector("#goat");
var monkeyImg = document.querySelector("#monkey");
var fishImg = document.querySelector("#fish");
var cowImg = document.querySelector("#cow");
var frogImg = document.querySelector("#frog");
var bugImg = document.querySelector("#bug");
var wormImg = document.querySelector("#worm");

//col 5 - Complements
var moonImg = document.querySelector("#moon");
var chairImg = document.querySelector("#chair");
var spaghettiImg = document.querySelector("#spaghetti");
var soupImg = document.querySelector("#soup");
var grassImg = document.querySelector("#grass");
var shoesImg = document.querySelector("#shoes");

// Functions

//to handle col 1 - noun selection
function noun1_onclick() {
    // variable to get array element and displaying it 
    var displayNoun1ArrayElement = nounsArray[(Math.floor(Math.random() * countNounsArray))];
    
    //reset background color of images
    turkeyImg.style.backgroundColor = 'transparent';
    womanImg.style.backgroundColor = 'transparent';
    dadImg.style.backgroundColor = 'transparent';
    dogImg.style.backgroundColor = 'transparent';
    teacherImg.style.backgroundColor = 'transparent';
    elephantImg.style.backgroundColor = 'transparent';
    catImg.style.backgroundColor = 'transparent';

    //conditional to highlight the image according to the choosen noum
    console.log(displayNoun1ArrayElement)
    if (displayNoun1ArrayElement == "The turkey")
        {
            turkeyImg.style.backgroundColor = 'red';
        }
    
    else if (displayNoun1ArrayElement == "Mom")
        {
            womanImg.style.backgroundColor = 'red';
        }
    else if (displayNoun1ArrayElement == "Dad")
        {
            dadImg.style.backgroundColor = 'red';
        }
    else if (displayNoun1ArrayElement == "The dog")
        {
            dogImg.style.backgroundColor = 'red';
        }
    else if (displayNoun1ArrayElement == "My teacher")
        {
            teacherImg.style.backgroundColor = 'red';
        }
    else if (displayNoun1ArrayElement == "The elephant")
        {
            elephantImg.style.backgroundColor = 'red';
        }
    else if (displayNoun1ArrayElement == "The cat")
        {
            catImg.style.backgroundColor = 'red';
        }

    getNoun1.textContent = displayNoun1ArrayElement;
}

//col 2
function verb2_onclick() {
    var displayVerbArrayElement = verbsArray[(Math.floor(Math.random() * countVerbsArray))];
    satImg.style.backgroundColor = 'transparent';
    eatImg.style.backgroundColor = 'transparent';
    danceImg.style.backgroundColor = 'transparent';
    sawImg.style.backgroundColor = 'transparent';
    dislikeImg.style.backgroundColor = 'transparent';
    kissImg.style.backgroundColor = 'transparent';
    
    console.log(displayVerbArrayElement)
    if (displayVerbArrayElement == "sat on")
        {
            satImg.style.backgroundColor = 'red';
        }
    
    else if (displayVerbArrayElement == "ate")
        {
            eatImg.style.backgroundColor = 'red';
        }
    else if (displayVerbArrayElement == "danced with")
        {
            danceImg.style.backgroundColor = 'red';
        }
    else if (displayVerbArrayElement == "saw")
        {
            sawImg.style.backgroundColor = 'red';
        }
    else if (displayVerbArrayElement == "doesn't like")
        {
            dislikeImg.style.backgroundColor = 'red';
        }
    else if (displayVerbArrayElement == "kissed")
        {
            kissImg.style.backgroundColor = 'red';
        }

    getVerb2.textContent = displayVerbArrayElement;
}

//col 3
function adj3_onclick() {
    var displayAdjArrayElement = adjsArray[(Math.floor(Math.random() * countAdjsArray))];
    funnyImg.style.backgroundColor = 'transparent';
    scaryImg.style.backgroundColor = 'transparent';
    goofyImg.style.backgroundColor = 'transparent';
    slimyImg.style.backgroundColor = 'transparent';
    barkImg.style.backgroundColor = 'transparent';
    sadImg.style.backgroundColor = 'transparent';

    console.log(displayAdjArrayElement)
    if (displayAdjArrayElement == "a funny")
        {
            funnyImg.style.backgroundColor = 'red';
        }
    
    else if (displayAdjArrayElement == "a scary")
        {
            scaryImg.style.backgroundColor = 'red';
        }
    else if (displayAdjArrayElement == "a goofy")
        {
            goofyImg.style.backgroundColor = 'red';
        }
    else if (displayAdjArrayElement == "a slimy")
        {
            slimyImg.style.backgroundColor = 'red';
        }
    else if (displayAdjArrayElement == "a barking")
        {
            barkImg.style.backgroundColor = 'red';
        }
    else if (displayAdjArrayElement == "a sad")
        {
            sadImg.style.backgroundColor = 'red';
        }

    getAdj3.textContent = displayAdjArrayElement;
}

//col4
function noun4_onclick() {
    var displayNoun4ArrayElement = nouns4Array[(Math.floor(Math.random() * countNouns4Array))];
    goatImg.style.backgroundColor = 'transparent';
    monkeyImg.style.backgroundColor = 'transparent';
    fishImg.style.backgroundColor = 'transparent';
    cowImg.style.backgroundColor = 'transparent';
    frogImg.style.backgroundColor = 'transparent';
    bugImg.style.backgroundColor = 'transparent';
    wormImg.style.backgroundColor = 'transparent';

    console.log(displayNoun4ArrayElement)
    if (displayNoun4ArrayElement == "goat")
        {
            goatImg.style.backgroundColor = 'red';
        }
    
    else if (displayNoun4ArrayElement == "monkey")
        {
            monkeyImg.style.backgroundColor = 'red';
        }
    else if (displayNoun4ArrayElement == "fish")
        {
            fishImg.style.backgroundColor = 'red';
        }
    else if (displayNoun4ArrayElement == "cow")
        {
            cowImg.style.backgroundColor = 'red';
        }
    else if (displayNoun4ArrayElement == "frog")
        {
            frogImg.style.backgroundColor = 'red';
        }
    else if (displayNoun4ArrayElement == "bug")
        {
            bugImg.style.backgroundColor = 'red';
        }
    else if (displayNoun4ArrayElement == "worm")
        {
            wormImg.style.backgroundColor = 'red';
        }  

    getNoun4.textContent = displayNoun4ArrayElement;
}

//col5
function comp5_onclick() {
    var displayCompArrayElement = compsArray[(Math.floor(Math.random() * countCompsArray))];
    moonImg.style.backgroundColor = 'transparent';
    chairImg.style.backgroundColor = 'transparent';
    spaghettiImg.style.backgroundColor = 'transparent';
    soupImg.style.backgroundColor = 'transparent';
    grassImg.style.backgroundColor = 'transparent';
    shoesImg.style.backgroundColor = 'transparent';

    console.log(displayCompArrayElement)
    if (displayCompArrayElement == "on the moon")
        {
            moonImg.style.backgroundColor = 'red';
        }
    
    else if (displayCompArrayElement == "on the chair")
        {
            chairImg.style.backgroundColor = 'red';
        }
    
    else if (displayCompArrayElement == "in my spaguetti")
        {
            spaghettiImg.style.backgroundColor = 'red';
        }
    
    else if (displayCompArrayElement == "in my soup")
        {
            soupImg.style.backgroundColor = 'red';
        }
        
    else if (displayCompArrayElement == "on the grass")
        {
            grassImg.style.backgroundColor = 'red';
        }
    
    else if (displayCompArrayElement == "in my shoes")
        {
            shoesImg.style.backgroundColor = 'red';
        }

    getComp5.textContent = displayCompArrayElement;
}

// show story button 
function show_onclick() {
    story.textContent = getNoun1.textContent + " " + getVerb2.textContent + " " + getAdj3.textContent + " " + getNoun4.textContent + " " + getComp5.textContent + ".";
}

// grabbing random element from arrays, concatenate and display
function random_onclick() {
    var displayNoun1ArrayElement = nounsArray[(Math.floor(Math.random() * countNounsArray))];
    var displayVerbArrayElement = verbsArray[(Math.floor(Math.random() * countVerbsArray))];
    var displayAdjArrayElement = adjsArray[(Math.floor(Math.random() * countAdjsArray))];
    var displayNoun4ArrayElement = nouns4Array[(Math.floor(Math.random() * countNouns4Array))];
    var displayCompArrayElement = compsArray[(Math.floor(Math.random() * countCompsArray))];
    var stringConcatenation = displayNoun1ArrayElement + " " + displayVerbArrayElement + " " + displayAdjArrayElement + " " + displayNoun4ArrayElement + " " + displayCompArrayElement;
    story.textContent = stringConcatenation; 
    console.log(stringConcatenation);   
}

//reset button
function reset_onclick() {
    //reset text
    getNoun1.textContent = "";  
    getVerb2.textContent = "";
    getAdj3.textContent = "";
    getNoun4.textContent = "";
    getComp5.textContent = "";
    getStory.textContent = "";

    //reset images col-1
    turkeyImg.style.backgroundColor = 'transparent';
    womanImg.style.backgroundColor = 'transparent';
    dadImg.style.backgroundColor = 'transparent';
    dogImg.style.backgroundColor = 'transparent';
    teacherImg.style.backgroundColor = 'transparent';
    elephantImg.style.backgroundColor = 'transparent';
    catImg.style.backgroundColor = 'transparent';

    //reset images col-2
    satImg.style.backgroundColor = 'transparent';
    eatImg.style.backgroundColor = 'transparent';
    danceImg.style.backgroundColor = 'transparent';
    sawImg.style.backgroundColor = 'transparent';
    dislikeImg.style.backgroundColor = 'transparent';
    kissImg.style.backgroundColor = 'transparent';

    //reset images col-3
    funnyImg.style.backgroundColor = 'transparent';
    scaryImg.style.backgroundColor = 'transparent';
    goofyImg.style.backgroundColor = 'transparent';
    slimyImg.style.backgroundColor = 'transparent';
    barkImg.style.backgroundColor = 'transparent';
    sadImg.style.backgroundColor = 'transparent';

    //reset images col-4
    goatImg.style.backgroundColor = 'transparent';
    monkeyImg.style.backgroundColor = 'transparent';
    fishImg.style.backgroundColor = 'transparent';
    cowImg.style.backgroundColor = 'transparent';
    frogImg.style.backgroundColor = 'transparent';
    bugImg.style.backgroundColor = 'transparent';
    wormImg.style.backgroundColor = 'transparent';

    //reset images col-5
    moonImg.style.backgroundColor = 'transparent';
    chairImg.style.backgroundColor = 'transparent';
    spaghettiImg.style.backgroundColor = 'transparent';
    soupImg.style.backgroundColor = 'transparent';
    grassImg.style.backgroundColor = 'transparent';
    shoesImg.style.backgroundColor = 'transparent';
}

// Event Listeners
noun1.addEventListener("click", noun1_onclick);
verb2.addEventListener("click", verb2_onclick);
adj3.addEventListener("click", adj3_onclick);
noun4.addEventListener("click", noun4_onclick);
comp5.addEventListener("click", comp5_onclick);
show.addEventListener("click", show_onclick);
random.addEventListener("click", random_onclick);
reset.addEventListener("click", reset_onclick);
