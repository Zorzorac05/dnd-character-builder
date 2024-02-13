//fetch("https://youtube.googleapis.com/youtube/v3/playlists?key=AIzaSyCXMsxFGkkJjCZmQmL7b1zKT0XQ-NBiCIE")

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
    var player = localStorage.getItem("player");
    var hp;
    var ac;
    var conMod;
    console.log(player.con);

    
    //finds con mod based on con score entered
    if(player.con > 18){
        conMod = 5;
    }else if(player.con > 16){
        conMod = 4;
    }else if(player.con > 14){
        conMod = 3;
    }else if(player.con > 12){
        conMod = 2;
    }else if(player.con > 10){
        conMod = 1;
    }else if(player.con >8){
        conMod = 0;
    }else if(player.con > 6){
        conMod = -1;
    }else{
        conMod = -2;
    }

    //statments to calculate player hp based on input
    if(player.charClass == "barbarian"){
        hp = (7 * (player.level - 1)) + (conMod * player.level) + 12;
    }else if(player.charClass == "fighter" || player.charClass == "paladin"){
        hp = (6 * (player.level - 1)) + (conMod * player.level) + 10;
    }else if(player.charClass == "bard" || player.charClass == "cleric" || player.charClass == "druid" || player.charClass == "monk" || player.charClass == "rouge" || player.charClass == "sorcerer" || player.charClass == "warlock"){
        hp = (5 * (player.level - 1)) + (conMod * player.level) + 8;
    }else if(player.charClass == "wizard"){
        hp = (4 * (player.level - 1)) + (conMod * player.level) + 6;
    }else {
        hp = 1;
    }

    //fills in the player info
    $("#level").text("Level: " + player.level);
    $("#class").text("Class: " + player.charClass);
    $("#hp").text("HP: " + hp);
    $("#ac").text("AC: " + ac);
    $("#str").text("Str: " + player.str);
    $("#dex").text("Dex: " + player.dex);
    $("#con").text("Con: " + player.con);
    $("#int").text("Int: " + player.int);
    $("#wis").text("wis: " + player.wis);
    $("#cha").text("cha: " + player.cha);
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

function compare() {
    console.log("hello");

}

//fuction called when the user clicks the create buttoin on the index page
$("#create").on("click", function() {
    //gets the info from the drop down menus and stores the values in the global vars
    var player = {
        charClass: $("#charClass ").val(),
        level: $("#charLevel").val(),
        str: $("#charStr").val(),
        dex: $("#charDex").val(),
        con: $("#charCon").val(),
        int: $("#charInt").val(),
        wis: $("#charWis").val(),
        cha: $("#charCha").val()
    };
    //fills player info in local storage
    localStorage.setItem("player", JSON.stringify(player));
    
    //takes the user to the 2nd page
    window.location.href = "secondPage.html"
});

fillStats();

//on click event run the function to fill in the enemy info then once the info is filled run a compare
$("#generate").on("click", function(){
    enemyStats();
    compare();
    
});