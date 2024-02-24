let games = [{name:"Aleste",thumbnail:"Aleste.png",file:"Aleste.zip"},
			{name:"Arkanoid",thumbnail:"Arkanoid.png",file:"Arkanoid.zip"},
			{name:"Arkanoid2",thumbnail:"Arkanoid2.png",file:"Arkanoid2.zip"},
			{name:"BubbleBobble",thumbnail:"BubbleBobble.png",file:"BubbleBobble.zip"},
			{name:"CabbagePatchKids",thumbnail:"CabbagePatchKids.png",file:"CabbagePatchKids.zip"},
			{name:"Castle",thumbnail:"Castle.png",file:"Castle.zip"},
			{name:"CastleExcellent",thumbnail:"CastleExcellent.png",file:"CastleExcellent.zip"},
			{name:"ElevatorAction",thumbnail:"ElevatorAction.png",file:"ElevatorAction.zip"},
			{name:"Frogger",thumbnail:"Frogger.png",file:"Frogger.zip"},
			{name:"Goonies",thumbnail:"Goonies.png",file:"Goonies.zip"},
			{name:"KingsValley",thumbnail:"KingsValley.png",file:"KingsValley.zip"},
			{name:"Knightmare",thumbnail:"Knightmare.png",file:"Knightmare.zip"},
			{name:"MagicalKidWiz",thumbnail:"MagicalKidWiz.png",file:"MagicalKidWiz.zip"},
			{name:"MagicalTree",thumbnail:"MagicalTree.png",file:"MagicalTree.zip"},
			{name:"MazeOfGalious",thumbnail:"MazeOfGalious.png",file:"MazeOfGalious.zip"},
			{name:"MetalGear",thumbnail:"MetalGear.png",file:"MetalGear.zip"},
			{name:"Nemesis",thumbnail:"Nemesis.png",file:"Nemesis.zip"},
			{name:"PacMan",thumbnail:"PacMan.png",file:"PacMan.zip"},
			{name:"Parodius",thumbnail:"Parodius.png",file:"Parodius.zip"},
			{name:"Penguin-KunWars2",thumbnail:"Penguin-KunWars2.png",file:"Penguin-KunWars2.zip"},
			{name:"PenguinAdventure",thumbnail:"PenguinAdventure.png",file:"PenguinAdventure.zip"},
			{name:"RoadFighter",thumbnail:"RoadFighter.png",file:"RoadFighter.zip"},
			{name:"TwinBee",thumbnail:"TwinBee.png",file:"TwinBee.zip"},
			{name:"VampireKiller",thumbnail:"VampireKiller.png",file:"VampireKiller.zip"},
			{name:"YieArKungFu",thumbnail:"YieArKungFu.png",file:"YieArKungFu.zip"},
			{name:"Zanac",thumbnail:"Zanac.png",file:"Zanac.zip"},
			{name:"Zanac2",thumbnail:"Zanac2.png",file:"Zanac2.zip"},
			{name:"ZanacEx",thumbnail:"ZanacEx.png",file:"ZanacEx.zip"}];

// Populate right navigation
document.addEventListener('DOMContentLoaded', function() {
  let rightNavigation = document.getElementById("right-navigation");
  let inner = "";
  for(let i=0; i < games.length; i++){
	inner += '<div class="game" onclick="window.location.href=\'?game='+games[i].name+'\'"><img src="./games/'+games[i].thumbnail+'" /><div>'+games[i].name+'</div></div>';
  }
  rightNavigation.innerHTML = inner;
});

// Select cartridge.
// Default value
let randomIndex = Math.floor(Math.random() * games.length);
let cartridge = "./games/"+games[randomIndex].file;
// Selected value
if (window.location.search){
	let urlParams = new URLSearchParams(window.location.search);
	let gamename = urlParams.get('game');
	let selectedGame = games.find(game => game.name === gamename);
	if (selectedGame) {
		cartridge = "./games/"+selectedGame.file;
	}
}
WMSX.CARTRIDGE1_URL = cartridge;