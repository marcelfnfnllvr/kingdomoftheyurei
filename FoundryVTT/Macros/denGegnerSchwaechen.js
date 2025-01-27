//const wurfelSchwarz = 2;
//const wurfelWeiss = 2;
//const weakness = 5;
//const getroffen = 0;

let arr = [];
let resultString = "";

//Es wird gewürfelt
let r = new Roll('{'+wurfelSchwarz+'d6kh[black], '+wurfelWeiss+'d6kh[white]}kh');
console.log(r.terms);   
await r.evaluate();
await r.toMessage(render=false);

//Er baut ein mehrdimensionales Array in dem [weiss,1],[schwarz,5],usw.
let i1 = 0;
let i3 = 0;
while(i1 < r.dice.length){
let i2 = 0;
while(i2 < r.dice[i1].results.length){

 if(i1==0){
 resultString+="schwarze "+r.dice[i1].results[i2].result+", ";
 arr[i3] = ["Schwarz",r.dice[i1].results[i2].result];
console.log("Schwarz:"+r.dice[i1].results[i2].result);
i3++;
}else{
 resultString+="weiße "+r.dice[i1].results[i2].result+", ";
 arr[i3] = ["Weiß",r.dice[i1].results[i2].result];
console.log("Weiß:"+r.dice[i1].results[i2].result);
i3++;
}

i2++;
}
i1++;
}

//Hier wird nach der höchsten Augenzahl und ihrer Farbe geschaut
let iResult = 0;
let ergebnis = [];
ergebnis[0] = ["",0];
while(iResult<arr.length){
if(arr[iResult][1]>ergebnis[0][1]){ergebnis[0] = [arr[iResult][0],arr[iResult][1]]}
iResult++;
}
console.log("Höchste Zahl und Farbe: "+ergebnis[0]);

const results_html = `<h2>Den Gegner schwächen</h2>
Dein Ergebnis ist eine <strong>${ergebnis[0][1]}</strong> in der Farbe <strong>${ergebnis[0][0]}</strong>.</br> `

switch (ergebnis[0][1]) {
  case 1:
    results2_html = "<br>Die Gefahrenstufe des Gegners steigt um 1.";
    break;
  case 2:
    results2_html = "<br>Die Gefahrenstufe des Gegners steigt um 1.";
    break;
  case 3:
    results2_html = "<br>Es passiert nichts.";
    break;
  case 4:
    results2_html = "<br>Es passiert nichts.";
    break;
  case 5:
    results2_html = "<br>Du senkst die Gefahrenstufe um 1.";
    break;
  case 6:
    results2_html = "<br>Du senkst die Gefahrenstufe um 1.";
}

//Ist der Wurf wiederholbar?
switch (ergebnis[0][0]) {
  case "Schwarz":
    results3_html = "";
    break;
  case "Weiß":
    results3_html = "<i>Du kannst den Wurf wiederholen, indem du einen weiteren schwarzen Würfel hinzufügst und neu würfelst.</i>";
}

if(ergebnis[0][1]==6) {results3_html = "";}

//Bekommt der Charakter einen Zustand?
let results4_html = "";
if(ergebnis[0][0]=="Schwarz"){
results4_html = "Du bekommst einen <strong>Zustand</strong>.";
}

//Hier wird nach einem Pasch auf den beiden höchsten Augenzahlen geschaut.
if (arr.length>1) {
console.log(arr+ "Neuer Test");
arr.sort(compareSecondColumn);
arr.reverse();
console.log(arr+ "nach dem Test");
function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}
if(arr[0][1] == 6 & arr[1][1] == 6){
	console.log("Sechserpasch")
  		 results2_html=results2_html+" <br><strong>Sechserpasch</strong> - Du senkst die Gefahrenstufe um 3.";
    }
    else if(arr[0][1] == 1 & arr[1][1] == 1){
    console.log("Einerpasch")    
		rresults2_html=results2_html+" <br><strong>Einerpasch</strong> - Die Gefahrenstufe des Gegners steigt noch einmal um 1.";
    }else{
	console.log("KeinPasch")
		
	}
}
ChatMessage.create({
	user: game.user._id,
	speaker: ChatMessage.getSpeaker({token: actor}),
	content: results_html+results3_html+results4_html+results2_html
        //content: results_html
});