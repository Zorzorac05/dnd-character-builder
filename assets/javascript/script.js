//fetch("https://youtube.googleapis.com/youtube/v3/playlists?key=AIzaSyCXMsxFGkkJjCZmQmL7b1zKT0XQ-NBiCIE")
//player stats
var level = 3;
var hp = 0;
var charClass = "warlock";
var ac = 0;
var str = 0;
var dex = 0;
var con = 0;
var int = 0;
var wis = 0;
var cha = 0;

//enemy stats
var cr = 0;
var ehp = 0;
var eac = 0;
var estr = 0;
var edex = 0;
var econ = 0;
var eint = 0;
var ewis = 0;
var echa = 0;


//this function fills the player info
function fillStats(){
    if(charClass == "barbarian"){
        hp = (7 * (level - 1)) + (con * level) + 12;
    }else if(charClass == "fighter" || charClass == "paladin"){
        hp = (6 * (level - 1)) + (con * level) + 10;
    }else if(charClass == "bard" || charClass == "cleric" || charClass == "druid" || charClass == "monk" || charClass == "rouge" || charClass == "sorcerer" || charClass == "warlock"){
        hp = (5 * (level - 1)) + (con * level) + 8;
    }else if(charClass == "wizard"){
        hp = (4 * (level - 1)) + (con * level) + 6;
    }else {
        hp = 1;
    }
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
    //cr = ;
    $("#cr").text("Level: " + cr);
    //ehp = ;
    $("#ehp").text("HP: " + ehp);
    //eac = ;
    $("#eac").text("AC: " + eac);
    //estr = ;
    $("#estr").text("Str: " + estr);
    //edex = ;
    $("#edex").text("Dex: " + edex);
    //econ = ;
    $("#econ").text("Con: " + econ);
    //eint = ;
    $("#eint").text("Int: " + eint);
    //ewis = ;
    $("#ewis").text("wis: " + ewis);
    //echa = ;
    $("#echa").text("cha: " + echa);
}

fillStats();

function compare() {
    console.log("hello");

}

fillStats();

//fuction called when the user clicks the create buttoin on the index page
$("#create").on("click", function() {
    //gets the info from the drop down menus and stores the values in the global vars

    //takes the user to the 2nd page
    window.location.href = "secondPage.html"
});

//on click event run the function to fill in the enemy info then once the info is filled run a compare
$("#generate").on("click", function(){
    enemyStats();
    compare();
});