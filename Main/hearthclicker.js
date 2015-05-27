var gold;
gold = localStorage.getItem("gold");
gold = Number(gold);

var cards = [wisp = {name:"Wisp", picture:"images/cards/wisp.png", weight:2}, leperGnome = {name:"Leper Gnome", picture:"images/cards/leper_gnome.png", weight:2} , undertaker = {name:"Undertaker", picture:"images/cards/undertaker.png", weight:2},
angryChicken = {name:"Angry Chicken", picture:"images/cards/angry_chicken.png", weight:2}];

var playerCards = [];

function addGold(){
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
}

function showGold(){
    document.getElementById("text").innerHTML = localStorage.getItem("gold"); //shows the gold in the "text" element
}

function reset(){
    if(confirm("You're all talk, you won't reset it.")){ //asks the user if they are sure
        gold = 0; //sets the gold to 0
        localStorage.setItem("gold", 0); //sets the stored data to 0
        document.getElementById("text").innerHTML = 0; //makes the element show 0
    }
}

function buyPack(){
    if(gold >= 100){ //if they have enough gold
        gold -= 100; //subtract the gold
        if(gold < 100){ //sets the buy button to be gray if they can't buy a pack anymore
        document.getElementById("buy").src = "images/buy_button_gray.png";
        }
        localStorage.setItem("gold", gold); //saves the gold to the storage
        document.getElementById("text").innerHTML = gold; //sets the element to show the proper amount of gold
        var random = Math.round(Math.random() * (cards.length-1)); //random integer
        document.getElementById("card").src = cards[random].picture; //shows the random card to the player
        playerCards.push(cards[random]) //adds the random card to the player's deck
    }
}