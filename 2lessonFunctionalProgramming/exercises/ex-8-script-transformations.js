// EX 8 script transformations.js

// solution.js
const SCRIPTS = require("./scripts.js");

function oldestLivingScript(scripts) {
 const oldestLiving = scripts.reduce((oldest, script) => {
    if (script.living && (!oldest || script.year < oldest.year)) {
      return script;
    }
    return oldest;
 }, null);

 if (oldestLiving) {
    return oldestLiving.name;
 } else {
    return "No living script found";
 }
}

console.log(oldestLivingScript(SCRIPTS)); 

// solution
function oldestLivingScript(scripts) {
   return scripts.filter(s => s.living).reduce((res, s) => (res.year < s.year ? res : s))
}
