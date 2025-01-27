let d = new Dialog({
  title: 'Den Gegner schwächen',
  content: `
Es ist möglich, im Kampf die Gefahrenstufe des Gegners mithilfe von Fähigkeiten zu senken. Du bekommst einen schwarzen Würfel von diesem Spielzug.
<br><br>
- 1&1 Die Gefahrenstufe des Gegners steigt noch einmal um 1.<br>
- 1-2 Die Gefahrenstufe des Gegners steigt um 1.<br>
- 5-6 Du senkst die Gefahrenstufe um 1.<br>
- 6&6 Du senkst die Gefahrenstufe um 3.<br><br>
    <form class="Spielzug">
      <div class="form-group">
        <label for="SpielzugSelect">Spielzugwürfel</label>
        <select name="SpielzugSelect">
          <option value="1">Ein schwarzer Spielzugwürfel</option>
        </select>
      </div>
    </form>
   <form class="Faehigkeiten">
      <div class="form-group">
        <label for="Faehigkeitenselect">Fähigkeiten</label>
        <select name="Faehigkeitenselect">
          <option value="0">Keine Fähigkeit gewählt</option>
          <option value="1">${Faehigkeit1}</option>
          <option value="1">${Faehigkeit2}</option>
          <option value="1">${Faehigkeit3}</option>
          <option value="1">${Faehigkeit4}</option>
          <option value="1">${Faehigkeit5}</option>
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
        let selectFaehigkeiten = html.find('[name="Faehigkeitenselect"]').val();
        let selectBonus = html.find('[name="BonusSelect"]').val();
        let selectVerbessern = html.find('[name="Verbessernelect"]').val();

weißerWurfel = parseInt( selectBonus );
schwarzerWurfel =  parseInt( selectVerbessern ) + parseInt( selectFaehigkeiten ) + parseInt( selectSpielzug );

        let ergebnis = game.macros.getName('denGegnerSchwaechen').execute({wurfelWeiss: weißerWurfel, wurfelSchwarz: schwarzerWurfel, numberRuin: 3}); 
console.log(ergebnis);
      }
    },
  },
  default: 'Yes',
  close: () => {
    console.log('Example Dialog Closed');
  }
}).render(true);

return ""