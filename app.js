

function Monster(name, strength, dexterity, constitution, wisdom, intelligence, charisma) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.constitution = constitution;
    this.wisdom = wisdom;
    this.intelligence = intelligence;
    this.charisma = charisma;
}

Monster.prototype.Attack=function(){ 
	var attackValue = randomNumber();
	console.log("This is the random number: " + attackValue);
	this.strength = parseInt(this.strength) + parseInt(attackValue);
	alert("adjusted strength is :" + this.strength);
}

Person.prototype = new Monster();
Person.prototype.constructor = Person;      
function Person(name, strength, dexterity, constitution, wisdom, intelligence, charisma, playerClass){ 
	this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.constitution = constitution;
    this.wisdom = wisdom;
    this.intelligence = intelligence;
    this.charisma = charisma;
    this.playerClass = playerClass;
}

Person.prototype.Attack=function(){ 
	var dexterityValue = randomNumber();
	console.log("This is the random number: " + dexterityValue);
	this.dexterity = parseInt(this.dexterity) + parseInt(dexterityValue);
	console.log("This is the random number: " + this.dexterity);
	
	alert("adjusted dexterity is :" + this.dexterity);
}
 
function randomNumber(){
	return Math.floor(Math.random() * 20) + 1;
}

      function addMonster(){
        var Name = document.getElementById("Name");
      	console.log(Name.value);

        var strength = document.getElementById("Strength");
      console.log(strength.value);

        var dexterity = document.getElementById("dexterity");
      console.log(dexterity.value);
       
        var constitution = document.getElementById("Constitution");
      console.log(constitution.value);

        var wisdom = document.getElementById("Wisdom");
        console.log(wisdom.value);

        var intelligence = document.getElementById("Intelligence");
        console.log(intelligence.value);

        var charisma = document.getElementById("charisma");
        console.log(charisma.value);

        var playerClass = document.getElementById("Player Class (Optional)");
        console.log(playerClass.value);
        var gamePlayer;
        if (playerClass.value == "") {
        	gamePlayer = new Monster(Name.value, strength.value, dexterity.value, constitution.value, wisdom.value, intelligence.value, charisma.value);
        } else {
        	gamePlayer = new Person(Name.value, strength.value, dexterity.value, constitution.value, wisdom.value, intelligence.value, charisma.value, playerClass.value);
        }
        list.push(gamePlayer);
        updateTable(list.length, gamePlayer);

        console.log("This is the charisma" + list[0].charisma);
}

function updateTable(index, gamePlayer){
        //Update the table with the new character
        var gamePlayerTable = document.getElementById("gamePlayerTable");
        var row = gamePlayerTable.insertRow(index);
		var nameEntry = row.insertCell(0);
		var strengthEntry = row.insertCell(1);
		var dexterityEntry = row.insertCell(2);
		var constitutionEntry = row.insertCell(3);
		var wisdomEntry = row.insertCell(4);
		var intelligenceEntry = row.insertCell(5);
		var charismaEntry = row.insertCell(6);
		var playerClassEntry = row.insertCell(7);

		//Make name entry a button
		var btn = document.createElement('input');
		btn.type = "button";
		btn.className = "btn";
		btn.value = gamePlayer.name;
		btn.onclick = (
			function(gamePlayer) {
				return function() 
				{
				gamePlayer.Attack();
				}
			})(gamePlayer);
		nameEntry.appendChild(btn);

		strengthEntry.innerHTML = gamePlayer.strength;
		dexterityEntry.innerHTML = gamePlayer.dexterity;
		constitutionEntry.innerHTML = gamePlayer.constitution;
		wisdomEntry.innerHTML = gamePlayer.wisdom;
		intelligenceEntry.innerHTML = gamePlayer.intelligence;
		charismaEntry.innerHTML = gamePlayer.charisma;
		playerClassEntry.innerHTML = gamePlayer.playerClass;
}
   
var list = [];

            function getText() {
                var str = document.getElementById("dexterity");


                list.push(str.value);
                str.value = "";
                str.focus();
                var area = document.getElementById("dexterity");
                area.value = "";
                for (var i = 0; i < list.length; i++) {
                    area.value += list[i] + "\n";
                }
            }
 

