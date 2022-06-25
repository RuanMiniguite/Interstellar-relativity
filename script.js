async function tempD(){

    let dateEarth = new Date();
    let dateUser = document.querySelector('input[type="datetime-local"]');

    let dateIni = new Date(dateUser.value);
    
    // console.log('USER: ' + dateIni);
    // console.log('EARTH: ' + dateEarth);

    let secondEarth = ((dateEarth.getTime() - dateIni.getTime()) / 1000).toFixed();
    let secondMiller = (secondEarth / 61320).toFixed();

    document.getElementById('earths').textContent = secondEarth;
    document.getElementById('earthm').textContent = (secondEarth / 60).toFixed();
    document.getElementById('earthh').textContent = ((secondEarth / 60) / 60).toFixed();
    document.getElementById('earthd').textContent = (((secondEarth / 60) / 60) / 24).toFixed();
    document.getElementById('eartha').textContent = ((((secondEarth / 60) / 60) / 24) / 365).toFixed();

    document.getElementById('millers').textContent = secondMiller;
    document.getElementById('millerm').textContent = (secondMiller / 60).toFixed();
    document.getElementById('millerh').textContent = ((secondMiller / 60) / 60).toFixed();
    document.getElementById('millerd').textContent = (((secondMiller / 60) / 60) / 24).toFixed();
    document.getElementById('millera').textContent = ((((secondMiller / 60) / 60) / 24) / 365).toFixed();

}

tempD();
setInterval(tempD, 1000);
