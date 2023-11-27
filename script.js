//steg 1 skriv ner alla variabler som jag vet ska kopplas till DOM som alla planeter
//steg 2 skapa hide och show funktion på section med info
//steg 3 skapa en function som fetchar API och gör det till en json
//steg 4 skapa en function som skriver ut de olika sakerna jag behöver via dom
//steg 5 skapa en funktion som kan loopa och skriva ut innehållet som en string
//steg 6 skapa en knapp på varje planet-ID och gör en eventlistener på dom
//steg 7 skriv i varje knapp hur planetens style ska vara så rätt färg hamnar på rätt knapp
//steg 8 kasta in API fetch funktionen på varje knapp
//steg 9 skapa en reset function som resettar alla keyvalues vi skriver ut i funktionerna

//Global variables

//DOM variables
const getBack = document.getElementById('clickBack')
const theSun = document.getElementById('sun')
const mercuryPlanet = document.getElementById('mercury')
const venusPlanet = document.getElementById('venus')
const earthPlanet = document.getElementById('earth')
const marsPlanet = document.getElementById('mars')
const jupiterPlanet = document.getElementById('jupiter')
const saturnPlanet = document.getElementById('saturn')
const uranusPlanet = document.getElementById('uranus')
const neptunePlanet = document.getElementById('neptune')

//************************hide infosections*********************** */

//Hide section with transition instantly at start
function hideSectionFast() {
    document.getElementById('clickBack').style.display = 'none'
    document.getElementById('clickBack').style.opacity = '0';
}
hideSectionFast()

//hide section slow when clicking it after having clicked on planets to get info
function hideSectionSlow() {
    document.getElementById('clickBack').style.opacity = '0';
    document.getElementById('clickBack').style.transition = 'opacity 1s';
    
    //after transition, also display NONE on section to make hovers work again
    setTimeout(function() {
        getBack.style.display = 'none';
    }, 1000)
}

function showSection() {
    //Show the hidden section with flex
    document.getElementById('clickBack').style.display = 'flex'
    document.getElementById('clickBack').style.transition = 'opacity 1s';
    
    setTimeout(function() {
        getBack.style.opacity = '1'
    }, 100)
}

//**********************Eventlisteners******************** */

getBack.addEventListener('click', () => {
    hideSectionSlow()
})

theSun.addEventListener('click', () => {
    showSection()
})

mercuryPlanet.addEventListener('click', () => {
    showSection()
})

venusPlanet.addEventListener('click', () => {
    showSection()
})

earthPlanet.addEventListener('click', () => {
    showSection()
})

marsPlanet.addEventListener('click', () => {
    showSection()
})

jupiterPlanet.addEventListener('click', () => {
    showSection()
})

saturnPlanet.addEventListener('click', () => {
    showSection()
})

uranusPlanet.addEventListener('click', () => {
    showSection()
})

neptunePlanet.addEventListener('click', () => {
    showSection()
})

