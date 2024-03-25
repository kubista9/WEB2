// EX 9 script transformations.js

const SCRIPTS = require("./scripts.js");

function rtlScriptNames(scripts) {
    return scripts.reduce((accum, script) => {
        if (script.direction === "rtl") {
            return [...accum, script.name];
        }
        return accum;
    }, []);
}

console.log(rtlScriptNames(SCRIPTS)); 

// solution
function rtlScriptNames(scripts) {
    return scripts.reduce((res, s) => (s.direction === "rtl" ? [...res, s.name] : res), [])
}
