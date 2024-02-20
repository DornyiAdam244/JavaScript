const N = 20;
const MIN = 1;
const MAX = 6;
var dobasok = [];
var statisztika = {};
for (var i = 0; i <= N; i++) {
    var szam = (MIN + Math.random() * MAX - MIN + 1);
    dobasok.push(Math.floor(szam));
}
for (var i = 0; i < dobasok.length; i++) {
    console.log(dobasok[i])
    if(!statisztika[dobasok[i]]) {
        statisztika[dobasok[i]] = 1;
    }
    else {
        statisztika[dobasok[i]]++ 

    }
}
console.log(statisztika)

div = document.querySelector("div");
for(var kulcs in statisztika) {
    div.innerHTML += kulcs +":"+statisztika[kulcs] + "<br>";
}