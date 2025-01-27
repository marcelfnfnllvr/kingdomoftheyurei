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
  title: 'Auf Reisen',
  content: `
Dieser Spielzug darf pro Spielendem nur einmal pro Abenteuer verwendet werden. Erzählt von einem Moment auf der Reise, um allein oder gemeinsam Zustände abzubauen. Dieser Spielzug gibt einen weißen Würfel. Um einen weiteren Würfel zu erhalten, muss die Erzählung etwas mit dem Attribut zu tun haben, von dem der Charakter den zweiten Würfel für diesen Spielzug bekommen soll. 
<br><br>
- 1&1 Die Spielleitung bekommt einen weiteren Verderbnispunkt.<br>
- 1-2 Die Spielleitung bekommt einen Verderbnispunkt.<br>
- 3-4 Du entfernst die letzten zwei Zustände. <br>
- 5-6 Du entfernst die letzten drei Zustände. Die Spielleitung gibt dir einen Hinweis.<br>
- 6&6 Du entfernst alle deine Zustände.<br><br>
    <form class="Spielzug">
      <div class="form-group">
        <label for="SpielzugSelect">Spielzugwürfel</label>
        <select name="SpielzugSelect">
          <option value="1">Ein weißer Spielzugwürfel</option>
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
weißerWurfel = parseInt( selectAttributFalse ) + parseInt( selectBonus )+ parseInt( selectSpielzug );
schwarzerWurfel = parseInt( selectAttributTrue ) + parseInt( selectVerbessern ) ;

        let ergebnis = game.macros.getName('aufReisen').execute({wurfelWeiss: weißerWurfel, wurfelSchwarz: schwarzerWurfel, numberRuin: 3}); 
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