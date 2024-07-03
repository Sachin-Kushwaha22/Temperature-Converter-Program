
const inputTemp=document.getElementById("inputTemp");
const ctf=document.getElementById("ctf");
const ftc=document.getElementById("ftc");
const showhere=document.getElementById("showhere");

let temp;

function convert(){
    
    if(ctf.checked){
        temp=Number(inputTemp.value);
        temp=temp*9/5+32;
        showhere.textContent=temp.toFixed(1)+"°F";
    }
    else if(ftc.checked){
        temp=Number(inputTemp.value);
        temp=(temp-32)*5/9;
        showhere.textContent=temp.toFixed(1)+"°C";
    }
    else{
        showhere.textContent="Select a Unit";
    }
}