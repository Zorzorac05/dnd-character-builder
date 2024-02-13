//fetch("https://youtube.googleapis.com/youtube/v3/playlists?key=AIzaSyCXMsxFGkkJjCZmQmL7b1zKT0XQ-NBiCIE")
//player stats

// ########## Variable Definitions: ##########
var level = 0;
var charClass = "";
var ac = 0;
var str = 0;
var dex = 0;
var con = 0;
var int = 0;
var wis = 0;
var cha = 0;

//enemy stats
var enemy;
var cr = 0;
var ehp = 0;
var eac = 0;
var estr = 0;
var edex = 0;
var econ = 0;
var eint = 0;
var ewis = 0;
var echa = 0;
// ########## Application Logic: ##########

fillStats();
// ########## Function Definitions: ##########

//this function fills the player info
function fillStats(){

    console.log("fillStats ran")

    level = localStorage.getItem("charLevel");
    charClass = localStorage.getItem("charClass");
    str = localStorage.getItem("charStrength");
    dex = localStorage.getItem("charDex");
    con = localStorage.getItem("charConstitution");
    int = localStorage.getItem("characterIntell");
    wis = localStorage.getItem("charWisdom");
    cha = localStorage.getItem("charCharisma");

    //finds con mod based on con score entered
    var conMod;
    if(con > 18){
        conMod = 5;
    }else if(con > 16){
        conMod = 4;
    }else if(con > 14){
        conMod = 3;
    }else if(con > 12){
        conMod = 2;
    }else if(con > 10){
        conMod = 1;
    }else if(con > 8){
        conMod = 0;
    }else if(con > 6){
        conMod = -1;
    }else{
        conMod = -2;
    }

    //finds dex mod based on dex entrered
    var dexMod;
    if(dex > 18){
        dexMod = 5;
    }else if(dex > 16){
        dexMod = 4;
    }else if(dex > 14){
        dexMod = 3;
    }else if(dex > 12){
        dexMod = 2;
    }else if(dex > 10){
        dexMod = 1;
    }else if(dex > 8){
        dexMod = 0;
    }else if(dex > 6){
        dexMod = -1;
    }else{
        dexMod = -2;
    }

    
    if(charClass == "barbarian"){
        hp = (7 * (level - 1)) + (conMod * level) + 12;
        ac = 10 + dexMod + conMod;
    }else if(charClass == "fighter" || charClass == "paladin"){
        hp = (6 * (level - 1)) + (conMod * level) + 10;
        ac = 16;
    }else if(charClass == "bard" || charClass == "cleric" || charClass == "druid" || charClass == "monk" || charClass == "rouge" || charClass == "sorcerer" || charClass == "warlock"){
        hp = (5 * (level - 1)) + (conMod * level) + 8;
        ac = 12 + dexMod;
    }else if(charClass == "wizard"){
        hp = (4 * (level - 1)) + (conMod * level) + 6;
        ac = 10 + dexMod;
    }else {
        hp = 1;
        ac = 1;
    }

    $("#level").text("Level: " + level);
    //$("#class").text("Class: " + charClass.charAt(0).toUpperCase() + charClass.slice(1));
    $("#class").text("Class: " + charClass);
    $("#hp").text("HP: " + hp);
    $("#ac").text("AC: " + ac);
    $("#str").text("Str: " + str);
    $("#dex").text("Dex: " + dex);
    $("#con").text("Con: " + con);
    $("#int").text("Int: " + int);
    $("#wis").text("wis: " + wis);
    $("#cha").text("cha: " + cha);
}

//this fucntion fills in the info for the enemy
function enemyStats(){

    //random num gen to grab 1 of 8 monsters to fetch from
    var x = Math.floor(Math.random() * 8);
    var monster;
    if(x == 0){
        monster = "merfolk";
    }else if(x == 1){
        monster = "golbin";
    }else if(x == 2){
        monster = "magmin";
    }else if(x == 3){
        monster = "giant-toad";
    }else if(x == 4){
        monster = "centaur";
    }else if(x == 5){
        monster = "owlbear";
    }else if(x == 6){
        monster = "ghost";
    }else if(x == 7){
        monster = "xorn";
    }

    fetch("https://www.dnd5eapi.co/api/monsters/" + monster)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) { 
    console.log(data);
    
    enemy = data.name;
    $("#enemy").text(enemy);
    cr = data.challenge_rating;
    $("#cr").text("Challenge Rating: " + cr);
    ehp = data.hit_points;
    $("#ehp").text("HP: " + ehp);
    eac = data.armor_class[0].value;
    $("#eac").text("AC: " + eac);
    estr = data.strength;
    $("#estr").text("Str: " + estr);
    edex = data.dexterity;
    $("#edex").text("Dex: " + edex);
    econ = data.constitution;
    $("#econ").text("Con: " + econ);
    eint = data.intelligence;
    $("#eint").text("Int: " + eint);
    ewis = data.wisdom;
    $("#ewis").text("wis: " + ewis);
    echa = data.charisma;
    $("#echa").text("cha: " + echa);
    })

    
}


function compare() {
    console.log("hello");

}

function getSelectedCharClass(){
    return $("#char-class").val();
}

function getSelectedCharLevel(){
    return $("#char-level").val();
}

function getSelectedCharStrength(){
    return $("#char-strength").val();
}

function getSelectedCharDex(){
    return $("#char-dex").val();
}

function getSelectedCharConstitution(){
    return $("#char-constitution").val();
}

function getSelectedCharIntell(){
    return $("#character-intell").val();
}

function getSelectedCharWisdom(){
    return $("#char-wisdom").val();
}

function getSelectedCharCharisma(){
    return $("#char-charisma").val();
}

//fuction called when the user clicks the create buttoin on the index page
$("#create").on("click", function() {
    //gets the info from the drop down menus and stores the values in the global vars
    localStorage.setItem("charClass", getSelectedCharClass());
    localStorage.setItem("charLevel", getSelectedCharLevel());
    localStorage.setItem("charStrength", getSelectedCharStrength());
    localStorage.setItem("charDex", getSelectedCharDex());
    localStorage.setItem("charConstitution", getSelectedCharConstitution());
    localStorage.setItem("characterIntell", getSelectedCharIntell());
    localStorage.setItem("charWisdom", getSelectedCharWisdom());
    localStorage.setItem("charCharisma", getSelectedCharCharisma());

    //takes the user to the 2nd page
    window.location.href = "secondPage.html"
});

//on click event run the function to fill in the enemy info then once the info is filled run a compare
$("#generate").on("click", function(){
    enemyStats();
    compare();
});