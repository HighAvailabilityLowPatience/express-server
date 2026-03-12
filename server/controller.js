const fs = require('fs')
const raw = fs.readFileSync('data.json')
console.log("RAW FILE:", raw.slice(0,80))
const data = JSON.parse(raw)
console.log("PARSED DATA:", data.length)

const getData = () => {
    //Application logic looping over top spots
/*This inner function serves as a for loop on each object 
in the data file that has been passed*/
data.forEach(function onEachSpot(spot) {
    console.log("CURRENT SPOT:", spot.name)
            var topSpot = {
                name: spot.name,
                description: spot.description,
                url: 'https://www.google.com/maps?q=' + spot.location[0] + ',' + spot.location[1]
            }
            //topSpot.push(topSpot)
            console.log(topSpot)
})
res.json(topSpots);
}
//exporting the phone line for the server to pass the phone
module.exports = { getData }

//getData()