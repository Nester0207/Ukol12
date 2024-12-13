
const poleProduktu = [
    {
        jmeno: "fixa",
        cena: 30,
        pocetKusu: 304 
    },
    {
        jmeno: "sesit",
        cena: 23,
        pocetKusu: 50 
    },
    {
        jmeno: "pravitko",
        cena: 60,
        pocetKusu: 421 
    },
    {
        jmeno: "guma",
        cena: 33,
        pocetKusu: 154 
    },
    {
        jmeno: "pero",
        cena: 50,
        pocetKusu: 87
    }
];
const vicNez100 = poleProduktu.filter((produkt) => {
    if (produkt.pocetKusu > 100) {
        return true;
    }else{
        return false;
    }
});
console.log(vicNez100);

const novePoleKusu = poleProduktu.map((kusObjekt) => {
    if (kusObjekt.pocetKusu > 0) {
        return Math.floor(kusObjekt.pocetKusu/2);
    }
});
console.log(novePoleKusu);


const celkovaCenaProduktu = poleProduktu.reduce((akumulator, objektProdukt) => {
    return akumulator + objektProdukt.cena;
}, 0);
console.log(celkovaCenaProduktu);


const serazenoPodleCeny = poleProduktu.sort((objektA, objektB) => {
    if (objektB.cena < objektA.cena) {
        return 1;
    }
});
console.log(serazenoPodleCeny);
