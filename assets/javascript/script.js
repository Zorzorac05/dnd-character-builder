//fetch("https://youtube.googleapis.com/youtube/v3/playlists?key=AIzaSyCXMsxFGkkJjCZmQmL7b1zKT0XQ-NBiCIE")
var level = 0;
var hp = 0;
var charClass = "warlock";
var ac = 0;
var str = 0;
var dex = 0;
var con = 0;
var int = 0;
var wis = 0;
var cha = 0;


//this function fills the player info
function fillStats(){
    $("#level").text("Level: " + level);
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
    $("#cr").text("Level: " + level);
    $("#ehp").text("HP: " + hp);
    $("#eac").text("AC: " + ac);
    $("#estr").text("Str: " + str);
    $("#edex").text("Dex: " + dex);
    $("#econ").text("Con: " + con);
    $("#eint").text("Int: " + int);
    $("#ewis").text("wis: " + wis);
    $("#echa").text("cha: " + cha);
}

enemyStats();
fillStats();