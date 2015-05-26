var gold;
gold = localStorage.getItem("gold");
gold = Number(gold);
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

