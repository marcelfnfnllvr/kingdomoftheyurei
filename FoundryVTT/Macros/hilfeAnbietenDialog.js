console.log(Attribut1,Attribut1W,Attribut2,Attribut2W,Attribut3,Attribut3W,Attribut4,Attribut4W,Attribut5,Attribut5W,Attribut6,Attribut6W,Angst1,Angst2,Zustand2,Zustand3,Zustand4,Zustand5);

if(Attribut1W=='false'){
Attribut1=Attribut1+" (weiß)"}else{
Attribut1=Attribut1+" (schwarz)"}
if(Attribut2W=='false'){
Attribut2=Attribut2+" (weiß)"}else{
Attribut2=Attribut2+" (schwarz)"}
if(Attribut3W=='false'){
Attribut3=Attribut3+" (weiß)"}else{
Attribut3=Attribut3+" (schwarz)"}
if(Attribut4W=='false'){
Attribut4=Attribut4+" (weiß)"}else{
Attribut4=Attribut4+" (schwarz)"}
if(Attribut5W=='false'){
Attribut5=Attribut5+" (weiß)"}else{
Attribut5=Attribut5+" (schwarz)"}
if(Attribut6W=='false'){
Attribut6=Attribut6+" (weiß)"}else{
Attribut6=Attribut6+" (schwarz)"}
console.log("bis hier?");
let d = new Dialog({
  title: 'Hilfe anbieten',
  content: `
Hilf einem Mitspielenden bei einem "Etwas herausfinden" oder "Etwas riskieren" Spielzug, indem du mit einem W6 würfelst. Das Ergebnis zählt für den Mitspielenden, dem du helfen möchtest. Hast du ein passendes Attribut für die Hilfestellung, dann richtet sich die Farbe des Würfels nach der Farbe des Attributs. Du kannst auch einen weißen Bonus-W6 aus einem vorangegangenen Wurf als Würfel für die Hilfestellung verwenden. Hast du kein passendes Attribut oder einen Bonus-W6, aber eine andere für die Szene passende Idee, wirfst du mit einem schwarzen W6. Allerdings erhältst du automatisch einen Zustand, wenn du mit einem schwarzen W6 würfelst. Falls die zu helfende Person einen schwarzen Würfel in ihrem Würfelpool hat und du dessen Augenzahl mit deinem "Hilfe anbieten" Spielzug triffst, erhältst du ebenfalls einen Zustand. Du kannst in einem "Hilfe anbieten" Spielzug maximal einen Zustand erhalten.
<br><br>
Der Spielzug "Hilfe anbieten" wird genutzt, nachdem die zu helfende Person den ersten Wurf mit ihrem eigenen Würfelpool absolviert hat. In der Erzählung der Spielenden dürfen Charaktere sich natürlich immer helfen - falls logisch möglich. Trotzdem würfelt die helfende Person erst nach der aktiv agierenden Person.<br><br>
    <form class="Attribut">
      <div class="form-group">
        <label for="AttributSelect">Hilfe anbieten</label>
        <select name="AttributSelect">
	      <option value="0">Kein standard Würfel</option>
          <option value="true">Ein schwarzer Spielzugwürfel (schwarz)</option>
          <option value="${Attribut1W}">${Attribut1}</option>
          <option value="${Attribut2W}">${Attribut2}</option>
          <option value="${Attribut3W}">${Attribut3}</option>
          <option value="${Attribut4W}">${Attribut4}</option>
          <option value="${Attribut5W}">${Attribut5}</option>
          <option value="${Attribut6W}">${Attribut6}</option>
          <option value="false">Freier Attributsslot (weiß)</option>
          <option value="true">Freier Attributsslot (schwarz)</option>
	      <option value="false">Ein weißer Bonuswürfel (weiß)</option>
        </select>
      </div>
    </form>
  `,
  buttons: {
    no: {
      icon: '<i class="fas fa-times"></i>',
      label: 'Abbrechen'
    },
    yes: {
      icon: '<i class="fas fa-check"></i>',
      label: 'Würfeln',
      callback: (html) => {
        let selectAttribut = html.find('[name="AttributSelect"]').val();

if(selectAttribut=='false'){
selectAttributFalse=1;
selectAttributTrue=0;
}else if(selectAttribut=='true'){
selectAttributFalse=0;
selectAttributTrue=1;
}else{
selectAttributFalse=0;
selectAttributTrue=0;
}
weißerWurfel = parseInt( selectAttributFalse );
schwarzerWurfel = parseInt( selectAttributTrue );

        let ergebnis = game.macros.getName('hilfeAnbieten').execute({wurfelWeiss: weißerWurfel,wurfelSchwarz: schwarzerWurfel}); 
console.log(ergebnis);
      }
    },
  },
  default: 'Yes',
  close: () => {
    console.log('Example Dialog Closed');
  }
}).render(true);

return Attribut1