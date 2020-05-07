let hits = 0
let items = {
    staff: {
        name: "newStaff",
        modifier: 2,
        description: "+10 holy damage",
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

function giveStaff() {
    gandalf.items.push(items.staff)
    console.log(gandalf.items)
}
giveStaff()
function slap() {
    balrog.health--
    console.log(balrog.health)
    hits++
    if (balrog.health == 0) {
    }
    update()
}

function punch() {
    balrog.health -= 5
    console.log(balrog.health)
    hits++
    if (balrog.health == 0) {
    }
    update()
}

function kick() {
    balrog.health -= 10
    console.log(balrog.health)
    hits++
    if (balrog.health == 0) {
    }
    update()
}

function update() {
    document.getElementById("health").innerText = balrog.health.toString()
    document.getElementById("hits").innerText = hits.toString()
    console.log(hits)
}

update()