let r = new Roll('{1d6[white]}');
await r.evaluate();
await r.toMessage(render=false);
return "Hilfe anbieten: "+r.result;