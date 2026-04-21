function jourTravaille(date)
{
    const joursFeries2024 = [
        "1-1",
        "4-1",
        "5-1",
        "5-8",
        "5-9",
        "5-20",
        "7-14",
        "8-15",
        "11-1",
        "11-11",
        "12-25"  
    ];

    // fomate la date
    const jour = date.getDate();
    const mois = date.getMonth() + 1;
    const annee = date.getFullYear(); 
    // donne le jour
    const jourSemaine = date.getDay();

    const dateCheck = mois + "-" + jour;

    if (annee === 2024 && joursFeries2024.includes(dateCheck))
    {
        console.log(dateCheck + " est férié");
    }
}

let test = new Date("2024-05-01");
jourTravaille(test);