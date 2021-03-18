// This array contains the coordinates for all bus stops between MIT and Harvard
//This array contains the coordinates for all bus stops between MIT and Northestern University
const busStopsOne = [
  [-71.09220549368317, 42.35939500930387],
  [-71.09472358709407, 42.35923980520844],
  [-71.0890761447669,  42.3499582901272],
  [-71.1025737870946,  42.34349735684256],
  [-71.08642581593082, 42.3445880128378 ],
  [-71.0847439177849, 42.34264450950078],
  [-71.08843266299372, 42.340083628123],
  
  
];

// TODO: add your own access token
//mapboxgl.accessToken = 'pk.eyJ1IjoibWFoYW1zaCIsImEiOiJja2x6ZTFscnAwZDRpMnVvOTRsaXB5czdzIn0._ncmvwTXliAx0GH73nRx8w';

// This is the map instance
//let map = new mapboxgl.Map({
//  container: 'map',
//  style: 'mapbox://styles/mapbox/streets-v11',
//  center:  [-71.093729, 42.359244],
//  zoom: 13,
//});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
//var marker = new mapboxgl.Marker().setLngLat([-71.093729, 42.359244])
// counter here represents the index of the current bus stop
let i = 0;
var marker1 = new mapboxgl.Marker({"color":"#b40219"}).setLngLat(busStopsOne[i]).addTo(map);
function moveZones() {
  // TODO: move the marker on the map every 4000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  while(i < busStopsOne.length){
  task(i);
   i++; 
  }
//function moveOne() {marker.setLngLat(busStops[counter]).addTo(map);}
//function task(counter){
//setTimeout(moveOne, counter* 1000);
//}
function task(i){
setTimeout(function() {marker1.setLngLat(busStopsOne[i]).addTo(map);},i*4000);
}
  // Make sure you call move() after you increment the counter.

}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { moveZones };
}
