const apiKey = 'pk.eyJ1IjoiaW53ZGQ3Mzg4IiwiYSI6ImNrb2pzbWFtdDA1am8yb2t6amlyODQ1cWsifQ.4erRleursilPgiovfdxL9g'

var mymap = L.map('mapid', {doubleClickZoom: false}).setView([7.55068, 39.133300], 5,);
mymap.addControl(new L.Control.Fullscreen());
//Map 1 (original)
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    minZoom: 2,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey,
}).addTo(mymap);

//Map 2 (osm)
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 18,
    minZoom: 2,
});

//Map 3 (Google Static)
googlestreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 19,
    minZoom: 2,
    subdomains:['mt0','mt1','mt2','mt3']
});

//Map 5 (Google Hybrid)
googlehybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 19,
    minZoom: 2,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(mymap);



// Adding Icon
var circleIcon = L.icon (
    {   className: 'icon1',
        iconUrl : 'lib/icon_circle2.png',
        shadowUrl: 'lib/icon_circle.png',
        iconSize : [20, 20],
        shadowSize: [20, 20],
        iconAnchor : [10, 9.5],
        popupAnchor : [0, 42]
    }
)

var MCIcon = L.icon (
    {
        iconUrl : 'lib/icon_MC2.png',
        shadowUrl: 'lib/icon_MC.png',
        iconSize : [20, 20],
        shadowSize: [20, 20],
        iconAnchor : [10, 9.5],
        popupAnchor : [0, 42]
    }
)

var RCIcon = L.icon (
    {
        iconUrl : 'lib/icon_RC2.png',
        shadowUrl: 'lib/icon_RC.png',
        iconSize : [20, 20],
        shadowSize: [20, 20],
        iconAnchor : [10, 9.5],
        popupAnchor : [0, 42]
    }
)

var StarIcon = L.icon (
    {
        iconUrl : 'lib/icon_star2.png',
        shadowUrl: 'lib/icon_star.png',
        iconSize : [20, 20],
        shadowSize: [20, 20],
        iconAnchor : [10, 9.5],
        popupAnchor : [0, 42]
    }
)




// Adding Markers

//var popup = L.popup({autoClose: false, closeOnClick: false}).setContent('<img height="50px" src="lib/zmaban.png">')

//var marker1 = L.marker([15.305277, 59.476223], {icon: circleIcon, draggable: true}).addTo(mymap).bindTooltip('Label').openTooltip();
//    marker2 = L.marker([13.997047, 59.476223], {icon: circleIcon, draggable: true}).bindPopup('<img height="50px" src ="lib/zhamdayet.png">', {autoClose: false, closeOnClick: false,}).addTo(mymap);

var gadarief = L.marker([14.044225, 35.388162], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zgadarief.png">', {autoClose: false, closeOnClick: false,}).bindTooltip('<img height="50px" src="lib/zgadarief.png">').addTo(mymap);
    hamdayet = L.marker([15.455983, 36.413976], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zhamdayet.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zhamdayet.png">').addTo(mymap);
    galabat = L.marker([12.960314, 36.149322], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalabat.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalabat.png">').addTo(mymap);
    jodah = L.marker([12.526098, 33.020113], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zjodah.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zjodah.png">').addTo(mymap);
    whitenile = L.marker([14.165762, 32.244053], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zwhitenile.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zwhitenile.png">').addTo(mymap);

var sudan = L.layerGroup([gadarief, hamdayet, galabat, jodah, whitenile]);


var renk = L.marker([11.835407, 32.797374], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zrenk.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zrenk.png">').addTo(mymap);
    maban = L.marker([10.053668, 33.040016], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zmaban.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmaban.png">').addTo(mymap);
    juba = L.marker([4.851911, 31.598537], {icon: StarIcon}).bindPopup('<img height="50px" src="lib/zjuba.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zjuba.png">').addTo(mymap);
    nadapal = L.marker([4.405186, 34.283834], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/znadapal.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/znadapal.png">').addTo(mymap);
    nimule = L.marker([3.586098, 32.068238], {icon: circleIcon}).bindPopup('<img height="40px" src="lib/znimule.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/znimule.png">').addTo(mymap);

var southsudan = L.layerGroup([renk, maban, juba, nadapal, nimule]);

var elegu = L.marker([3.563650, 32.071642], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zelegu.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zelegu.png">').addTo(mymap);
    adjumani = L.marker([3.375915, 31.790426], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zadjumani.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zadjumani.png">').addTo(mymap);
    malaba = L.marker([0.641313, 34.263055], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmalaba.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmalaba.png">').addTo(mymap);
    busia = L.marker([0.468229, 34.090577], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zbusia.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbusia.png">').addTo(mymap);

var uganda = L.layerGroup([elegu, adjumani, malaba, busia]);

var turkana = L.marker([3.446768, 35.639530], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zturkana.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zturkana.png">').addTo(mymap);
    marsabit = L.marker([2.339366, 37.991614], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmarsabit.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmarsabit.png">').addTo(mymap);
    garissa = L.marker([-0.455128, 39.641166], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zgarissa.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgarissa.png">').addTo(mymap);
    mandera = L.marker([3.939194, 41.857806], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmandera.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmandera.png">').addTo(mymap);
    daadab = L.marker([0.057190, 40.305615], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zdaadab.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdaadab.png">').addTo(mymap);
    diif = L.marker([0.994737, 40.959344], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdiif.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdiif.png">').addTo(mymap);

var kenya = L.layerGroup([turkana, marsabit, garissa, mandera, daadab, diif]);

var metema = L.marker([12.958203, 36.152759], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmetema.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmetema.png">').addTo(mymap);
    semera = L.marker([11.794918, 41.006512], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zsemera.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zsemera.png">').addTo(mymap);
    gambela = L.marker([8.248250, 34.591613], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zgambela.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgambela.png">').addTo(mymap);
    togwajale = L.marker([9.500747, 43.182245], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/ztogwajale.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/ztogwajale.png">').addTo(mymap);
    moyale = L.marker([3.530475, 39.052264], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmoyale.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmoyale.png">').addTo(mymap);
    hawli = L.marker([11.876704, 41.736924], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zhawli.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zhawli.png">').addTo(mymap);

var ethiopia = L.layerGroup([metema, semera, gambela, togwajale, moyale, hawli]);

var belethawa = L.marker([3.924454, 41.874911], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zbelethawa.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbelethawa.png">').addTo(mymap);
    diif2 = L.marker([0.994551, 40.964303], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdiif2.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdiif2.png">').addTo(mymap);
    dhoblei = L.marker([0.413374, 41.010596], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdhoblei.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdhoblei.png">').addTo(mymap);
    baidoa = L.marker([3.121935, 43.644664], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zbaidoa.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbaidoa.png">').addTo(mymap);
    mogadishu = L.marker([2.037124, 45.337671], {icon: StarIcon}).bindPopup('<img height="50px" src="lib/zmogadishu.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmogadishu.png">').addTo(mymap);
    wajale = L.marker([9.602048, 43.335718], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zwajale.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zwajale.png">').addTo(mymap);
    bosasso = L.marker([11.282172, 49.180776], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zbosasso.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbosasso.png">').addTo(mymap);
//.bindTooltip("my tooltip kit").openTooltip();
    
var somalia = L.layerGroup([belethawa, diif2, dhoblei, baidoa, mogadishu, wajale, bosasso]);

var alisabieh = L.marker([11.154281, 42.704840], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zalisabieh.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zalisabieh.png">').addTo(mymap);
    galafi = L.marker([11.717967, 41.837472], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalafi.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalafi.png">').addTo(mymap);
    dora = L.marker([12.150212, 42.476356], {icon: circleIcon}).bindPopup(('<img height="50px" src="lib/zdora.png">'), {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdora.png">').addTo(mymap);
    djiboutiport = L.marker([11.608643, 43.142559], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdjiboutiport.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdjiboutiport.png">').addTo(mymap);
    obock = L.marker([11.964294, 43.293760], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zobock.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zobock.png">').addTo(mymap);
    obock2 = L.marker([11.964997, 43.287527], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zobock2.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zobock2.png">').addTo(mymap);
    
var djibouti = L.layerGroup([alisabieh, galafi, dora, djiboutiport, obock, obock2,]);

// Add popup message


//renk.bindTooltip('<b>Renk</b> <div style="text-align:ceb"> <img width="150" height="150" src="lib/image.jpg"/> </div>');


var adjumanih = L.marker([3.375915, 31.790426], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zadjumani.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zadjumani.png">');
    alisabiehh = L.marker([11.154281, 42.704840], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zalisabieh.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zalisabieh.png">');
    baidoah = L.marker([3.121935, 43.644664], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zbaidoa.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbaidoa.png">');
    bosassoh = L.marker([11.282172, 49.180776], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zbosasso.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbosasso.png">');
    daadabh = L.marker([0.057190, 40.305615], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zdaadab.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdaadab.png">');
    dhobleih = L.marker([0.413374, 41.010596], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdhoblei.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdhoblei.png">');
    diif2h = L.marker([0.994551, 40.964303], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdiif2.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdiif2.png">');
    diifh = L.marker([0.994737, 40.959344], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdiif.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdiif.png">');
    dorah = L.marker([12.150212, 42.476356], {icon: circleIcon}).bindPopup(('<img height="50px" src="lib/zdora.png">'), {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdora.png">');
    eleguh = L.marker([3.563650, 32.071642], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zelegu.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zelegu.png">');
    gadariefh = L.marker([14.044225, 35.388162], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zgadarief.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgadarief.png">');
    galabath = L.marker([12.960314, 36.149322], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalabat.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalabat.png">');
    galafih = L.marker([11.717967, 41.837472], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalafi.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalafi.png">');
    gambelah = L.marker([8.248250, 34.591613], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zgambela.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgambela.png">');
    hawlih = L.marker([11.876704, 41.736924], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zhawli.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zhawli.png">');
    mabanh = L.marker([10.053668, 33.040016], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zmaban.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmaban.png">');
    manderah = L.marker([3.939194, 41.857806], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmandera.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmandera.png">');
    marsabith = L.marker([2.339366, 37.991614], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmarsabit.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmarsabit.png">');
    metemah = L.marker([12.958203, 36.152759], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmetema.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmetema.png">');
    moyaleh = L.marker([3.530475, 39.052264], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmoyale.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmoyale.png">');
    nimuleh = L.marker([3.586098, 32.068238], {icon: circleIcon}).bindPopup('<img height="40px" src="lib/znimule.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/znimule.png">');
    obockh = L.marker([11.964294, 43.293760], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zobock.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zobock.png">');
    obock2h = L.marker([11.964997, 43.287527], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zobock2.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zobock2.png">');
    renkh = L.marker([11.835407, 32.797374], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zrenk.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zrenk.png">');
    semerah = L.marker([11.794918, 41.006512], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zsemera.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zsemera.png">');

var health = L.layerGroup([adjumanih, alisabiehh, baidoah, bosassoh, daadabh, dhobleih, diif2h, diifh, dorah, 
    eleguh, gadariefh, galabath, galafih, gambelah, hawlih, mabanh, manderah, marsabith, metemah, moyaleh, 
    nimuleh, obockh, obock2h, renkh, semerah,]);

// Adding Polygon
var polygon = L.polygon([[20.000066, 24.000162],[8.706755, 35.529665],[7.325975, 43.020540],[1.678135, 38.478610],], {
    color: 'white',
    opacity: 0.5,
    fillColor: 'blue',
    fillOpacity: 0.15,
    dashArray: '5, 3, 2',
});

// Adding More Layer Groups

var adjumaniw = L.marker([3.375915, 31.790426], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zadjumani.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zadjumani.png">');
    alisabiehw = L.marker([11.154281, 42.704840], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zalisabieh.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zalisabieh.png">');
    baidoaw = L.marker([3.121935, 43.644664], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zbaidoa.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbaidoa.png">');
    bosassow = L.marker([11.282172, 49.180776], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zbosasso.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbosasso.png">');
    daadabw = L.marker([0.057190, 40.305615], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zdaadab.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdaadab.png">');
    dhobleiw = L.marker([0.413374, 41.010596], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdhoblei.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdhoblei.png">');
    diif2w = L.marker([0.994551, 40.964303], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdiif2.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdiif2.png">');
    diifw = L.marker([0.994737, 40.959344], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdiif.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdiif.png">');
    doraw = L.marker([12.150212, 42.476356], {icon: circleIcon}).bindPopup(('<img height="50px" src="lib/zdora.png">'), {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdora.png">');
    eleguw = L.marker([3.563650, 32.071642], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zelegu.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zelegu.png">');
    gadariefw = L.marker([14.044225, 35.388162], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zgadarief.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgadarief.png">');
    galabatw = L.marker([12.960314, 36.149322], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalabat.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalabat.png">');
    galafiw = L.marker([11.717967, 41.837472], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalafi.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalafi.png">');
    gambelaw = L.marker([8.248250, 34.591613], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zgambela.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgambela.png">');
    hawliw = L.marker([11.876704, 41.736924], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zhawli.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zhawli.png">');
    mabanw = L.marker([10.053668, 33.040016], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zmaban.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmaban.png">');
    manderaw = L.marker([3.939194, 41.857806], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmandera.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmandera.png">');
    marsabitw = L.marker([2.339366, 37.991614], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmarsabit.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmarsabit.png">');
    metemaw = L.marker([12.958203, 36.152759], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmetema.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmetema.png">');
    moyalew = L.marker([3.530475, 39.052264], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmoyale.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmoyale.png">');
    nimulew = L.marker([3.586098, 32.068238], {icon: circleIcon}).bindPopup('<img height="40px" src="lib/znimule.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/znimule.png">');
    obockw = L.marker([11.964294, 43.293760], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zobock.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zobock.png">');
    obock2w = L.marker([11.964997, 43.287527], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zobock2.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zobock2.png">');
    renkw = L.marker([11.835407, 32.797374], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zrenk.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zrenk.png">');
    semeraw = L.marker([11.794918, 41.006512], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zsemera.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zsemera.png">');

var wash = L.layerGroup([adjumaniw, alisabiehw, baidoaw, bosassow, daadabw, dhobleiw, diif2w, diifw, doraw, 
    eleguw, gadariefw, galabatw, galafiw, gambelaw, hawliw, mabanw, manderaw, marsabitw, metemaw, moyalew, 
    nimulew, obockw, obock2w, renkw, semeraw,]);


var adjumaniG = L.marker([3.375915, 31.790426], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zadjumani.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zadjumani.png">');
    alisabiehG = L.marker([11.154281, 42.704840], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zalisabieh.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zalisabieh.png">');
    baidoaG = L.marker([3.121935, 43.644664], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zbaidoa.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbaidoa.png">');
    bosassoG = L.marker([11.282172, 49.180776], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zbosasso.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbosasso.png">');
    daadabG = L.marker([0.057190, 40.305615], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zdaadab.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdaadab.png">');
    dhobleiG = L.marker([0.413374, 41.010596], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdhoblei.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdhoblei.png">');
    diif2G = L.marker([0.994551, 40.964303], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdiif2.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdiif2.png">');
    diifG = L.marker([0.994737, 40.959344], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdiif.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdiif.png">');
    doraG = L.marker([12.150212, 42.476356], {icon: circleIcon}).bindPopup(('<img height="50px" src="lib/zdora.png">'), {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdora.png">');
    eleguG = L.marker([3.563650, 32.071642], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zelegu.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zelegu.png">');
    gadariefG = L.marker([14.044225, 35.388162], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zgadarief.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgadarief.png">');
    galabatG = L.marker([12.960314, 36.149322], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalabat.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalabat.png">');
    galafiG = L.marker([11.717967, 41.837472], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalafi.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalafi.png">');
    gambelaG = L.marker([8.248250, 34.591613], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zgambela.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgambela.png">');
    hawliG = L.marker([11.876704, 41.736924], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zhawli.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zhawli.png">');
    mabanG = L.marker([10.053668, 33.040016], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zmaban.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmaban.png">');
    manderaG = L.marker([3.939194, 41.857806], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmandera.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmandera.png">');
    marsabitG = L.marker([2.339366, 37.991614], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmarsabit.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmarsabit.png">');
    metemaG = L.marker([12.958203, 36.152759], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmetema.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmetema.png">');
    moyaleG = L.marker([3.530475, 39.052264], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmoyale.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmoyale.png">');
    nimuleG = L.marker([3.586098, 32.068238], {icon: circleIcon}).bindPopup('<img height="40px" src="lib/znimule.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/znimule.png">');
    obockG = L.marker([11.964294, 43.293760], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zobock.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zobock.png">');
    obock2G = L.marker([11.964997, 43.287527], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zobock2.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zobock2.png">');
    renkG = L.marker([11.835407, 32.797374], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zrenk.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zrenk.png">');
    semeraG = L.marker([11.794918, 41.006512], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zsemera.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zsemera.png">');

var gbv = L.layerGroup([adjumaniG, alisabiehG, baidoaG, bosassoG, daadabG, dhobleiG, diif2G, diifG, doraG, 
    eleguG, gadariefG, galabatG, galafiG, gambelaG, hawliG, mabanG, manderaG, marsabitG, metemaG, moyaleG, 
    nimuleG, obockG, obock2G, renkG, semeraG,]);

var adjumaniR = L.marker([3.375915, 31.790426], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zadjumani.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zadjumani.png">');
    alisabiehR = L.marker([11.154281, 42.704840], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zalisabieh.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zalisabieh.png">');
    baidoaR = L.marker([3.121935, 43.644664], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zbaidoa.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbaidoa.png">');
    bosassoR = L.marker([11.282172, 49.180776], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zbosasso.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbosasso.png">');
    daadabR = L.marker([0.057190, 40.305615], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zdaadab.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdaadab.png">');
    dhobleiR = L.marker([0.413374, 41.010596], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdhoblei.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdhoblei.png">');
    diif2R = L.marker([0.994551, 40.964303], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdiif2.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdiif2.png">');
    diifR = L.marker([0.994737, 40.959344], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdiif.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdiif.png">');
    doraR = L.marker([12.150212, 42.476356], {icon: circleIcon}).bindPopup(('<img height="50px" src="lib/zdora.png">'), {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdora.png">');
    eleguR = L.marker([3.563650, 32.071642], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zelegu.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zelegu.png">');
    gadariefR = L.marker([14.044225, 35.388162], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zgadarief.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgadarief.png">');
    galabatR = L.marker([12.960314, 36.149322], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalabat.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalabat.png">');
    galafiR = L.marker([11.717967, 41.837472], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalafi.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalafi.png">');
    gambelaR = L.marker([8.248250, 34.591613], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zgambela.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgambela.png">');
    hawliR = L.marker([11.876704, 41.736924], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zhawli.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zhawli.png">');
    mabanR = L.marker([10.053668, 33.040016], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zmaban.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmaban.png">');
    manderaR = L.marker([3.939194, 41.857806], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmandera.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmandera.png">');
    marsabitR = L.marker([2.339366, 37.991614], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmarsabit.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmarsabit.png">');
    metemaR = L.marker([12.958203, 36.152759], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmetema.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmetema.png">');
    moyaleR = L.marker([3.530475, 39.052264], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmoyale.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmoyale.png">');
    nimuleR = L.marker([3.586098, 32.068238], {icon: circleIcon}).bindPopup('<img height="40px" src="lib/znimule.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/znimule.png">');
    obockR = L.marker([11.964294, 43.293760], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zobock.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zobock.png">');
    obock2R = L.marker([11.964997, 43.287527], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zobock2.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zobock2.png">');
    renkR = L.marker([11.835407, 32.797374], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zrenk.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zrenk.png">');
    semeraR = L.marker([11.794918, 41.006512], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zsemera.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zsemera.png">');

var rcce = L.layerGroup([adjumaniR, alisabiehR, baidoaR, bosassoR, daadabR, dhobleiR, diif2R, diifR, doraR, 
    eleguR, gadariefR, galabatR, galafiR, gambelaR, hawliR, mabanR, manderaR, marsabitR, metemaR, moyaleR, 
    nimuleR, obockR, obock2R, renkR, semeraR,]);

// More Markers for PPE 

var adjumaniP = L.marker([3.375915, 31.790426], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zadjumani.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zadjumani.png">');
    alisabiehP = L.marker([11.154281, 42.704840], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zalisabieh.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zalisabieh.png">');
    belethawaP = L.marker([3.924454, 41.874911], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zbelethawa.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbelethawa.png">');
    bosassoP = L.marker([11.282172, 49.180776], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zbosasso.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbosasso.png">');
    busiaP = L.marker([0.468229, 34.090577], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zbusia.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbusia.png">');
    daadabP = L.marker([0.057190, 40.305615], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zdaadab.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdaadab.png">');
    dhobleiP = L.marker([0.413374, 41.010596], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdhoblei.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdhoblei.png">');
    diifP = L.marker([0.994737, 40.959344], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdiif.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdiif.png">');
    diif2P = L.marker([0.994551, 40.964303], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdiif2.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdiif2.png">');
    djiboutiportP = L.marker([11.608643, 43.142559], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdjiboutiport.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdjiboutiport.png">');
    doraP = L.marker([12.150212, 42.476356], {icon: circleIcon}).bindPopup(('<img height="50px" src="lib/zdora.png">'), {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdora.png">');
    eleguP = L.marker([3.563650, 32.071642], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zelegu.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zelegu.png">');
    gadariefP = L.marker([14.044225, 35.388162], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zgadarief.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgadarief.png">');
    galabatP = L.marker([12.960314, 36.149322], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalabat.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalabat.png">');
    galafiP = L.marker([11.717967, 41.837472], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalafi.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalafi.png">');
    gambelaP = L.marker([8.248250, 34.591613], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zgambela.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgambela.png">');
    garissaP = L.marker([-0.455128, 39.641166], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zgarissa.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgarissa.png">');
    hamdayetP = L.marker([15.455983, 36.413976], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zhamdayet.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zhamdayet.png">');
    hawliP = L.marker([11.876704, 41.736924], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zhawli.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zhawli.png">');
    jodahP = L.marker([12.526098, 33.020113], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zjodah.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zjodah.png">');
    jubaP = L.marker([4.851911, 31.598537], {icon: StarIcon}).bindPopup('<img height="50px" src="lib/zjuba.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zjuba.png">');
    mabanP = L.marker([10.053668, 33.040016], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zmaban.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmaban.png">');
    malabaP = L.marker([0.641313, 34.263055], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmalaba.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmalaba.png">');
    manderaP = L.marker([3.939194, 41.857806], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmandera.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmandera.png">');
    marsabitP = L.marker([2.339366, 37.991614], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmarsabit.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmarsabit.png">');
    metemaP = L.marker([12.958203, 36.152759], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmetema.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmetema.png">');
    mogadishuP = L.marker([2.037124, 45.337671], {icon: StarIcon}).bindPopup('<img height="50px" src="lib/zmogadishu.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmogadishu.png">');
    moyaleP = L.marker([3.530475, 39.052264], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmoyale.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmoyale.png">');
    nadapalP = L.marker([4.405186, 34.283834], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/znadapal.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/znadapal.png">');
    nimuleP = L.marker([3.586098, 32.068238], {icon: circleIcon}).bindPopup('<img height="40px" src="lib/znimule.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/znimule.png">');
    obockP = L.marker([11.964294, 43.293760], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zobock.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zobock.png">');
    obock2P = L.marker([11.964997, 43.287527], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zobock2.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zobock2.png">');
    renkP = L.marker([11.835407, 32.797374], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zrenk.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zrenk.png">');
    semeraP = L.marker([11.794918, 41.006512], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zsemera.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zsemera.png">');
    togwajaleP = L.marker([9.500747, 43.182245], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/ztogwajale.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/ztogwajale.png">');
    turkanaP = L.marker([3.446768, 35.639530], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zturkana.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zturkana.png">');
    wajaleP = L.marker([9.602048, 43.335718], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zwajale.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zwajale.png">');
    whitenileP = L.marker([14.165762, 32.244053], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zwhitenile.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zwhitenile.png">');

var PPE = L.layerGroup([adjumaniP, alisabiehP, belethawaP, bosassoP, busiaP, daadabP, dhobleiP, diifP, diif2P, djiboutiportP, doraP,
    eleguP, gadariefP, galabatP, galafiP, gambelaP, garissaP, hamdayetP, hawliP, jodahP, jubaP, mabanP, malabaP, manderaP, marsabitP, 
    metemaP, mogadishuP, moyaleP, nadapalP, nimuleP, obockP, obock2P, renkP, semeraP, togwajaleP, turkanaP, wajaleP, whitenileP]);

// More Markers for Testing

var adjumaniT = L.marker([3.375915, 31.790426], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zadjumani.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zadjumani.png">');
    alisabiehT = L.marker([11.154281, 42.704840], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zalisabieh.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zalisabieh.png">');
    bosassoT = L.marker([11.282172, 49.180776], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zbosasso.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbosasso.png">');
    busiaT = L.marker([0.468229, 34.090577], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zbusia.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbusia.png">');
    dhobleiT = L.marker([0.413374, 41.010596], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdhoblei.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdhoblei.png">');
    diifT = L.marker([0.994737, 40.959344], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdiif.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdiif.png">');
    diif2T = L.marker([0.994551, 40.964303], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdiif2.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdiif2.png">');
    doraT = L.marker([12.150212, 42.476356], {icon: circleIcon}).bindPopup(('<img height="50px" src="lib/zdora.png">'), {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdora.png">');
    eleguT = L.marker([3.563650, 32.071642], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zelegu.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zelegu.png">');
    galabatT = L.marker([12.960314, 36.149322], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalabat.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalabat.png">');
    galafiT = L.marker([11.717967, 41.837472], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalafi.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalafi.png">');
    gambelaT = L.marker([8.248250, 34.591613], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zgambela.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgambela.png">');
    garissaT = L.marker([-0.455128, 39.641166], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zgarissa.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgarissa.png">');
    hamdayetT = L.marker([15.455983, 36.413976], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zhamdayet.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zhamdayet.png">');
    hawliT = L.marker([11.876704, 41.736924], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zhawli.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zhawli.png">');
    jodahT = L.marker([12.526098, 33.020113], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zjodah.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zjodah.png">');
    jubaT = L.marker([4.851911, 31.598537], {icon: StarIcon}).bindPopup('<img height="50px" src="lib/zjuba.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zjuba.png">');
    mabanT = L.marker([10.053668, 33.040016], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zmaban.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmaban.png">');
    malabaT = L.marker([0.641313, 34.263055], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmalaba.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmalaba.png">');
    manderaT = L.marker([3.939194, 41.857806], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmandera.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmandera.png">');
    marsabitT = L.marker([2.339366, 37.991614], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmarsabit.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmarsabit.png">');
    metemaT = L.marker([12.958203, 36.152759], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmetema.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmetema.png">');
    mogadishuT = L.marker([2.037124, 45.337671], {icon: StarIcon}).bindPopup('<img height="50px" src="lib/zmogadishu.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmogadishu.png">');
    nadapalT = L.marker([4.405186, 34.283834], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/znadapal.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/znadapal.png">');
    nimuleT = L.marker([3.586098, 32.068238], {icon: circleIcon}).bindPopup('<img height="40px" src="lib/znimule.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/znimule.png">');
    obockT = L.marker([11.964294, 43.293760], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zobock.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zobock.png">');
    obock2T = L.marker([11.964997, 43.287527], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zobock2.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zobock2.png">');
    renkT = L.marker([11.835407, 32.797374], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zrenk.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zrenk.png">');
    semeraT = L.marker([11.794918, 41.006512], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zsemera.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zsemera.png">');
    turkanaT = L.marker([3.446768, 35.639530], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zturkana.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zturkana.png">');
    wajaleT = L.marker([9.602048, 43.335718], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zwajale.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zwajale.png">');
    whitenileT = L.marker([14.165762, 32.244053], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zwhitenile.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zwhitenile.png">');

var testing = L.layerGroup([adjumaniT, alisabiehT, bosassoT, busiaT, dhobleiT, diifT, diif2T, doraT, eleguT, galabatT, 
    galafiT, gambelaT, garissaT, hamdayetT, hawliT, jodahT, jubaT, mabanT, malabaT, manderaT, marsabitT, metemaT, mogadishuT, 
    nadapalT, nimuleT, obockT, obock2T, renkT, semeraT, turkanaT, wajaleT, whitenileT,]);

// More Markers for Ambulances

var adjumaniA = L.marker([3.375915, 31.790426], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zadjumani.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zadjumani.png">');
    alisabiehA = L.marker([11.154281, 42.704840], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zalisabieh.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zalisabieh.png">');
    busiaA = L.marker([0.468229, 34.090577], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zbusia.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbusia.png">');
    diifA = L.marker([0.994737, 40.959344], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdiif.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdiif.png">');
    diif2A = L.marker([0.994551, 40.964303], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdiif2.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdiif2.png">');
    doraA = L.marker([12.150212, 42.476356], {icon: circleIcon}).bindPopup(('<img height="50px" src="lib/zdora.png">'), {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdora.png">');
    eleguA = L.marker([3.563650, 32.071642], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zelegu.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zelegu.png">');
    galabatA = L.marker([12.960314, 36.149322], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalabat.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalabat.png">');
    galafiA = L.marker([11.717967, 41.837472], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalafi.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalafi.png">');
    gambelaA = L.marker([8.248250, 34.591613], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zgambela.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgambela.png">');
    hamdayetA = L.marker([15.455983, 36.413976], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zhamdayet.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zhamdayet.png">');
    hawliA = L.marker([11.876704, 41.736924], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zhawli.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zhawli.png">');
    jodahA = L.marker([12.526098, 33.020113], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zjodah.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zjodah.png">');
    malabaA = L.marker([0.641313, 34.263055], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmalaba.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmalaba.png">');
    manderaA = L.marker([3.939194, 41.857806], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmandera.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmandera.png">');
    metemaA = L.marker([12.958203, 36.152759], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmetema.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmetema.png">');
    moyaleA = L.marker([3.530475, 39.052264], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmoyale.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmoyale.png">');
    nadapalA = L.marker([4.405186, 34.283834], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/znadapal.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/znadapal.png">');
    nimuleA = L.marker([3.586098, 32.068238], {icon: circleIcon}).bindPopup('<img height="40px" src="lib/znimule.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/znimule.png">');
    renkA = L.marker([11.835407, 32.797374], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zrenk.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zrenk.png">');
    turkanaA = L.marker([3.446768, 35.639530], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zturkana.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zturkana.png">');
    wajaleA = L.marker([9.602048, 43.335718], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zwajale.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zwajale.png">');
    
var ambulances = L.layerGroup([adjumaniA, alisabiehA, busiaA, diifA, diif2A, doraA, eleguA, galabatA, 
    galafiA, gambelaA, hamdayetA, hawliA, jodahA, malabaA, manderaA, metemaA, moyaleA, nadapalA, nimuleA, 
    renkA, turkanaA, wajaleA,])

// More Markers for Trade

var busiaTR = L.marker([0.468229, 34.090577], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zbusia.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbusia.png">');
    djiboutiportTR = L.marker([11.608643, 43.142559], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdjiboutiport.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdjiboutiport.png">');
    eleguTR = L.marker([3.563650, 32.071642], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zelegu.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zelegu.png">');
    galabatTR = L.marker([12.960314, 36.149322], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalabat.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalabat.png">');
    galafiTR = L.marker([11.717967, 41.837472], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalafi.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalafi.png">');
    hawliTR = L.marker([11.876704, 41.736924], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zhawli.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zhawli.png">');
    malabaTR = L.marker([0.641313, 34.263055], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmalaba.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmalaba.png">');
    marsabitTR = L.marker([2.339366, 37.991614], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmarsabit.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmarsabit.png">');
    metemaTR = L.marker([12.958203, 36.152759], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmetema.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmetema.png">');
    moyaleTR = L.marker([3.530475, 39.052264], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmoyale.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmoyale.png">');
    nimuleTR = L.marker([3.586098, 32.068238], {icon: circleIcon}).bindPopup('<img height="40px" src="lib/znimule.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/znimule.png">');
    togwajaleTR = L.marker([9.500747, 43.182245], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/ztogwajale.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/ztogwajale.png">');
    wajaleTR = L.marker([9.602048, 43.335718], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zwajale.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zwajale.png">');
    
var trade = L.layerGroup([busiaTR, djiboutiportTR, eleguTR, galabatTR, galafiTR, hawliTR, malabaTR, 
    marsabitTR, metemaTR, moyaleTR, nimuleTR, togwajaleTR, wajaleTR, ]);

// More Markers for Facilities

var nimuleF = L.marker([3.586098, 32.068238], {icon: circleIcon}).bindPopup('<img height="40px" src="lib/znimule.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/znimule.png">');
    renkF = L.marker([11.835407, 32.797374], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zrenk.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zrenk.png">');

var facilities = L.layerGroup([nimuleF, renkF,]);

// Marker for All Activities

var allact = L.layerGroup([health, wash, gbv, rcce, PPE, testing, ambulances, trade, facilities, ]);


// Markers by PARTNERS

// More Markers for UNOPS

var adjumaniUNOPS = L.marker([3.375915, 31.790426], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zadjumani.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zadjumani.png">');
    alisabiehUNOPS = L.marker([11.154281, 42.704840], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zalisabieh.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zalisabieh.png">');
    baidoaUNOPS = L.marker([3.121935, 43.644664], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zbaidoa.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbaidoa.png">');
    belethawaUNOPS = L.marker([3.924454, 41.874911], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zbelethawa.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbelethawa.png">');
    bosassoUNOPS = L.marker([11.282172, 49.180776], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zbosasso.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbosasso.png">');
    busiaUNOPS = L.marker([0.468229, 34.090577], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zbusia.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbusia.png">');
    dhobleiUNOPS = L.marker([0.413374, 41.010596], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdhoblei.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdhoblei.png">');
    diifUNOPS = L.marker([0.994737, 40.959344], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdiif.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdiif.png">');
    diif2UNOPS = L.marker([0.994551, 40.964303], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdiif2.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdiif2.png">');
    doraUNOPS = L.marker([12.150212, 42.476356], {icon: circleIcon}).bindPopup(('<img height="50px" src="lib/zdora.png">'), {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdora.png">');
    eleguUNOPS = L.marker([3.563650, 32.071642], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zelegu.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zelegu.png">');
    galabatUNOPS = L.marker([12.960314, 36.149322], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalabat.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalabat.png">');
    galafiUNOPS = L.marker([11.717967, 41.837472], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalafi.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalafi.png">');
    gambelaUNOPS = L.marker([8.248250, 34.591613], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zgambela.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgambela.png">');
    garissaUNOPS = L.marker([-0.455128, 39.641166], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zgarissa.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgarissa.png">');
    hamdayetUNOPS = L.marker([15.455983, 36.413976], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zhamdayet.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zhamdayet.png">');
    hawliUNOPS = L.marker([11.876704, 41.736924], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zhawli.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zhawli.png">');
    jodahUNOPS = L.marker([12.526098, 33.020113], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zjodah.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zjodah.png">');
    jubaUNOPS = L.marker([4.851911, 31.598537], {icon: StarIcon}).bindPopup('<img height="50px" src="lib/zjuba.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zjuba.png">');
    mabanUNOPS = L.marker([10.053668, 33.040016], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zmaban.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmaban.png">');
    malabaUNOPS = L.marker([0.641313, 34.263055], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmalaba.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmalaba.png">');
    manderaUNOPS = L.marker([3.939194, 41.857806], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmandera.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmandera.png">');
    marsabitUNOPS = L.marker([2.339366, 37.991614], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmarsabit.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmarsabit.png">');
    metemaUNOPS = L.marker([12.958203, 36.152759], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmetema.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmetema.png">');
    mogadishuUNOPS = L.marker([2.037124, 45.337671], {icon: StarIcon}).bindPopup('<img height="50px" src="lib/zmogadishu.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmogadishu.png">');
    moyaleUNOPS = L.marker([3.530475, 39.052264], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmoyale.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmoyale.png">');
    nadapalUNOPS = L.marker([4.405186, 34.283834], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/znadapal.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/znadapal.png">');
    nimuleUNOPS = L.marker([3.586098, 32.068238], {icon: circleIcon}).bindPopup('<img height="40px" src="lib/znimule.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/znimule.png">');
    obock2UNOPS = L.marker([11.964997, 43.287527], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zobock2.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zobock2.png">');
    renkUNOPS = L.marker([11.835407, 32.797374], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zrenk.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zrenk.png">');
    semeraUNOPS = L.marker([11.794918, 41.006512], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zsemera.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zsemera.png">');
    togwajaleUNOPS = L.marker([9.500747, 43.182245], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/ztogwajale.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/ztogwajale.png">');
    turkanaUNOPS = L.marker([3.446768, 35.639530], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zturkana.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zturkana.png">');
    wajaleUNOPS = L.marker([9.602048, 43.335718], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zwajale.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zwajale.png">');
    whitenileUNOPS = L.marker([14.165762, 32.244053], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zwhitenile.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zwhitenile.png">');

var UNOPS = L.layerGroup([adjumaniUNOPS, alisabiehUNOPS, baidoaUNOPS, belethawaUNOPS, bosassoUNOPS, busiaUNOPS, dhobleiUNOPS, 
    diifUNOPS, diif2UNOPS, doraUNOPS, eleguUNOPS, galabatUNOPS, galafiUNOPS, gambelaUNOPS, garissaUNOPS, hamdayetUNOPS, 
    hawliUNOPS, jodahUNOPS, jubaUNOPS, mabanUNOPS, malabaUNOPS, manderaUNOPS, marsabitUNOPS, metemaUNOPS, mogadishuUNOPS, 
    moyaleUNOPS, nadapalUNOPS, nimuleUNOPS, obock2UNOPS, renkUNOPS, semeraUNOPS, togwajaleUNOPS, turkanaUNOPS, wajaleUNOPS, 
    whitenileUNOPS,])

// More Markers for UNICEF

var adjumaniUNICEF = L.marker([3.375915, 31.790426], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zadjumani.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zadjumani.png">');
    alisabiehUNICEF = L.marker([11.154281, 42.704840], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zalisabieh.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zalisabieh.png">');
    bosassoUNICEF = L.marker([11.282172, 49.180776], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zbosasso.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbosasso.png">');
    daadabUNICEF = L.marker([0.057190, 40.305615], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zdaadab.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdaadab.png">');
    diifUNICEF = L.marker([0.994737, 40.959344], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdiif.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdiif.png">');
    diif2UNICEF = L.marker([0.994551, 40.964303], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdiif2.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdiif2.png">');
    doraUNICEF = L.marker([12.150212, 42.476356], {icon: circleIcon}).bindPopup(('<img height="50px" src="lib/zdora.png">'), {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdora.png">');
    galabatUNICEF = L.marker([12.960314, 36.149322], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalabat.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalabat.png">');
    gambelaUNICEF = L.marker([8.248250, 34.591613], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zgambela.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgambela.png">');
    mabanUNICEF = L.marker([10.053668, 33.040016], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zmaban.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmaban.png">');
    obockUNICEF = L.marker([11.964294, 43.293760], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zobock.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zobock.png">');
    obock2UNICEF = L.marker([11.964997, 43.287527], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zobock2.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zobock2.png">');
    renkUNICEF = L.marker([11.835407, 32.797374], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zrenk.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zrenk.png">');
    semeraUNICEF = L.marker([11.794918, 41.006512], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zsemera.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zsemera.png">');
    
var UNICEF = L.layerGroup([adjumaniUNICEF, alisabiehUNICEF, bosassoUNICEF, daadabUNICEF, diifUNICEF, diif2UNICEF, doraUNICEF, galabatUNICEF, 
    gambelaUNICEF, mabanUNICEF, obockUNICEF, obock2UNICEF, renkUNICEF, semeraUNICEF, ])

// More Markers for IOM

var adjumaniIOM = L.marker([3.375915, 31.790426], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zadjumani.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zadjumani.png">');
    alisabiehIOM = L.marker([11.154281, 42.704840], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zalisabieh.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zalisabieh.png">');
    baidoaIOM = L.marker([3.121935, 43.644664], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zbaidoa.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbaidoa.png">');
    bosassoIOM = L.marker([11.282172, 49.180776], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zbosasso.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbosasso.png">');
    daadabIOM = L.marker([0.057190, 40.305615], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zdaadab.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdaadab.png">');
    dhobleiIOM = L.marker([0.413374, 41.010596], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdhoblei.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdhoblei.png">');
    diifIOM = L.marker([0.994737, 40.959344], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdiif.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdiif.png">');
    eleguIOM = L.marker([3.563650, 32.071642], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zelegu.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zelegu.png">');
    gadariefIOM = L.marker([14.044225, 35.388162], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zgadarief.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgadarief.png">');
    galabatIOM = L.marker([12.960314, 36.149322], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalabat.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalabat.png">');
    galafiIOM = L.marker([11.717967, 41.837472], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalafi.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalafi.png">');
    gambelaIOM = L.marker([8.248250, 34.591613], {icon: RCIcon}).bindPopup('<img height="50px" src="lib/zgambela.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgambela.png">');
    hawliIOM = L.marker([11.876704, 41.736924], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zhawli.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zhawli.png">');
    manderaIOM = L.marker([3.939194, 41.857806], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmandera.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmandera.png">');
    marsabitIOM = L.marker([2.339366, 37.991614], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmarsabit.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmarsabit.png">');
    metemaIOM = L.marker([12.958203, 36.152759], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmetema.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmetema.png">');
    moyaleIOM = L.marker([3.530475, 39.052264], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmoyale.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmoyale.png">');
    nimuleIOM = L.marker([3.586098, 32.068238], {icon: circleIcon}).bindPopup('<img height="40px" src="lib/znimule.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/znimule.png">');
    semeraIOM = L.marker([11.794918, 41.006512], {icon: MCIcon}).bindPopup('<img height="50px" src="lib/zsemera.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zsemera.png">');
    togwajaleIOM = L.marker([9.500747, 43.182245], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/ztogwajale.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/ztogwajale.png">');
    
var IOM = L.layerGroup([adjumaniIOM, alisabiehIOM, baidoaIOM, bosassoIOM, daadabIOM, dhobleiIOM, diifIOM, eleguIOM, gadariefIOM, 
    galabatIOM, galafiIOM, gambelaIOM, hawliIOM, manderaIOM, marsabitIOM, metemaIOM, moyaleIOM, nimuleIOM, semeraIOM, togwajaleIOM,]);

// More Markers for TMEA

var busiaTMEA = L.marker([0.468229, 34.090577], {icon: circleIcon}, {title: "busiaTMEA"}).bindPopup('<img height="50px" src="lib/zbusia.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zbusia.png">');
    djiboutiportTMEA = L.marker([11.608643, 43.142559], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zdjiboutiport.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zdjiboutiport.png">');
    eleguTMEA = L.marker([3.563650, 32.071642], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zelegu.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zelegu.png">');
    galabatTMEA = L.marker([12.960314, 36.149322], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalabat.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalabat.png">');
    galafiTMEA = L.marker([11.717967, 41.837472], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zgalafi.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zgalafi.png">');
    hawliTMEA = L.marker([11.876704, 41.736924], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zhawli.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zhawli.png">');
    malabaTMEA = L.marker([0.641313, 34.263055], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmalaba.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmalaba.png">');
    marsabitTMEA = L.marker([2.339366, 37.991614], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmarsabit.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmarsabit.png">');
    metemaTMEA = L.marker([12.958203, 36.152759], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmetema.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmetema.png">');
    moyaleTMEA = L.marker([3.530475, 39.052264], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zmoyale.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zmoyale.png">');
    nimuleTMEA = L.marker([3.586098, 32.068238], {icon: circleIcon}).bindPopup('<img height="40px" src="lib/znimule.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/znimule.png">');
    togwajaleTMEA = L.marker([9.500747, 43.182245], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/ztogwajale.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/ztogwajale.png">');
    wajaleTMEA = L.marker([9.602048, 43.335718], {icon: circleIcon}).bindPopup('<img height="50px" src="lib/zwajale.png">', {autoClose: false, closeOnClick: false}).bindTooltip('<img height="50px" src="lib/zwajale.png">');
    
var TMEA = L.layerGroup([busiaTMEA, djiboutiportTMEA, eleguTMEA, galabatTMEA, galafiTMEA, hawliTMEA, malabaTMEA, marsabitTMEA, 
    metemaTMEA, moyaleTMEA, nimuleTMEA, togwajaleTMEA, wajaleTMEA,]);



var allpart = L.layerGroup([UNOPS, UNICEF,IOM, TMEA, ])

var alll = L.layerGroup([polygon, gadarief, hamdayet, galabat, jodah, whitenile, metema, semera, 
    obock, obock2, djiboutiport, dora, galafi, alisabieh, hawli, moyale, togwajale, wajale, bosasso, renk, 
    gambela, maban, juba, belethawa, baidoa, mogadishu, busia, malaba, adjumani, nimule, nadapal, turkana, 
    marsabit, mandera, elegu, diif2, daadab, dhoblei, garissa, diif, 
    
    semeraR, renkR, obock2R, obockR, nimuleR, moyaleR, metemaR, marsabitR, manderaR, mabanR, hawliR, gambelaR, galafiR, 
    galabatR, gadariefR, eleguR, doraR, diifR, diif2R, dhobleiR, daadabR, bosassoR, baidoaR, alisabiehR, adjumaniR, 
    
    adjumaniG, alisabiehG, baidoaG, bosassoG, daadabG, dhobleiG, diif2G, diifG, doraG, eleguG, gadariefG, galabatG, 
    galafiG, gambelaG, hawliG, mabanG, manderaG, marsabitG, metemaG, moyaleG, nimuleG, obockG, obock2G, renkG, semeraG, 
    
    adjumaniw, alisabiehw, baidoaw, bosassow, daadabw, dhobleiw, diif2w, diifw, doraw, eleguw, gadariefw, galabatw, 
    galafiw, gambelaw, hawliw, mabanw, manderaw, marsabitw, metemaw, moyalew, nimulew, obockw, obock2w, renkw, semeraw, 
    
    adjumanih, alisabiehh, baidoah, bosassoh, daadabh, dhobleih, diif2h, diifh, dorah, eleguh, gadariefh, galabath, 
    galafih, gambelah, hawlih, mabanh, manderah, marsabith, metemah, moyaleh, nimuleh, obockh, obock2h, renkh, semerah, 
    
    adjumaniP, alisabiehP, belethawaP, bosassoP, busiaP, daadabP, dhobleiP, diifP, diif2P, djiboutiportP, doraP,
    eleguP, gadariefP, galabatP, galafiP, gambelaP, garissaP, hamdayetP, hawliP, jodahP, jubaP, mabanP, malabaP, manderaP, marsabitP, 
    metemaP, mogadishuP, moyaleP, nadapalP, nimuleP, obockP, obock2P, renkP, semeraP, togwajaleP, turkanaP, wajaleP, whitenileP,

    adjumaniT, alisabiehT, bosassoT, busiaT, dhobleiT, diifT, diif2T, doraT, eleguT, galabatT, 
    galafiT, gambelaT, garissaT, hamdayetT, hawliT, jodahT, jubaT, mabanT, malabaT, manderaT, marsabitT, metemaT, mogadishuT, 
    nadapalT, nimuleT, obockT, obock2T, renkT, semeraT, turkanaT, wajaleT, whitenileT,

    adjumaniA, alisabiehA, busiaA, diifA, diif2A, doraA, eleguA, galabatA, galafiA, gambelaA, hamdayetA, hawliA, jodahA, malabaA, 
    manderaA, metemaA, moyaleA, nadapalA, nimuleA, renkA, turkanaA, wajaleA, 

    busiaTR, djiboutiportTR, eleguTR, galabatTR, galafiTR, hawliTR, malabaTR, marsabitTR, metemaTR, moyaleTR, nimuleTR, togwajaleTR, wajaleTR, 

    nimuleF, renkF,

    adjumaniUNOPS, alisabiehUNOPS, baidoaUNOPS, belethawaUNOPS, bosassoUNOPS, busiaUNOPS, dhobleiUNOPS, diifUNOPS, diif2UNOPS, 
    doraUNOPS, eleguUNOPS, galabatUNOPS, galafiUNOPS, gambelaUNOPS, garissaUNOPS, hamdayetUNOPS, hawliUNOPS, jodahUNOPS, jubaUNOPS, 
    mabanUNOPS, malabaUNOPS, manderaUNOPS, marsabitUNOPS, metemaUNOPS, mogadishuUNOPS, moyaleUNOPS, nadapalUNOPS, nimuleUNOPS, 
    obock2UNOPS, renkUNOPS, semeraUNOPS, togwajaleUNOPS, turkanaUNOPS, wajaleUNOPS, whitenileUNOPS,

    adjumaniUNICEF, alisabiehUNICEF, bosassoUNICEF, daadabUNICEF, diifUNICEF, diif2UNICEF, doraUNICEF, galabatUNICEF, 
    gambelaUNICEF, mabanUNICEF, obockUNICEF, obock2UNICEF, renkUNICEF, semeraUNICEF,

    adjumaniIOM, alisabiehIOM, baidoaIOM, bosassoIOM, daadabIOM, dhobleiIOM, diifIOM, eleguIOM, gadariefIOM, 
    galabatIOM, galafiIOM, gambelaIOM, hawliIOM, manderaIOM, marsabitIOM, metemaIOM, moyaleIOM, nimuleIOM, semeraIOM, togwajaleIOM,

    busiaTMEA, djiboutiportTMEA, eleguTMEA, galabatTMEA, galafiTMEA, hawliTMEA, malabaTMEA, marsabitTMEA, metemaTMEA, moyaleTMEA, 
    nimuleTMEA, togwajaleTMEA, wajaleTMEA,

]).addTo(mymap);




// Adding Empty Circle (placeholder)

var emptycircle = L.circle(
    [0, 0], 0,
    {
        color: 'red',
        fillColor: 'red',
        opacity: 0,
        fillOpacity: 0,
    }
);

//var X = L.marker([], {icon: circleIcon}).bindPopup('This is X').addTo(mymap);



//Adding Polyygon

var polyygonData = L.geoJSON(polyygon, 
        {
        color: 'white',
        opacity: 0.5,
        fillColor: 'null',
        fillOpacity: 0.15,
        dashArray: '5, 3, 2',
    });

// Creating Layer Controls

var overlays = {
    "<b>All/Clear All":alll,
    "<img src='lib/cSU.png'/> Sudan": sudan,
    "<img src='lib/cSSU.png'/> South Sudan": southsudan,
    "<img src='lib/cUG.png'/> Uganda": uganda,
    "<img src='lib/cKE.png'/> Kenya": kenya,
    "<img src='lib/cSO.png'/> Somalia": somalia,
    "<img src='lib/cET.png'/> Ethiopia": ethiopia,
    "<img src='lib/cDJ.png'/> Djibouti": djibouti,
    "<b>Activities": allact,
    "<img src='lib/aHealth.png'/> <span style='color: black'>Health</span>": health,
    "<img src='lib/aWASH.png'/> <span style='color: black'>WASH</span>": wash,
    "<img src='lib/aGBV.png'/> <span style='color: black'>GBV</span>": gbv,
    "<img src='lib/aRCCE.png'/> <span style='color: black'>RCCE</span>": rcce,
    "<img src='lib/aPPE.png'/> <span style='color: black'>PPE</span>": PPE,
    "<img src='lib/aTesting.png'/> <span style='color: black'>Testing</span>": testing,
    "<img src='lib/aAmbulance.png'/> <span style='color: black'>Ambulances & Mobile Labs</span>": ambulances,
    "<img src='lib/aTrade.png'/> <span style='color: black'>Safe Trade Zones</span>": trade,
    "<img src='lib/aFacilities.png'/> <span style='color: black'>Facilities</span>": facilities,
    "<b>Partners": allpart,
    "<span style='color: black'>UNOPS</span>": UNOPS,
    "<span style='color: black'>UNICEF</span>": UNICEF,
    "<span style='color: black'>IOM</span>": IOM,
    "<span style='color: black'>Trade Mark East Africa</span>": TMEA,


    "<b>Polygon": polygon,
    "<b>Polyygon": polyygonData,
    
};
var baseLayers = {
    "Map 1": mymap,
    "Map 2": osm,
    "Google Streets": googlestreets,
    "Google Hybrid": googlehybrid,
}

//Adding LayerControls to Map
L.control.layers(baseLayers, overlays).addTo(mymap);

//var baseLayers = {
//    "Mapbox": mapbox,
//    "streets": streets
//};


  /* Popup Content Box //(in index.html div tag)

<div id="infobox">
    <div class="leaflet-control coordinate"></div>
</div>

*/


/*===============================================

// Adding Print Function

L.control.browserPrint().addTo(mymap)

===============================================*/


// Adding Measure

L.control.measure({
    primaryLengthUnit: 'kilometers', 
    secondaryLengthUnit: 'meters',
    primaryAreaUnit: 'sqmeters', 
    secondaryAreaUnit: undefined,
    position: 'topleft',
}).addTo(mymap);

/*

// Adding Search

var searchLayer = L.layerGroup().addTo(mymap);
//... adding data in searchLayer ...
mymap.addControl( new L.Control.Search({position: 'topright'}, {layer: searchLayer}) );
//searchLayer is a L.LayerGroup contains searched markers

var searchLayer = L.geoJson().addTo(map);
//... adding data in searchLayer ...
L.map('map', { searchControl: {layer: searchLayer} });

*/


// Adding Legend

var legend = L.control({position: 'bottomleft',});

legend.onAdd = function (mymap) {

    var div = L.DomUtil.create('div', 'info legend'),
        labels = ["https://via.placeholder.com/728x90.png?text=IGAD+Legend+Placeholder"];
 {
        div.innerHTML +=
            " <img src="+ labels +" height='60' width='350'>";
    }

    return div;
};

legend.addTo(mymap);


// Adding Scale to Map

L.control.scale({
    metric: true,
    imperial: false,
    position: 'bottomleft',

}).addTo(mymap);


// GenerateList Functions (LEFT COLUMN)

function generateList() {
    var ul = document.querySelector('.list');
    projectSites.forEach((site) => {
        var li = document.createElement('li');
        var div = document.createElement('div');
        var a = document.createElement('a');
        var p = document.createElement('p'); 
        var pic = document.createElement('pic');
        a.addEventListener('click', () => {
            flyToSite(site);
        })

        div.classList.add('project-item');        

        a.innerText = site.properties.name;
        a.href = '#'
        p.innerHTML = site.properties.address;
        pic.innerHTML = ' <img height="15px" src="lib/icon_circle.png"> ';

        div.appendChild(a);
    //  div.appendChild(pic);
        div.appendChild(p);
        
        li.appendChild(div);
        ul.appendChild(li);
    })
}

generateList();

// Doing BindPopups

function makePopupContent(site){
    return `
    <div>
        <img height ="50px" src="${site.properties.boxcontent}">
    </div>
    `;
}

function onEachFeature(feature, layer) {
    layer.bindPopup(makePopupContent(feature), {autoClose: false, closeOnClick: false});
}


// Putting in Sites

var sitesLayer = L.geoJSON(projectSites, {
    onEachFeature: onEachFeature, 
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, {icon: null});
    }
});

sitesLayer.addTo(mymap);


// Adding Flying Animation

function flyToSite (site) {

    var latt = site.geometry.coordinates[1];
    var lngg = site.geometry.coordinates[0];
    mymap.flyTo([latt, lngg], 8,{
        
duration: 4

    });

    setTimeout(() => {

        L.popup({autoClose: true, closeOnClick: false,})
        .setLatLng([latt, lngg])
        .setContent(makePopupContent(site))
        .openOn(mymap);

    }, 3000);

}
