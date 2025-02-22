//Zad 1
function zmien_p()
{
    document.getElementById("zad1").style.fontSize = "25px";
    document.getElementById("zad1").style.color = "blue";
    document.getElementById("zad1").style.fontFamil = "Verdana";
}

//Zad 2
function zmien_obraz(){
    adres = document.getElementById("adres").value;
    document.getElementById("obr").src= adres;
}

//Zad3
function lista(){
    
    const adres=document.getElementById("adres_a").value;
    const tekst=document.getElementById("tekst_a").value;
    
    let ul = document.getElementById("lista");
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href=adres;
    a.textContent=tekst;


    li.appendChild(a);
    ul.prepend(li);
    
}

function usun(){
    let tekst = document.getElementById("z_inputa").value;
    let ul = document.getElementById("lista");


    let items = ul.querySelectorAll("li");
    for(let i=0; i<items.length; i++){
        if( items[i].textContent==tekst){
            items[i].remove();
        } 
    }

}

//Zad4
function powrot(obj){
    obj.innerHTML="dowolny tekst";
}

function wyswietl_date(obj){ 
    // const czas=new Date();
    // const aktualna_data= `${czas.getDate()}.${czas.getMonth()+1}.${czas.getFullYear()} `;
    // const akutalny_czas= `${czas.getHours()}:${czas.getMinutes()}`;
    
    // const wynik=`${aktualna_data} ${akutalny_czas}`;
    //lub
    const wynik = new Date().toLocaleString();
    obj.innerHTML = wynik;
}
function kopiuj(obj){
    const oryginal=document.getElementById("tekst");
    const kopia=document.getElementById("kopia");
    kopia.innerHTML=oryginal.innerHTML;
}



//Zad5
function p1(obj){
    obj.style.backgroundColor="red";
    obj.style.fontWeight="bold";
}
function p1_o(obj){
    obj.style.backgroundColor="lightcoral";
    obj.style.fontWeight="normal";
}
function p1_c(){
    window.location.href='https://pcz.pl';
}
function p2(obj){
    obj.style.backgroundColor="yellow";
    obj.style.fontWeight="bold";
}
function p2_o(obj){
    obj.style.backgroundColor="lightyellow";
    obj.style.fontWeight="normal";
}
function p2_c(){
    window.location.href='https://wiisi.pcz.pl';
}
function p3(obj){
    obj.style.backgroundColor="blue";
    obj.style.fontWeight="bold";
}
function p3_o(obj){
    obj.style.backgroundColor="lightblue";
    obj.style.fontWeight="normal";
}
function p3_c(){
    window.location.href='https://wim.pcz.pl';
}

