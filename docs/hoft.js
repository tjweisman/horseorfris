var frisbeenames = ["Fiesta",
"Absolute Zero",
"Adelphos",
"Air Show",
"AK Pipeline",
"Alchemy",
"All Jeeps All Night",
"Allen's Army",
"Alloy",
"Ambiguous Grey",
"American Hyperbole",
"Animals",
"All Outta Love",
"Argo",
"Asylum",
"Autonomous",
"Auxiliary",
"Barefoot",
"Barracuda",
"Battleship",
"Bear Proof",
"Big Rock",
"Bitmap",
"Black Lung",
"Black Market",
"Blade",
"Blitzkrieg",
"Blueprint",
"Boston Baked Beans",
"Boyshe",
"Bozos",
"Buffalo Lake Effect",
"Carolina Reign",
"Cerberus",
"Charlotte Storm",
"Choco Ghost House",
"Choice City Hops",
"Citywide Special",
"Classy",
"Climax",
"Cloverleaf",
"Clue",
"Colt",
"Columbus Cocktails",
"Cosa Nostra",
"Crackle",
"Cufax",
"Dark or Light",
"Dark Star",
"Darkwing",
"Dead Reckoning",
"Delta Breeze",
"Doppler Effect",
"Dragon Army",
"Dumpster Fire",
"El Niño",
"Family Julez",
"Family Style",
"Fear and Loathing",
"Fifth Element",
"Filthy Gorgeous",
"Fire Emoji",
"Freetail",
"Fresh Grannies",
"Friday Night Couch",
"Garbage Plates",
"Grassburner",
"Green River Swordfish",
"Honey Bashfords",
"Honey Pot",
"Instant Karma",
"Interesting Tummy Birds",
"Jabba",
"LouFriendly",
"Mad Udderburn",
"Madd Dogg",
"Maeve",
"Malicious Intent",
"Mango Tree",
"Martian School",
"Midnight Whiskey",
"Minnesota Star Power",
"Mishigami",
"Mojo Jojo",
"Munch Box",
"Murmur",
"Mystik",
"Nassau",
"Oh My",
"Pandatime",
"Phoenix Uprising",
"Pine Baroness",
"Pink Pear",
"Queen Cake",
"Rabblecaddy",
"Rampage",
"Right Coast",
"Risky Business",
"Roc Paper Scissors",
"Rocket Lawnchair",
"Rougaroux",
"Rubix",
"Schweingeist",
"Serial Crusher Theory",
"ShoreBreak",
"Sir Walter Rowdy",
"Snip Snip",
"Sour Mash",
"Spirit Quest",
"Stackcats",
"Sunken Circus",
"Sweet Action",
"Syracuse Doom",
"Thundersnow",
"Tragic Magic",
"War Machine"];

var horsenames = ["Chefs",
"Jim's Orbit",
"Genuine Risk",
"Partez",
"Classic Go Go",
"Pass the Tab",
"Double Sonic",
"Habano",
"Gato Del Sol",
"Laser Light",
"Rockwall",
"Air Forbes Won",
"El Baba",
"Caveat",
"Chumming",
"Freezing Rain",
"My Mac",
"Parfaitement",
"Swale",
"Coax Me Chad",
"So Vague",
"Bedouin",
"Althea",
"Skywalker",
"Encolure",
"I Am the Game",
"Rampage",
"Badger Land",
"Mogambo",
"Groovy",
"Gulch",
"On the Line",
"Shawklit Won",
"War",
"No More Flowers",
"Forty Niner",
"Unbridled",
"Summer Squall",
"Killer Diller",
"Dr. Bobby A.",
"Quintana",
"Paulrus",
"Happy Jazz Band",
"Pistols and Roses",
"Disposal",
"Rockamundo",
"Afternoon Deelites",
"Grindstone",
"Blow Out",
"Pulpit",
"Hello",
"Concerto",
"Chilito",
"Rock and Roll",
"Stephen Got Even",
"Fusaichi Pegasus",
"Monarchos",
"Request for Parole",
"Wild Horses",
"Atswhatimtalknbout",
"Lawyer Ron",
"Pyro",
"Big Truck",
"We Miss Artie",
"Mr. Z",
"Stanford",
"Majesto",
"Irap",
"Fast and Accurate",
"Technology",
"Adonis",
"Scrimshaw",
"Frosted",
"Bolo",
"Trojan Nation",
"Patch",
"Hence",
"Irap",
"Master Plan",
"Thunder Snow"]

function answer_text(data) {
	var typename = "horse";
	if(data["type"] == "frisbee") {
		typename = "frisbee team";
	}
	
	return data["info"]["name"] + ' is a <a href="' + data["info"]["url"] +
		'" class = "infolink">'+ typename + '</a>.';
}

$(document).ready(function () {
	var data = fill_box();

	$(".button").click(function(evt) {
		evt.preventDefault();
		var guess = $(this).attr("id");

		var anstr = answer_text(data);
		if(guess == data["type"]) {
			$("#result").html("Correct! " + anstr);
			$("#result").removeClass("incorrect").addClass("correct");
		} else {
			$("#result").html("Incorrect. " + anstr);
			$("#result").removeClass("correct").addClass("incorrect");
		}
		data = fill_box();
	});

	$("#about-toggle").click(function(evt) {
		evt.preventDefault();
		$("#about-content").toggleClass("hidden");
	});
});

function randRange(max) {
	return Math.floor(Math.random() * max);
}

function fill_box() {
	var horse = (Math.random() > 0.5);
	var type = "horse";
	var info;
	if(horse) {
		info = horses[randRange(horsenames.length)];
	} else {
		info = frisbee[randRange(frisbeenames.length)];
		type = "frisbee";
	}

	$("#namebox").text(info["name"]);
	return {"type":type,
			"info":info};
}