var gold;
gold = localStorage.getItem("gold");
gold = Number(gold);
var cards = ["Wisp", "Leper Gnome", "Undertaker","Angry Chicken"];
var pictures = ["images/cards/wisp.png","images/cards/leper_gnome.png","images/cards/undertaker.png","images/cards/angry_chicken.png"];
var playerCards = [];

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
    if(confirm("Are you sure you want to reset?")){
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
        document.getElementById("card").src = pictures[random];
        playerCards.push(cards[random])
    }
}

jQuery(document).ready(function() {
    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');

        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).siblings().slideUp(400);
        jQuery('.tabs ' + currentAttrValue).delay(400).slideDown(400);

        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });
});
//thanks to the guy who wrote this code at http://inspirationalpixels.com/tutorials/creating-tabs-with-html-css-and-jquery