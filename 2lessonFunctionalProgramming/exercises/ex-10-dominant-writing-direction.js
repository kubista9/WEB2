require("./scripts.js")

function dominantDirection(text) {
    let counted = countBy(text, char => {
        let script = characterScript(char.codePointAt(0))
        return script ? script.direction : "none"
    }).filter(({ name }) => name !== "none")

    if (counted.length === 0) return "ltr"

    return counted.reduce((a, b) => (a.count > b.count ? a : b)).name
}

function countBy(items, groupName) {
    let counts = []
    for (let item of items) {
        let name = groupName(item)
        let known = counts.findIndex(c => c.name === name)
        if (known === -1) {
            counts.push({ name, count: 1 })
        } else {
            counts[known].count++
        }
    }
    return counts
}

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (
            script.ranges.some(([from, to]) => {
                return code >= from && code < to
            })
        ) {
            return script
        }
    }
    return null
}

function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0))
        return script ? script.name : "none"
    }).filter(({ name }) => name != "none")

    let total = scripts.reduce((n, { count }) => n + count, 0)
    if (total == 0) return "No scripts found"

    return scripts
        .map(({ name, count }) => {
            return `${Math.round((count * 100) / total)}% ${name}`
        })
        .join(", ")
}
console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'))
// 61% Han, 22% Latin, 17% Cyrillic
console.log(dominantDirection("Hello!"))
// → ltr
console.log(dominantDirection("Hey, مساء الخير"))
// → rtl