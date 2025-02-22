//---ZADANIE 1---
function losowanie(){
    let x=Math.floor(Math.random() * (10-1+1) + 1 );
    let losowa=document.getElementById("losowa").value;

    if(x == losowa) {
        alert("Udało ci się odgadnąć liczbę "+ x);
    } else {
        alert("Niestety to niepoprawna liczba, poprawna to "+x);
    } 
}

//---ZADANIE 2---
function multiply(){
    let a=document.getElementById("number1").value;
    let b=document.getElementById("number2").value;

    let wynik=a*b;
    document.getElementById("wynik").innerHTML=wynik;
    
}
function divide(){
    let a=document.getElementById("number1").value;
    let b=document.getElementById("number2").value;

    if(b>0){
        let wynik=a/b;
        document.getElementById("wynik").innerHTML=wynik;
    }else {
        alert("Nie dziel przez zero");
    }
}

//---ZADANIE 3---
// c = 5/9 * (f - 32)
// c * 9/5 = f - 32
// f = c * 9/5 + 32
function celFah(){
    let c=document.getElementById("C").value;
    let f = c * 9/5 +32;
    let wynik=c+ "&#8451; to "+f+"&#8457;";
    document.getElementById("temp").innerHTML=wynik;
}
function fahCel(){
    let f=document.getElementById("F").value;
    let c = 5/9 * (f-32);
    let wynik=f+"&#8457; to "+c+"&#8451;";
    document.getElementById("temp").innerHTML=wynik;
    }


//---ZADANIE 4---
function potega(){
    a=document.getElementById("a").value;
    n=document.getElementById("n").value;
    let wynik = Math.pow(a,n);
    let wynikKoncowy="Wynik: "+wynik;
    document.getElementById("potegaWynik").innerHTML=wynikKoncowy;
}


//---ZADANIE 5---
function silnia(){
    n=document.getElementById("nSilnia").value;
    let silnia=1;
    for (let i=0; i<n; i++){
        silnia *= (i+1); 
    }
    let wynik="Wynik: "+silnia;
    document.getElementById("silniaWynik").innerHTML=wynik;
}

//---ZADANIE 6---
function sortuj(){
    let tab = [3,8,7,6,5,-4,-3,2,1];

    //ręczne sortowanie bąbelkowe
    for (let k=0; k<tab.length-1; k++){
        for (let i=0; i<tab.length-1; i++){
            if(tab[i]>tab[i+1]){
                let tmp=tab[i+1];
                tab[i+1]=tab[i];
                tab[i]=tmp;
            }
        }
    }
    let wynik=tab.join(", ");
    let wynikKoncowy="tab = ["+wynik+" ]";
    document.getElementById("tablicaPo").innerHTML=wynikKoncowy;

    
    //sortowanie za pomocą wbudowanej funkcji
        //tab.sort((a,b) => a - b);
        //document.getElementById("tablicaPo").innerHTML=tab;
}