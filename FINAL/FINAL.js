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

// Create custom popups with images
var WaterFrontPopup = "Waterfront Restaurant and Tavern<br/><img src='https://media-cdn.tripadvisor.com/media/photo-s/03/c8/10/d2/waterfront-restaurant.jpg' alt='Water Front' width='150px'/>";

var FreighthousePopup = "The Freighthouse Restaurant<br/><img src='https://s3-media0.fl.yelpcdn.com/bphoto/-IEEKusF5u3Xz2NnWj8rHg/348s.jpg' alt='Freight house' width='150px'/>";

var SHOGUNPopup = "SHOGUN Sushi & Hibachi<br/><img src='https://www.travelwisconsin.com/uploads/places/65/650bd778-4f28-4e7d-b592-9246001b9ba2-shogun-sushi.jpg?preset=listing-page-slider-desktop' alt='ShoGun' width='150px'/>";

var CrookedpintPopup = "Crooked Pint Ale House<br/><img src='https://explorelacrosse.com/wp-content/uploads/2019/10/Crooked-Pint-pic-scaled.jpg' alt='Crooked Pint' width='150px'/>";

var BennettsPopup = "Bennett O' Riley's Pub<br/><img src='https://bennettorileys.com/wp-content/uploads/2021/11/bennetts-19.jpg' alt='Bennetts' width='150px'/>";

var AlpinePopup = "Alpine Inn <br/><img src='https://img1.wsimg.com/isteam/ip/2efd0467-3e5a-4562-8e05-fe89d45fcaee/0FEF37E4-3188-43EC-8EE0-8AFBB65CBC18.jpeg/:/cr=t:13.74%25,l:0%25,w:100%25,h:66.71%25/rs=w:1240,h:620,cg:true' alt='Alpine' width='150px'/>";

var HowiesPopup = "Howie's on La Crosse<br/><img src='https://www.travelwisconsin.com/uploads/places/70/709f6bfc-b680-4e3f-9877-51365181cf50-howies-dining.jpg?preset=listing-page-slider-desktop' alt='Howies' width='150px'/>";

var BodegaPopup = "Bodega Brew Pub, Inc.<br/><img src='https://www.wigrr.com/wp-content/uploads/2017/08/bodega-brew-pub.jpg' alt='Bodega' width='150px'/>";

var RaddisonPopup = "The Raddsion Hotel<br/><img src='https://media.radissonhotelsamericas.com/image/radisson-hotel-la-crosse/exterior/20828-139329-f79687389_3xl.jpg?impolicy=CustomCrop&cwidth=670&cheight=603' alt='Raddison' width='150px'/>";

var CharmantPopup = "Charmant Hotel<br/><img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/e4/87/4d/exterior.jpg?w=1100&h=-1&s=1.jpeg' alt='Charmant' width='150px'/>";

var customOptions ={'maxWidth': '150','className' : 'custom'};

// Add a scalebar 
L.control.scale({position: 'bottomleft', maxWidth: '150', metric: 'True'}).addTo(mymap);

// Set up landmark variables and individual landmarks
var landmarks = L.layerGroup();

var WaterFront = L.marker([43.81118038085743, -91.25691148593455]).bindPopup(WaterFrontPopup, customOptions).addTo(landmarks);
var Freighthouse = L.marker([43.81596038674474, -91.25322179027782]).bindPopup(FreighthousePopup, customOptions).addTo(landmarks);
var SHOGUN = L.marker([43.87132471189932, -91.21256060273882]).bindPopup(SHOGUNPopup, customOptions).addTo(landmarks);
var Crookedpint = L.marker([43.869469948229515, -91.20198780273887]).bindPopup(CrookedpintPopup, customOptions).addTo(landmarks);
var Bennetts = L.marker([43.811678087510074, -91.25330999109765]).bindPopup(BennettsPopup, customOptions).addTo(landmarks);
var Alpine = L.marker([43.81199218681791, -91.1926719297272]).bindPopup(AlpinePopup, customOptions).addTo(landmarks);
var Howies = L.marker([43.817252799511344, -91.23999243157657]).bindPopup(HowiesPopup, customOptions).addTo(landmarks);
var Bodega = L.marker([43.811764750238225, -91.25197937575503]).bindPopup(BodegaPopup, customOptions).addTo(landmarks);
var Raddison = L.marker([43.8134901511864, -91.25553476041236]).bindPopup(RaddisonPopup, customOptions).addTo(landmarks);
var Charmant = L.marker([43.81484649705006, -91.25416806041233]).bindPopup(CharmantPopup, customOptions).addTo(landmarks);

//Clusters
var clustermarkers = L.markerClusterGroup();
Laxbars.features.forEach(function(feature) {
    clustermarkers.addLayer(L.marker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]]));
})

 
// Add Navigation Buttons
L.easyButton(('<img src="FOOD.png", height=85%>'), function(btn, map){
    map.setView([43.81118038085743, -91.25691148593455], 20);
}).addTo(mymap);
L.easyButton(('<img src="FOOD.png", height=85%>'), function(btn, map){
    map.setView([43.81596038674474, -91.25322179027782], 20);
}).addTo(mymap);
L.easyButton(('<img src="FOOD.png", height=85%>'), function(btn, map){
    map.setView([43.87132471189932, -91.21256060273882], 20);
}).addTo(mymap);
L.easyButton(('<img src="FOOD.png", height=85%>'), function(btn, map){
    map.setView([43.869469948229515, -91.20198780273887], 20);
}).addTo(mymap);
L.easyButton(('<img src="drink.png", height=85%>'), function(btn, map){
    map.setView([43.811678087510074, -91.25330999109765], 20);
}).addTo(mymap);
L.easyButton(('<img src="drink.png", height=85%>'), function(btn, map){
    map.setView([43.81199218681791, -91.1926719297272], 20);
}).addTo(mymap);
L.easyButton(('<img src="drink.png", height=85%>'), function(btn, map){
    map.setView([43.817252799511344, -91.23999243157657], 20);
}).addTo(mymap);
L.easyButton(('<img src="drink.png", height=85%>'), function(btn, map){
    map.setView([43.811764750238225, -91.25197937575503], 20);
}).addTo(mymap);
L.easyButton(('<img src="HOTELICON.png", height=85%>'), function(btn, map){
    map.setView([43.8134901511864, -91.25553476041236], 20);
}).addTo(mymap);
L.easyButton(('<img src="HOTELICON.png", height=85%>'), function(btn, map){
    map.setView([43.81484649705006, -91.25416806041233], 20);
}).addTo(mymap);

L.easyButton(('<img src="globe_icon.png", height=85%>'), function(btn, map){
    map.setView([43.81642117539796, -91.23209456992531], 12.5);
}).addTo(mymap);

//Create locator map
var miniMap = new L.Control.MiniMap(L.tileLayer('https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=tZnptaeI9RvKHsX18rbW'), {
    toggleDisplay: true,
    position: 'bottomleft'
}).addTo(mymap);

//Proportional Circles
function getRadius(area) {
    var radius = Math.sqrt(area/Math.PI);
    return radius *0.00013;
}

var propcircles = new L.geoJson(money_spent_food, {
    onEachFeature: function(feature, featureLayer){
        featureLayer.bindPopup('<p>Name: <b>'+feature.properties.name+ '</b></br>' +
                                   'Average $ Spent: '+feature.properties['Average $ Spent']+'</p>');
    },
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng, {
          fillColor: "green", 
          color: 'green',
          weight: 1,       
          radius: feature.properties["Average $ Spent"],
          fillOpacity: .35
      }).on({
            mouseover: function(e) {
                this.openPopup();
                this.setStyle({fillOpacity: .8, fillColor: 'green'});

            },
            mouseout: function(e) {
                this.closePopup();
                this.setStyle({fillOpacity: .35, fillColor: 'green'});  
            }
    });
  }
}).addTo(mymap);


// Create menu items
var baseLayers = {
    'Grayscale': grayscale,
    'Streets': streets,
    };

var overlays = {
    'Landmarks': landmarks,
    'Proportional Circles': propcircles,
    'Cluster': clustermarkers,
};
//Create the menu
 var layerControl = L.control.layers(baseLayers, overlays, {collapsed:false}).addTo(mymap);