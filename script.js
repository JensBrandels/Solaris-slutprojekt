//min pseudokod finns i readme-filen! 

//DOM Button variables
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
const clickedPlanet = document.getElementById('clickPlanet')

/////////////////////////////////////////API FETCHING///////////////////////////////////////

//Function to get API key and fetch data 
async function getData() {
    
    //fetch API key
    let keyResponse = await fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys', {
        method: 'POST'
    })
    //make it into json
    let data = await keyResponse.json();
    let apiKey = data.key; //here is where we save the key in apiKey variable

    //get info from the bodies API by using our key
    let response = await fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
    method: 'GET',
    headers: {'x-zocom': apiKey} // <----this is where we use the apiKey
    })

    planetData = await response.json()

    return planetData.bodies
}

getData() //start the function and make it run instantly

////////////////////////////////////PRINT OUT DATA FUNCTIONS///////////////////////////////////

//this function writes out all the planets info one by one
function printData(data, index){

    const planetTitle = document.getElementById('planetName')
    planetTitle.innerText = data[index].name.toUpperCase()

    const planetLatinName = document.getElementById('planetLatinName')
    planetLatinName.innerText = data[index].latinName.toUpperCase()

    const planetDesc = document.getElementById('planetDescription')
    planetDesc.innerText = data[index].desc

    const planetSize = document.getElementById('circumference')
    planetSize.innerText = `${data[index].circumference.toLocaleString()} km`

    const planetMaxTemp = document.getElementById('maxTemp')
    planetMaxTemp.innerText = `${data[index].temp.day}°C`

    const planetMinTemp = document.getElementById('minTemp')
    planetMinTemp.innerText = `${data[index].temp.night}°C`

    const sunDistance = document.getElementById('distanceFromSun')
    sunDistance.innerText = `${data[index].distance.toLocaleString()} km`

    //get all moons and write them out
    const moons = data[index].moons
    //get the unique ones (there are dublettes for some reason)
    const uniqueMoons = moons.filter((moon, index) => {
        return moons.indexOf(moon) === index;
    })
    const allMoons = document.getElementById('moons')
    allMoons.innerText = uniqueMoons.join(', ') //here i add a , after every moon it finds inside the array
    if (uniqueMoons.length === 0) {
        allMoons.innerText = `This one has no moons :(`
    }
}

////////////////////////////////////hide infosections//////////////////////////////////

//Hide section with transition instantly at start
function hideSectionOnLoad() {
    document.getElementById('clickBack').style.display = 'none'
    document.getElementById('clickBack').style.opacity = '0';
}
hideSectionOnLoad()

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
    createStars()
    setTimeout(function() {
        getBack.style.opacity = '1'
    }, 100)
}

////////////////////////////////making star background///////////////////////////////////

//function to get stars on background
function createStars(numberOfStars) {
    const section = document.querySelector('section');
    
    for(let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star' //create classname for all the divs
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 6 + 'px';

        star.style.animationDelay = Math.random() * 20 + 's';
        star.style.height = star.style.width; //make it as big as width to make them round later
        star.style.opacity = Math.random();
        
        section.appendChild(star);
    }
}

createStars(100); //create 100 stars

////////////////////////////////////Eventlisteners///////////////////////////////////////

getBack.addEventListener('click', () => {
    hideSectionSlow()
})

theSun.addEventListener('click', () => {
    showSection()
    clickedPlanet.style.background = '#FFD029'
    clickedPlanet.style.boxShadow = '0 0 0 2rem rgba(255,208,41, 0.1), 2rem 0 0 2rem rgba(255,208,41, 0.06)'
    printData(planetData.bodies, 0)
})

mercuryPlanet.addEventListener('click', () => {
    showSection()
    clickedPlanet.style.background = '#888'
    clickedPlanet.style.boxShadow = '0 0 0 2rem rgba(136,136,136, 0.1), 2rem 0 0 2rem rgba(136,136,136, 0.06)'
    printData(planetData.bodies, 1)
})

venusPlanet.addEventListener('click', () => {
    showSection()
    clickedPlanet.style.background = '#E7CDCD'
    clickedPlanet.style.boxShadow = '0 0 0 2rem rgba(231,205,205, 0.1), 2rem 0 0 2rem rgba(231,205,205, 0.06)'
    printData(planetData.bodies, 2)
})

earthPlanet.addEventListener('click', () => {
    showSection()
    clickedPlanet.style.background = '#428ED4'
    clickedPlanet.style.boxShadow = '0 0 0 2rem rgba(66,142,212, 0.1), 2rem 0 0 2rem rgba(66,142,212, 0.06)'
    printData(planetData.bodies, 3)
})

marsPlanet.addEventListener('click', () => {
    showSection()
    clickedPlanet.style.background = '#EF5F5F'
    clickedPlanet.style.boxShadow = '0 0 0 2rem rgba(239,95,95, 0.1), 2rem 0 0 2rem rgba(239,95,95, 0.06)'
    printData(planetData.bodies, 4)
})

jupiterPlanet.addEventListener('click', () => {
    showSection()
    clickedPlanet.style.background = '#E29468'
    clickedPlanet.style.boxShadow = '0 0 0 2rem rgba(226,148,104, 0.1), 2rem 0 0 2rem rgba(226,148,104, 0.06)'
    printData(planetData.bodies, 5)
})

saturnPlanet.addEventListener('click', () => {
    showSection()
    clickedPlanet.style.background = '#C7AA72'
    clickedPlanet.style.boxShadow = '0 0 0 2rem rgba(199,170,114, 0.1), 2rem 0 0 2rem rgba(199,170,114, 0.06)'
    printData(planetData.bodies, 6)
})

uranusPlanet.addEventListener('click', () => {
    showSection()
    clickedPlanet.style.background = '#C9D4F1'
    clickedPlanet.style.boxShadow = '0 0 0 2rem rgba(201,212,241, 0.1), 2rem 0 0 2rem rgba(201,212,241, 0.06)'
    printData(planetData.bodies, 7)
})

neptunePlanet.addEventListener('click', () => {
    showSection()
    clickedPlanet.style.background = '#7A91A7'
    clickedPlanet.style.boxShadow = '0 0 0 2rem rgba(122,145,167, 0.1), 2rem 0 0 2rem rgba(122,145,167, 0.06)'
    printData(planetData.bodies, 8)
})

