const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // nao achara nada C=0, o=1, d=2, 3=3, r=4
console.log(escola.charCodeAt(3)) // ele puxou a info do Code Table(51)
console.log(escola.indexOf("3"))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log("Escola".concat(escola).concat("!"))
console.log("Escola" + escola + "!")
console.log(escola.replace(3, "e"))

console.log("Ana,Maria,Pedro".split(","))