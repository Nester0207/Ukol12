
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
const vicNez100 = poleProduktu.filter((objekt) => {
    if (objekt.pocetKusu > 100) {
        return true;
    }else{
        return false;
    }
});
console.log(vicNez100);