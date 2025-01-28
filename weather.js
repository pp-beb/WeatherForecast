const selectedCity =document.getElementById('city');
let outputCity="";
const output = document.getElementById('outputDiv');
selectedCity.addEventListener('change',function(){
    outputCity=selectedCity.value;  
    output.innerText=outputCity;
});