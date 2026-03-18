const fs = require('fs')
const raw = fs.readFileSync(__dirname + '/data.json')
console.log("RAW FILE:", raw.slice(0,80))
const data = JSON.parse(raw)
console.log("PARSED DATA:", data.length)
let spotList = [];

const getData = (req, res) => {
    //Application logic looping over top spots
/*This inner function serves as a for loop on each object 
in the data file that has been passed*/
data.forEach(function onEachSpot(spot) {
    console.log("CURRENT SPOT:", spot.name)
            var topSpot = {
                name: spot.name,
                description: spot.description,
                location:  spot.location
            }
            console.log("Compiling spot to list", topSpot)
            spotList.push(topSpot)

})
res.status(200).json(spotList);
}
//exporting the phone line for the server to pass the phone
module.exports = { getData }

