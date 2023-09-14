const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
    break
    }
    console.log(`${x} = ${nums[x]}`)
}

let barra = "////////"
console.log(barra)

for (y in nums) {
    if (y == 5) { // note que o indice 5 foi pulado
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

let aha = "////////"
console.log(aha)

externo: for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo // deselegante usar break com rotulo, divida as fuuncoes em porcoes para que o toda faca sentido
        console.log(`Par = ${a}, ${b}`)
    }
}