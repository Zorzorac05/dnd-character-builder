//fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?key=AIzaSyCXMsxFGkkJjCZmQmL7b1zKT0XQ-NBiCIE")
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

var modalToggle = $("header > button");
var modal = $("#default-modal");
var modalConfirm = $("#modal-confirm")
var modalExit = $("#modal-exit")
var modalOverlay = $(".modal-overlay")

//enemy stats
var enemy;
var cr;
var ehp;
var eac;
var estr;
var edex;
var econ;
var eint;
var ewis;
var echa;
// ########## Application Logic: ##########

fillStats();
// ########## Function Definitions: ##########

//this function fills the player info
function fillStats() {

    var player = localStorage.getItem("player");
    var hp;
    var ac;
    var conMod;

    level = localStorage.getItem("charLevel");
    charClass = localStorage.getItem("charClass");;
    str = localStorage.getItem("charStrength");
    dex = localStorage.getItem("charDex");
    con = localStorage.getItem("charConstitution");
    int = localStorage.getItem("characterIntell");
    wis = localStorage.getItem("charWisdom");
    cha = localStorage.getItem("charCharisma");

    //finds con mod based on con score entered
    var conMod;
    if (con > 18) {
        conMod = 5;
    } else if (con > 16) {
        conMod = 4;
    } else if (con > 14) {
        conMod = 3;
    } else if (con > 12) {
        conMod = 2;
    } else if (con > 10) {
        conMod = 1;
    } else if (con > 8) {
        conMod = 0;
    } else if (con > 6) {
        conMod = -1;
    } else {
        conMod = -2;
    }

    //finds dex mod based on dex entrered
    var dexMod;
    if (dex > 19) {
        dexMod = 5;
    } else if (dex > 17) {
        dexMod = 4;
    } else if (dex > 15) {
        dexMod = 3;
    } else if (dex > 13) {
        dexMod = 2;
    } else if (dex > 11) {
        dexMod = 1;
    } else if (dex > 9) {
        dexMod = 0;
    } else if (dex > 7) {
        dexMod = -1;
    } else {
        dexMod = -2;
    }

    let classImgMap = {
        barbarian: "./assets/images/character/Barbarian.png",
        bard: "./assets/images/character/Bard.png",
        cleric: "./assets/images/character/Cleric.png",
        druid: "./assets/images/character/Druid.png",
        fighter: "./assets/images/character/Fighter.png",
        monk: "./assets/images/character/Monk.png",
        paladin: "./assets/images/character/Paldin.png",
        rogue: "./assets/images/character/Rogue.png",
        sorcerer: "./assets/images/character/Sorcerer.png",
        warlock: "./assets/images/character/Warlock.png",
        wizard: "./assets/images/character/Wizard.png",

    }
    let charImg = classImgMap[charClass];
    let charSelector = "#char-img-anchor";
    insertImage(charSelector, charImg, "char-img");
    $("#char-img").addClass('w-36');


    if (charClass == "barbarian") {
        hp = (7 * (level - 1)) + (conMod * level) + 12;
        ac = 10 + dexMod + conMod;
    } else if (charClass == "fighter" || charClass == "paladin") {
        hp = (6 * (level - 1)) + (conMod * level) + 10;
        ac = 16;
    } else if (charClass == "bard" || charClass == "cleric" || charClass == "druid" || charClass == "monk" || charClass == "rouge" || charClass == "sorcerer" || charClass == "warlock") {
        hp = (5 * (level - 1)) + (conMod * level) + 8;
        ac = 12 + dexMod;
    } else if (charClass == "wizard") {
        hp = (4 * (level - 1)) + (conMod * level) + 6;
        ac = 10 + dexMod;
    } else {
        hp = 1;
        ac = 1;
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
function enemyStats() {

    //random num gen to grab 1 of 8 monsters to fetch from
    var x = Math.floor(Math.random() * 8);
    var monster;
    let imgPath;
    let enemyImgSelector = "#enemy-img-anchor"
    // remove old enemy image (so you dont have more than one image)
    $("#enemy-img").remove();
    if (x == 0) {
        monster = "merfolk";
        imgPath = "./assets/images/enemies/Merfolk.png";
        insertImage(enemyImgSelector, imgPath, "enemy-img");
    } else if (x == 1) {
        monster = "goblin";
        imgPath = "./assets/images/enemies/Goblin.png";
        insertImage(enemyImgSelector, imgPath, "enemy-img");
    } else if (x == 2) {
        monster = "magmin";
        imgPath = "./assets/images/enemies/Magmin.png";
        insertImage(enemyImgSelector, imgPath, "enemy-img");
    } else if (x == 3) {
        monster = "giant-toad";
        imgPath = "./assets/images/enemies/Giant Toad.png";
        insertImage(enemyImgSelector, imgPath, "enemy-img");
    } else if (x == 4) {
        monster = "centaur";
        imgPath = "./assets/images/enemies/Centaur.png";
        insertImage(enemyImgSelector, imgPath, "enemy-img");
    } else if (x == 5) {
        monster = "owlbear";
        imgPath = "./assets/images/enemies/OwlBear.png";
        insertImage(enemyImgSelector, imgPath, "enemy-img");
    } else if (x == 6) {
        monster = "ghost";
        imgPath = "./assets/images/enemies/Ghost.png";
        insertImage(enemyImgSelector, imgPath, "enemy-img");
    } else if (x == 7) {
        monster = "xorn";
        imgPath = "./assets/images/enemies/Xorn.png";
        insertImage(enemyImgSelector, imgPath, "enemy-img");
    }

    $("#enemy-img").addClass('w-44');

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
            compare();
        })


}


function compare() {
    //var to hold how many ways you are better than your opponent
    var stackUp = [];
    //compare hp
    if (hp > ehp) {
        stackUp[0] = true;
    } else {
        stackUp[0] = false;
    }
    //compae ac
    if (ac > eac) {
        stackUp[1] = true;
    } else {
        stackUp[1] = false;
    }
    //compare strength
    if (str > estr) {
        stackUp[2] = true;
    } else {
        stackUp[2] = false;
    }
    //compare dexterity
    if (dex > edex) {
        stackUp[3] = true;
    } else {
        stackUp[3] = false;
    }
    //compare con
    if (con > econ) {
        stackUp[4] = true;
    } else {
        stackUp[4] = false;
    }
    //compare int
    if (int > eint) {
        stackUp[5] = true;
    } else {
        stackUp[5] = false;
    }
    //compare wisdom
    if (wis > ewis) {
        stackUp[6] = true;
    } else {
        stackUp[6] = false;
    }
    //compare charisma
    if (cha > echa) {
        stackUp[7] = true;
    } else {
        stackUp[7] = false;
    }
    var numofTrue = 0;
    for (var i = 0; i < stackUp.length; i++) {
        if (stackUp[i] == true) {
            numofTrue++;
        }
    }
    if (numofTrue >= (stackUp.length + 1) / 2) {
        $("#results").text("You win!");
        $("#emoji").text("🎊🎉");
    } else {
        $("#results").text("You lose!");
        $("#emoji").text("😱☠️");
    }

}

function getSelectedCharClass() {
    return $("#char-class").val();
}

function getSelectedCharLevel() {
    return $("#char-level").val();
}

function getSelectedCharStrength() {
    return $("#char-strength").val();
}

function getSelectedCharDex() {
    return $("#char-dex").val();
}

function getSelectedCharConstitution() {
    return $("#char-constitution").val();
}

function getSelectedCharIntell() {
    return $("#character-intell").val();
}

function getSelectedCharWisdom() {
    return $("#char-wisdom").val();
}

function getSelectedCharCharisma() {
    return $("#char-charisma").val();
}

function insertImage(selector, imagePath, imgId) {
    // Create an image element
    let img = $('<img>', {
        src: imagePath,
        alt: 'Image could not be loaded',
        id: imgId
    });

    // Insert the image into the specified element
    $(selector).append(img);
}

//fuction called when the user clicks the create buttoin on the index page
$("#create").on("click", function () {
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

//function to get list of songs from a playlist on first page
function playlistOne() {
    fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PL3XFhex_Ve-wFXYEjRJgp4R2su9WIx2Zq&key=AIzaSyCXMsxFGkkJjCZmQmL7b1zKT0XQ-NBiCIE')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        
        for (var i = 0; i < data.items.length; i++) {
            var p = $("<p>");
            p.text(data.items[i].snippet.title);
            $("#songListOne").append(p);
        }
    });
}

function playlistTwo() {
    fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PL3XFhex_Ve-xSmCSyds7SxPHnMgfNes7y&key=AIzaSyCXMsxFGkkJjCZmQmL7b1zKT0XQ-NBiCIE')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        
        for (var i = 0; i < data.items.length; i++) {
            var p = $("<p>");
            p.text(data.items[i].snippet.title);
            $("#songListTwo").append(p);
        }
    });
}

playlistOne();
playlistTwo();

//on click event run the function to fill in the enemy info then once the info is filled run a compare
$("#generate").on("click", function () {
    $("#enemy-cont").removeClass('hidden')
    enemyStats();
    compare();

});

$("#goBack").on("click", function () {
    window.location.href = "index.html"
});


modalConfirm.on('click', function () {
    modal.addClass('hidden');
    modalOverlay.addClass('hidden');
});

modalExit.on('click', function () {
    modal.addClass('hidden');
    modalOverlay.addClass('hidden');
});

modalToggle.on('click', function () {
    modal.removeClass('hidden');
    modalOverlay.removeClass('hidden');
});