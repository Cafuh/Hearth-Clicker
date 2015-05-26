var gold = 0;
function addGold(){
	gold += 1;
	document.getElementById("text").innerHTML = gold;
	if (gold >= 1){
			document.getElementById("buy").src = "images/buy_button.png";
	}
}

