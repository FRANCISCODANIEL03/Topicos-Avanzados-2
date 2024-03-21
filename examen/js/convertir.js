const mili= document.getElementById('mili')
const mt= document.getElementById('mt')
const km= document.getElementById('km')
const plg= document.getElementById('plg')
const pies= document.getElementById('pies')
const yarda= document.getElementById('yarda')



const form= document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const cm= document.getElementById('cm').value;
    mili.textContent= cm + " cm: " + parseFloat((cm/100)*1000) + " milimetros";
    mt.textContent= cm + " cm: " + parseFloat(cm/100) + " metros";
    km.textContent= cm + " cm: " + parseFloat((cm/100)*0.001) + " kilometros";
    plg.textContent= cm + " cm: " + parseFloat((cm/100)*39.3701) + " pulgadas";
    pies.textContent= cm + " cm: "+ parseFloat((cm/100)*3.28084) + " pies";
    yarda.textContent= cm + " cm: "+ parseFloat((cm/100)*1.09361) + " yardas";
})

