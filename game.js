let hits = 0
let staffMod = 0
let robeMod = 0
let items = {
    staff: {
        name: "newStaff",
        modifier: 2,
        description: "+2 holy damage",

    }, robes: {
        name: "whiteRobes",
        modifier: 5,
        description: "improved defense",
    }
}
let balrog = {
    health: 100
}
let gandalf = {
    health: 100,
    items: []
}

// function giveStaff() {
//     gandalf.items.push(items.staff)
//     console.log(gandalf.items)
//     gandalf.items.forEach(s => { staffMod += s.modifier })
//     console.log(staffMod)
//     document.getElementById("hideStaff").classList.add("hide")
//     return staffMod
// }
// function giveRobes() {
//     gandalf.items.push(items.robes)
//     console.log(gandalf.items)
//     gandalf.items.forEach(s => { robeMod += s.modifier })
//     console.log(robeMod)
//     document.getElementById("hideRobes").classList.add("hide")
//     return robeMod
// }
// let mods = staffMod + robeMod

let mods = 0
function giveItem(itemName) {
    mods = 0
    gandalf.items.push(items[itemName])
    console.log(gandalf.items)
    gandalf.items.forEach(s => { mods += s.modifier })
    console.log(mods)
}
function hide() {
}
function slap() {
    balrog.health -= 1 + mods
    console.log(balrog.health)
    hits++
    checkHealth()
    update()
}

function punch() {
    balrog.health -= 5 + mods
    console.log(balrog.health)
    hits++
    checkHealth()
    update()
}

function kick() {
    balrog.health -= 10 + mods
    console.log(balrog.health)
    hits++
    checkHealth()
    update()
}

function update() {
    document.getElementById("health").innerText = balrog.health.toString()
    document.getElementById("hits").innerText = hits.toString()
    console.log(hits)
}
function checkHealth() {
    if (balrog.health < 1) {

        document.getElementById('victory-message').innerHTML = `<p>The Balrog is slain!!</p>`
        balrog.health = 0
        hits--
    }
}
update()