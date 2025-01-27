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
  title: 'Eine Fähigkeit nutzen',
  content: `
Besprich mit der Spielleitung, was deine Fähigkeit bewirken soll. Du bekommst einen schwarzen Würfel von diesem Spielzug.
<br><br>
- Unabhängig vom Würfelergebnis passiert in jedem Fall, was du wolltest.<br>
- 1&1 Die Spielleitung erhält einen weiteren Verderbnispunkt.<br>
- 1-4 Die Spielleitung erhält einen Verderbnispunkt.<br>
- 5-6 Du bekommst einen weißen Bonuswürfel, den du frei einsetzen darfst.<br>
- 6&6 Du bekommst einen Hinweis.<br><br>
    <form class="Spielzug">
      <div class="form-group">
        <label for="SpielzugSelect">Spielzugwürfel</label>
        <select name="SpielzugSelect">
          <option value="1">Ein schwarzer Spielzugwürfel</option>
        </select>
      </div>
    </form>
    <form class="Attribut">
      <div class="form-group">
        <label for="AttributSelect">Attributswürfel</label>
        <select name="AttributSelect">
          <option value="0">Kein passendes Attribut</option>
          <option value="${Attribut1W}">${Attribut1}</option>
          <option value="${Attribut2W}">${Attribut2}</option>
          <option value="${Attribut3W}">${Attribut3}</option>
          <option value="${Attribut4W}">${Attribut4}</option>
          <option value="${Attribut5W}">${Attribut5}</option>
          <option value="${Attribut6W}">${Attribut6}</option>
          <option value="false">Freier Attributsslot (weiß)</option>
          <option value="true">Freier Attributsslot (schwarz)</option>
        </select>
      </div>
    </form>
   <form class="Zustand">
      <div class="form-group">
        <label for="ZustandSelect">Angst oder Zustandswürfel</label>
        <select name="ZustandSelect">
          <option value="0">Keine passende Angst vorhanden</option>
          <option value="1">${Angst1}</option>
          <option value="1">${Angst2}</option>
          <option value="1">${Zustand2}</option>
          <option value="1">${Zustand3}</option>
          <option value="1">${Zustand4}</option>
          <option value="1">${Zustand5}</option>
        </select>
      </div>
    </form>
   <form class="Bonus">
      <div class="form-group">
        <label for="BonusSelect">Bonuswürfel</label>
        <select name="BonusSelect">
          <option value="0">Keine Bonuswürfel</option>
          <option value="1">Ein weißer Bonuswürfel</option>
        </select>
      </div>
    </form>
   <form class="Verbessern">
      <div class="form-group">
        <label for="Verbessernelect">Den Wurf verbessern</label>
        <select name="Verbessernelect">
          <option value="0">Der erste Wurf</option>
          <option value="1">Der Wurf wird verbessert</option>
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
        let selectSpielzug = html.find('[name="SpielzugSelect"]').val();
        let selectAttribut = html.find('[name="AttributSelect"]').val();
        let selectZustand = html.find('[name="ZustandSelect"]').val();
        let selectBonus = html.find('[name="BonusSelect"]').val();
        let selectVerbessern = html.find('[name="Verbessernelect"]').val();

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
weißerWurfel = parseInt( selectAttributFalse ) + parseInt( selectBonus );
schwarzerWurfel = parseInt( selectAttributTrue ) + parseInt( selectZustand ) + parseInt( selectVerbessern ) + parseInt( selectSpielzug );

        let ergebnis = game.macros.getName('etwasHerausfinden').execute({wurfelWeiss: weißerWurfel, wurfelSchwarz: schwarzerWurfel, numberRuin: 3}); 
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