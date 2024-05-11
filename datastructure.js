let tab =[1,5,6,7,9,8];
let tabpaire=[];
let i = 0;
let j=0;
//Recherche de chiffre pair
for ( i = 0; i <= tab.length - 1; i++){
    if (tab[i] % 2 == 0) {
    tabpaire[j] =tab[i];
        j=j+1;
    }
}
 console.log(tabpaire);
//Recherche de chiffre impair
