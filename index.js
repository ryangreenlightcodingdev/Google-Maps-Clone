/*
loading up the map and getting directions

*/
// const MAPBOX_ACCESS_TOKEN =
//   "pk.eyJ1Ijoid2ViZGV2c2ltcGxpZmllZCIsImEiOiJja2dyYTRqbW0weWl1MnJxaWF2dGR0ZHMwIn0.lU-OINCILi52P5N98qMbtA"

// navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
//   enableHighAccuracy: true
// })

// function setupMap(centerPosition) {
//   const map = new mapboxgl.Map({
//     accessToken: MAPBOX_ACCESS_TOKEN,
//     container: "map",
//     style: "mapbox://styles/mapbox/streets-v11",
//     center: centerPosition,
//     zoom: 15
//   })

//   const navigationControls = new mapboxgl.NavigationControl()
//   map.addControl(navigationControls)

//   const directionControls = new MapboxDirections({
//     accessToken: MAPBOX_ACCESS_TOKEN
//   })
//   map.addControl(directionControls, "top-left")
// }

// function successLocation(position) {
//   setupMap([position.coords.longitude, position.coords.latitude])
// }

// function errorLocation() {
//   setupMap([-2.24, 53.48])
// }


const MAPBOX_ACCESS_TOKEN =  "pk.eyJ1IjoicnlncmVlbmxpZ2h0Y29kaW5nIiwiYSI6ImNsMWMxcnN0ZTAzZGwzaW1yeThqMmdrMGkifQ.wMQzV_YSQKMw7Dtwj6Z0Sw"



    ///get current location: using the geolocation API built into the browser

    navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy: true})

    function setupMap(centerPosition){
    
    const map = new mapboxgl.Map({
        accessToken: MAPBOX_ACCESS_TOKEN,
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: centerPosition,
        zoom: 15 ///zoom in level
        })
        //creating directions within our map
        const navigationControls = new mapboxgl.NavigationControl()
        map.addControl(navigationControls)

        const directionControls = new MapboxDirections({
            accessToken: MAPBOX_ACCESS_TOKEN
        })
        map.addControl(directionControls,"top-left")
    
    }



    //here we are calling setup map if we find our location
    function successLocation(position){
        setupMap([position.coords.longitude,position.coords.latitude])
        
    }

    //else if we dont find our location, we pass a defualt set of coordinates
    function errorLocation(){
        //will be our fallback location
        setupMap([-2.24,53.48])
    }

