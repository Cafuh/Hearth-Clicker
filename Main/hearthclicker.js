var gold;
gold = localStorage.getItem("gold");
gold = Number(gold);
var rank = localStorage.getItem("rank");
if (rank == null){
    rank = 25;
}
document.getElementById("rank").src= "images/ranks/rank" + rank + ".png";

var deck = JSON.parse(localStorage.getItem("deck"));
if(deck[0] == null){
    deck = [];
}


function addGold(){
    playClickSound();
	if (gold == null){ //if the player doesn't have any saved gold data
        gold = 1;
	}
	else{ //if they do
	    gold += 1;
	}
	document.getElementById("text").innerHTML = gold; //shows the gold variable in the element with id "text"
	if (gold >= 100){ //lights up the buy button if they have greater than or equal to 100 gold
		document.getElementById("buy").src = "images/buy_button.png";
	}
}

function store(){
    localStorage.setItem("gold", gold); //saves the gold in localStorage under the name "gold"
    localStorage["deck"] = JSON.stringify(deck);
}

function showGold(){
    document.getElementById("text").innerHTML = localStorage.getItem("gold"); //shows the gold in the "text" element
}

function reset(){
    if(confirm("You're all talk, you won't reset it.")){ //asks the user if they are sure
        gold = 0; //sets the gold to 0
        localStorage.setItem("gold", 0); //sets the stored data to 0
        document.getElementById("text").innerHTML = "0"; //makes the element show 0
        localStorage.setItem("rank", 25);//resets the rank to 25 in the storage
        rank = 25; //resets the local rank variable
        document.getElementById("rank").src= "images/ranks/rank" + rank + ".png"; //displays the proper rank icon
        deck = [];
        localStorage.clear("deck");


    }
}

function buyPack(){
    if(gold >= 1){ //if they have enough gold
        playBuySound();
        gold -= 1; //subtract the gold
        if(gold < 100){ //sets the buy button to be gray if they can't buy a pack anymore
            document.getElementById("buy").src = "images/buy_button_gray.png";
        }
        localStorage.setItem("gold", gold); //saves the gold to the storage
        document.getElementById("text").innerHTML = gold; //sets the element to show the proper amount of gold
        var random = Math.round(Math.random() * (cards.length-1)); //random integer
        card = cards[random];
        document.getElementById("card").src = card.picture; //shows the random card to the player
        deck.push(card);


    }
}

function calculateWinNumber(){
    var num = 25 - rank;
    var winNumber = 100 + (num * num * num);
}

function rankUp(){
    if(rank <= 25 && rank > 1) { //if the rank is a rank that can rank up (2-25)
        rank -= 1; //increases the rank by 1 (ex: 25 -> 24)
        localStorage.setItem("rank", rank); //saves the rank to the storage
        document.getElementById("rank").src = "images/ranks/rank" + rank + ".png"; //displays the proper rank icon
    }
}

function showDeck(){
    var show = sortDeck();
    var deck = document.getElementById("deck");
    for(i = 0;i < show.length;i++) {
        card = document.createElement("img");
        card.setAttribute("src", show[i].picture);
        card.setAttribute("draggable", "false");
        card.setAttribute("alt", show[i].name);
        deck.appendChild(card);
    }
    show = [];
}

function sortDeck(inp){ //this function is too long and bad
    var sort = JSON.parse(localStorage.getItem("deck"));
    var oneMana = [];
    var twoMana = [];
    var threeMana = [];
    var fourMana = [];
    var fiveMana = [];
    var sixMana = [];
    var sevenMana = [];
    var eightMana = [];
    var nineMana = [];
    var tenMana = [];
    var twelveMana = [];
    var twentyMana = [];
    for(i = 0;i < sort.length;i++) {
        var card = sort[i];
        if(Number(card.mana) == 1)
            oneMana.push(card);
        if(Number(card.mana) == 2)
            twoMana.push(card);
        if(Number(card.mana) == 3)
            threeMana.push(card);
        if(Number(card.mana) == 4)
            fourMana.push(card);
        if(Number(card.mana) == 5)
            fiveMana.push(card);
        if(Number(card.mana) == 6)
            sixMana.push(card);
        if(Number(card.mana) == 7)
            sevenMana.push(card);
        if(Number(card.mana) == 8)
            eightMana.push(card);
        if(Number(card.mana) == 9)
            nineMana.push(card);
        if(Number(card.mana) == 10)
            tenMana.push(card);
        if(Number(card.mana) == 12)
            twelveMana.push(card);
        if(Number(card.mana) == 20)
            twentyMana.push(card);
    }
    return fin = oneMana.concat(twoMana).concat(threeMana).concat(fourMana).concat(fiveMana).concat(sixMana).concat(sevenMana).concat(eightMana).concat(nineMana).concat(tenMana).concat(twelveMana).concat(twentyMana);
}



function playClickSound(){
    var audio = new Audio("sounds/board_common_dirt_poke_1.ogg");
    audio.volume = 0.05;
    audio.play();
}

function playBuySound(){
    var audio = new Audio("sounds/victory_screen_start.ogg");
    audio.play();
}