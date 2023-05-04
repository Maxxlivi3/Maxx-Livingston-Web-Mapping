//Creating the map variable
var mymap = L.map("map").setView([43.81642117539796, -91.23209456992531], 12.5);

//Setup Base Layers
var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var grayscale = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);


//Set up icon variables
var myIcon1 = L.icon({
    iconUrl: 'images/.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon2 = L.icon({
    iconUrl: 'images/icon_2.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon3 = L.icon({
    iconUrl: 'images/restarunt.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon4 = L.icon({
    iconUrl: 'images/icon_1.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon5 = L.icon({
    iconUrl: 'images/icon_2.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon6 = L.icon({
    iconUrl: 'images/icon_3.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon6 = L.icon({
    iconUrl: 'images/icon_4.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon7 = L.icon({
    iconUrl: 'images/icon_5.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon8 = L.icon({
    iconUrl: 'images/icon_6.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon9 = L.icon({
    iconUrl: 'images/icon_7.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon10 = L.icon({
    iconUrl: 'images/icon_7.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

// Create custom popups with images
var WaterFrontPopup = "Waterfront Restaurant and Tavern<br/><img src='https://media-cdn.tripadvisor.com/media/photo-s/03/c8/10/d2/waterfront-restaurant.jpg' alt='Water Front' width='150px'/>";

var FreighthousePopup = "The Freighthouse Restaurant<br/><img src='https://s3-media0.fl.yelpcdn.com/bphoto/-IEEKusF5u3Xz2NnWj8rHg/348s.jpg' alt='Freight house' width='150px'/>";

var SHOGUNPopup = "SHOGUN Sushi & Hibachi<br/><img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Flacrossetribune.com%2Fnews%2Flocal%2Fdinner-and-a-show-bamboo-house-chefs-say-it-s-not-just-about-the-food%2Farticle_9dc84ba4-6bf6-11e1-b719-001871e3ce6c.html&psig=AOvVaw0v8g6GFwXR9ZTcquOayFIz&ust=1683251612860000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPir64fH2v4CFQAAAAAdAAAAABAD.jpg' alt='ShoGun' width='150px'/>";

var CrookedpintPopup = "Crooked Pint Ale House<br/><img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fexplorelacrosse.com%2Fproject%2Fcrooked-pint-ale-house%2F&psig=AOvVaw0WlIVqRNKyV6b35Its58-2&ust=1683251707537000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjApLPH2v4CFQAAAAAdAAAAABAD.jpg' alt='Crooked Pint' width='150px'/>";

var BennettsPopup = "Bennett O' Riley's Pub<br/><img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fbennettorileys.com%2Fourmenu%2F&psig=AOvVaw35SBpNBjHC3sJP0XboOTbk&ust=1683251763718000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCtrc3H2v4CFQAAAAAdAAAAABAD.jpg' alt='Bennetts' width='150px'/>";

var AlpinePopup = "Alpine Inn <br/><img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Falpineinn.org%2F&psig=AOvVaw3Uta-wwQjcwDAn6N4dK10_&ust=1683251793513000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKDkwdzH2v4CFQAAAAAdAAAAABAD.jpg' alt='Alpine' width='150px'/>";

var HowiesPopup = "Howie's on La Crosse<br/><img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.travelwisconsin.com%2Fpubs-taverns%2Fhowies-on-la-crosse-285958&psig=AOvVaw1j-ja1xCeF9_AS8jJYHuLT&ust=1683251851682000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIj6kvjH2v4CFQAAAAAdAAAAABAD.jpg' alt='Howies' width='150px'/>";

var BodegaPopup = "Bodega Brew Pub, Inc.<br/><img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wigrr.com%2Fbodega-brew-pub%2F&psig=AOvVaw2skgQi4HOyLSsuzIQWITeQ&ust=1683251884484000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIDXt4fI2v4CFQAAAAAdAAAAABAD.jpg' alt='Bodega' width='150px'/>";

var RaddisonPopup = "The Raddsion Hotel<br/><img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.travelwisconsin.com%2Fhotels-motels%2Fradisson-hotel-la-crosse-199766&psig=AOvVaw3bFTh4msXo9tguA5tlyF0O&ust=1683251911546000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLDnqZbI2v4CFQAAAAAdAAAAABAD.jpg' alt='Raddison' width='150px'/>";

var CharmantPopup = "Charmant Hotel<br/><img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.com%2FHotel_Review-g60015-d8074908-Reviews-The_Charmant_Hotel-La_Crosse_Wisconsin.html&psig=AOvVaw2Mte-0CH3q_pmEItxLPdIL&ust=1683251947748000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNiH3aXI2v4CFQAAAAAdAAAAABAD.jpg' alt='Charmant' width='150px'/>";

var customOptions ={'maxWidth': '150','className' : 'custom'};

// Data points
var coords = [
    [43.81118038085743, -91.25691148593455],
    [43.81596038674474, -91.25322179027782],
    [43.87132471189932, -91.21256060273882],
    [43.869469948229515, -91.20198780273887],
    [43.811678087510074, -91.25330999109765],
    [43.81199218681791, -91.1926719297272],
    [43.817252799511344, -91.23999243157657],
    [43.811764750238225, -91.25197937575503],
    [43.8134901511864, -91.25553476041236],
    [43.81484649705006, -91.25416806041233]
];

// Marker Layergroup
var loc = L.layerGroup();
L.marker(coords[0], {icon: myIcon1}).bindPopup(WaterFrontPopup, customOptions).addTo(loc);
L.marker(coords[1], {icon: myIcon2}).bindPopup(FreighthousePopup, customOptions).addTo(loc);
L.marker(coords[2], {icon: myIcon3}).bindPopup(SHOGUNPopup, customOptions).addTo(loc);
L.marker(coords[3], {icon: myIcon4}).bindPopup(CrookedpintPopup, customOptions).addTo(loc);
L.marker(coords[4], {icon: myIcon5}).bindPopup(BennettsPopup, customOptions).addTo(loc);
L.marker(coords[5], {icon: myIcon6}).bindPopup(AlpinePopup, customOptions).addTo(loc);
L.marker(coords[6], {icon: myIcon7}).bindPopup(HowiesPopup, customOptions).addTo(loc);
L.marker(coords[7], {icon: myIcon8}).bindPopup(Bodega, customOptions).addTo(loc);
L.marker(coords[8], {icon: myIcon9}).bindPopup(RaddisonPopup, customOptions).addTo(loc);
L.marker(coords[9], {icon: myIcon10}).bindPopup(CharmantPopup, customOptions).addTo(loc);
loc.addTo(mymap);



// Add a scalebar 
L.control.scale({position: 'bottomleft', maxWidth: '150', metric: 'True'}).addTo(mymap);

// Create menu items
var baseLayers = {
    'Grayscale': grayscale,
    'Streets': streets,
	};

var overlays = {
    '7 Wonders of the World': loc,
    'Travel Path': line,
};

//Create the menu window
var layerControl = L.control.layers(baseLayers, overlays, {collapsed: false}).addTo(mymap); //collapsed: true is defaults

//Create locator map
var miniMap = new L.Control.MiniMap(L.tileLayer('https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=tZnptaeI9RvKHsX18rbW'), {
    toggleDisplay: true,
    position: 'bottomleft'
}).addTo(mymap);

//Pop-up for showing XY coordinates on map
//// Create an empty popup
var popup = L.popup();
            
//// Function to set popup contents
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(
        "You clicked the map at -<br>" + 
        "<b>long:</b> " + e.latlng.lng + "<br>" + 
        "<b>lat:</b> " + e.latlng.lat
    ).openOn(mymap);}

//// Add event listener for click events to show lat long on the map
mymap.addEventListener("click", onMapClick);

// Add Navigation Buttons
L.easyButton(('1 height=50%'), function(btn, map){
    map.setView(coords[0], 15);
}).addTo(mymap);
L.easyButton(('2 height=50%'), function(btn, map){
    map.setView(coords[1], 15);
}).addTo(mymap);
L.easyButton(('3 height=50%'), function(btn, map){
    map.setView(coords[2], 15);
}).addTo(mymap);
L.easyButton(('4 height=50%'), function(btn, map){
    map.setView(coords[3], 15);
}).addTo(mymap);
L.easyButton(('5 height=50%'), function(btn, map){
    map.setView(coords[4], 15);
}).addTo(mymap);
L.easyButton(('6 height=50%'), function(btn, map){
    map.setView(coords[5], 15);
}).addTo(mymap);
L.easyButton(('7 height=50%'), function(btn, map){
    map.setView(coords[6], 15);
}).addTo(mymap);

L.easyButton(('<img src="images/globe_icon.png", height=85%>'), function(btn, map){
    map.setView([6.794952075439587, 20.91148703911037], 3);
}).addTo(mymap);
