// Adatok beállítása (golyók dobozban)
var adatok = [1, 2, 3, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7];

// Statisztika objektum inicializálása (dobozok számlálóival)
var statisztika = {};

// Adatok tömb bejárása
for (var i = 0; i < adatok.length; i++) {
    // Jelenlegi golyó kiválasztása
    var jelenlegiElem = adatok[i];

    // Ha az elem még nem szerepelt a statisztika objektumban, inicializáljuk 1-gyel
    if (!statisztika[jelenlegiElem]) {
        statisztika[jelenlegiElem] = 1;
    } else {
        // Ha az elem már szerepel a statisztika objektumban, növeljük az értékét
        statisztika[jelenlegiElem]++;
    }
}

// Eredmény kiírása a konzolon (dobozok tartalmának kiírása)
console.log(statisztika);
