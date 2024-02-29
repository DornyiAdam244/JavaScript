const N = 100;
const MAX = 6;
const MIN = 1;
var tomb = [];
while (tomb.length < N) {
    var szam = (MIN + Math.floor(Math.random() * (MAX - MIN + 1)))
    if (szam % 2 != 0) {
        tomb.push(szam)
    }
}


var lotto = [];
while (lotto.length < N) {
    var szam = (MIN + Math.floor(Math.random() * (MAX - MIN + 1)))
    lotto.push(szam)
}
console.log(lotto)

console.log("Hármas:")
var tomb2 = []
while (tomb2.length < N) {
    var szam = (MIN + Math.floor(Math.random() * (MAX - MIN + 1)))
    tomb2.push(szam)
}
console.log(tomb2)
for (var i = 0; i < tomb2.length; i++) {
    if (tomb2[i] == 0)
        tomb2.splice(i, 1)
}
console.log(tomb2)
console.log("asd")
var N_tomb = [3, 28, 2, 8, 7, 2, 14, 21]
var M_tomb = [3, 2, 2, 8, 7, 21]
var metszet = [], unio = []
for (var i = 0; i < N_tomb.length; i++) {
    for (var j = 0; j < M_tomb.length; j++) {
        if (N_tomb[i] == M_tomb[j]) {
            if (!metszet.includes(N_tomb[i])) {
                metszet.push(N_tomb[i])
            }
        }
    }
}
console.log(metszet)
for (var i = 0; i < N_tomb.length; i++) {
    if (!unio.includes(N_tomb[i])) {
        unio.push(N_tomb[i]);
    }
}
console.log(unio)
for (var i = 0; i < M_tomb.length; i++) {
    if (!unio.includes(N_tomb[i])) {
        unio.push(N_tomb[i]);
    }
}
console.log(unio)
var paros = []
var paratlan = []
for (var i = 0; i < M_tomb.length; i++) {
    if (M_tomb[i] % 2 == 0) {
        paros.push(M_tomb[i])
    }
    else {
        paratlan.push(M_tomb[i])
    }
}
console.log("Harmas feladat: " + M_tomb)
console.log("Paratlan: " + paratlan)
console.log("Paros: " + paros)
tomb = [13, 123, 356, 123, 12757, 1]
var maxi = 0;
var mini = 0;
var maxv = tomb[0]
var minv = tomb[0]


for (var i = 0; i < tomb.length; i++) {
    for (var j = i + 1; j < tomb.length; j++) {
        if (tomb[j] > maxv) {
            maxv = tomb[j];
            maxi = j;
        }
        if (tomb[j] < minv) {
            minv = tomb[j];
            mini = j;
        }
    }
}
console.log(maxi, maxv);
console.log(mini, minv);
csere = [];
console.log(tomb);
for (var i = tomb.length - 1; i >= 0; i--) {
    csere.push(tomb[i])
}
console.log(csere)
tomb = []
while (tomb.length < N) {
    var szam = (MIN + Math.floor(Math.random() * (MAX - MIN + 1)));
    tomb.push(szam)
}
var statisztika = {}
console.log(tomb)
for (var i = 0; i<tomb.length;i++) {
    if(!statisztika[tomb[i]]) {
        statisztika[tomb[i]] = 1;
    }
    else {
        statisztika[tomb[i]]++;
    }
}
console.log(statisztika)

document.write("<p>Tömb:  " + tomb.join(", ") + "</p> <p>Statisztika: " + JSON.stringify(statisztika) + "</p>")

for(var key in statisztika) {
    document.write("<li>" + key +":" + statisztika[key] + "</li>")
}