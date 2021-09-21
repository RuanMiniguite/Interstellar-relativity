async function tempD(){
    
    var dateIni = new Date('2000-06-16 06:00')
    var dateEarth = new Date() 

    var secondEarth = ((dateEarth - dateIni) / 1000).toFixed()
    var secondMiller = (secondEarth / 3679200).toFixed()

    console.log(secondEarth)
    console.log(secondMiller)

    document.getElementById('earths').textContent = secondEarth
    document.getElementById('earthm').textContent = (secondEarth / 60).toFixed()
    document.getElementById('earthh').textContent = ((secondEarth / 60) / 60).toFixed()
    document.getElementById('earthd').textContent = (((secondEarth / 60) / 60) / 24).toFixed()
    document.getElementById('eartha').textContent = ((((secondEarth / 60) / 60) / 24) / 365).toFixed()

    document.getElementById('millers').textContent = secondMiller
    document.getElementById('millerm').textContent = (secondMiller / 60).toFixed()
    document.getElementById('millerh').textContent = ((secondMiller / 60) / 60).toFixed()
    document.getElementById('millerd').textContent = (((secondMiller / 60) / 60) / 24).toFixed()
    document.getElementById('millera').textContent = ((((secondMiller / 60) / 60) / 24) / 365).toFixed()

}

tempD()
setInterval(tempD, 1000)