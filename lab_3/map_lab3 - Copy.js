var mymap = L.map("map", {center: [46.65515269578446, 8.708739314558096],zoom:8});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var myIcon= L.icon({
    iconUrl: 'icon_640.png',
    iconsize: [30,30],
    iconAnchor:[0,0],
    popupAnchor:[15,10],
});

var zurich =L.marker([47.37707,8.53956], {icon: myIcon}).bindPopup("<b>Zurich").addTo(mymap);
var Lausanne =L.marker([46.5196,6.63222], {icon: myIcon}).bindPopup("<b>Lausanne").addTo(mymap);
var Geneva =L.marker([46.20832999,6.142749981], {icon: myIcon}).bindPopup("<b>Geneva").addTo(mymap);
var Montreux =L.marker([46.43169001,6.910439982], {icon: myIcon}).bindPopup("<b>Montreux").addTo(mymap);
var CDC =L.marker([46.41414001,6.927529982], {icon: myIcon}).bindPopup("<b>Chateau De Chillon").addTo(mymap);
var Vevey =L.marker([46.46227999,6.842970037], {icon: myIcon}).bindPopup("<b>Vevey").addTo(mymap);
var Bern =L.marker([46.94842997,7.440460014], {icon: myIcon}).bindPopup("<b>Bern").addTo(mymap);
var Lucerne =L.marker([47.04953998,8.304370002], {icon: myIcon}).bindPopup("<b>Lucerne").addTo(mymap);
var Interlaken =L.marker([46.68450003,7.85349002], {icon: myIcon}).bindPopup("<b>Interlaken").addTo(mymap);
var Jungfrau =L.marker([46.53678,7.962230007], {icon: myIcon}).bindPopup("<b>Jungfrau").addTo(mymap);
var Zermatt =L.marker([46.02415998,7.748410039], {icon: myIcon}).bindPopup("<b>Zermatt").addTo(mymap);
var Stmoritz =L.marker([46.49704997,9.838159986], {icon: myIcon}).bindPopup("<b>St, Moritz").addTo(mymap);