var gold;
gold = localStorage.getItem("gold");
gold = Number(gold);
var cards = ["Wisp", "Leper Gnome", "Undertaker","Angry Chicken"];
var pictures = ["images/cards/wisp.png","images/cards/leper_gnome.png","images/cards/undertaker.png","images/cards/angry_chicken.png"];
var cardWeight = [2, 2, 2, 2]

var playerCards = [];
var playerCardWeight = [];

function addGold(){
	if (gold == null){
        gold = 1;
	}
	else{
	    gold += 1;
	}
	document.getElementById("text").innerHTML = gold;
	if (gold >= 1){
		document.getElementById("buy").src = "images/buy_button.png";
	}
}

function store(){
    localStorage.setItem("gold", gold);
}

function showGold(){
    document.getElementById("text").innerHTML = localStorage.getItem("gold");
}

function reset(){
    if(confirm("You're all talk, you won't reset it.")){
        gold = 0;
        localStorage.setItem("gold", 0);
        document.getElementById("text").innerHTML = 0;
    }
}

function buyPack(){
    if(gold >= 100){
        gold -= 100;
        localStorage.setItem("gold", gold);
        document.getElementById("text").innerHTML = gold;
        var random = Math.round(Math.random() * (cards.length-1));
        playerCardWeight.push(cardWeight[random]);
        document.getElementById("card").src = pictures[random];
        playerCards.push(cards[random])
    }
}