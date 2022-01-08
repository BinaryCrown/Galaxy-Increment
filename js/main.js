function $(e) {
  return Document.getElementById(e)
}

"use strict";

console.log("Only use the console for testing: please don't cheat!")

const cf = require("config.json");

var gc = cf.STARTING_CHIPS; // Keep track of Galaxy chips and initialize them to 0
var cpc = cf.STARTING_CPC;  // Keep track of Galaxy chips per click and initialize them to 1

var updateGC = () => {
  // Function to increment Galaxy chips and display them
  gc += cpc;
  let c = $("GCCounter");
  c.textContent = gc.toString();
};

var Upgrades = (() => {
  let def = require("definitions");
  let i = 0;
  for (let k in def) {
    if (!def.hasOwnProperty(k)) continue;
    def[k].index = i++;
  }
  return def
})();

var ApplyUpgrade = function (upgrade) {
  if (upgrade == null) {throw "";}
}
