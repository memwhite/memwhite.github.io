//alert("Hello from script-12.js");
/*
var batwing = {
	status: "Ready",
	rescueBatman: function(){
		document.write("Locating his transponder...initiating launch...");
	}
}

//if(batwing.status === "Ready"){
//	batwing.rescueBatman();
}

var utilities = {
	printAllMembers : function(targetObject){
		for(i in targetObject){
			document.write("<br/>" + targetObject[i]);
		}
	}
}

//utilities.printAllMembers(batwing);

//var i_am_empty = { };
//utilities.printAllMembers(i_am_empty); //this won't print anything right now cuz there isn't anything in the empty var
*/

var planet = {
	id	: 34, 
	name : "Imtempesta Nox",
	faction: {
		factionId: 2, 
		name: "Nex",
		notification: function(){
			document.write("Nex alliance...unite!");
		}
	},
	cities: [
		{ locationId: 15, name: "Gladius"}, 
		{ locationId: 16, name: "Chalybs"},
		{ locationId: 17, name: "Ensis"}
	]
};

//planet.faction.notification();
//document.write(planet.cities[1].name);

/*
//This is an example of renaming something inside the object literal
document.write("<br/>" + planet.name);
planet.name = "Vultus";
document.write("<br/>" + planet.name);

//this assigns the variable z to the whole object literal and then you can call things from it
var z = planet;
document.write(z.name);


//adding additional members to object literals
if(typeof planet.defense === "undefined"){ //this lines makes sure you haven't already defined the word defense earlier in your code
	planet.defense = "Ion Canon";
}

document.write(planet.defense);



for (member in planet){
	document.write("<br/>" + member + " ==> " + planet[member]);
}

*/
//this is called a constructor, which is why you have a function, set the properties at the time of construction//
//this is a bit of a rare way to do it
function car(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
}

var myCar = new car("Eagle", "Talon TSi", 1993);
var myOtherCar = new car("Dodge", "Dart", 1971);

alert(myCar.model);
alert(myOtherCar.model);














