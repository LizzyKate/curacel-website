const btnDistribution = document.querySelector('.distribution')
const btnClaim = document.querySelector('.claim')
const btnFraud = document.querySelector('.fraud')
const showDistribution = document.querySelector('#distribution')
const showClaim = document.querySelector('#claim')
const showFraud = document.querySelector('#fraud')
btnDistribution.style.background = '#7854F7'
btnDistribution.style.color = 'white'
showClaim.style.display = 'none'
showFraud.style.display = 'none'
btnDistribution.style.fontFamily = 'product-sans-bold'

btnDistribution.addEventListener('click', () => {
    showDistribution.style.display = 'flex'
    showClaim.style.display = 'none'
    showFraud.style.display = 'none'
    btnDistribution.style.background = '#7854F7'
    btnDistribution.style.color = 'white'
    btnDistribution.style.fontFamily = 'product-sans-bold'
    btnClaim.style.background = 'white'
    btnClaim.style.color = '#666666'
    btnClaim.style.fontFamily = 'product-sans-light'
    btnFraud.style.fontFamily = 'product-sans-light'
    btnFraud.style.background = 'white'
    btnFraud.style.color = '#666666'
})
btnClaim.addEventListener('click', () => {
    showDistribution.style.display = 'none'
    showClaim.style.display = 'flex'
    showFraud.style.display = 'none'
    btnClaim.style.background = '#7854F7'
    btnClaim.style.color = 'white'
    btnClaim.style.fontFamily = 'product-sans-bold'
    btnDistribution.style.background = 'white'
    btnDistribution.style.color = '#666666'
    btnFraud.style.background = 'white'
    btnFraud.style.color = '#666666'
    btnDistribution.style.fontFamily = 'product-sans-light'
    btnFraud.style.fontFamily = 'product-sans-light'
})
btnFraud.addEventListener('click', () => {
    showDistribution.style.display = 'none'
    showClaim.style.display = 'none'
    showFraud.style.display = 'flex'
    btnFraud.style.background = '#7854F7'
    btnFraud.style.color = 'white'
    btnFraud.style.fontFamily = 'product-sans-bold'
    btnDistribution.style.background = 'white'
    btnDistribution.style.color = '#666666'
    btnClaim.style.background = 'white'
    btnClaim.style.color = '#666666'
    btnClaim.style.fontFamily = 'product-sans-light'
    btnDistribution.style.fontFamily = 'product-sans-light'
})

const link = document.querySelector('.list')
const sign = document.querySelector('.sign')
let clicked = false
link.style.display = 'none'
sign.addEventListener('click', () => {
    clicked = !clicked
    if (clicked === true) {
        link.style.display = 'grid'
    } else {
        link.style.display = 'none'
    }
})



am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Orthographic();
// chart.panBehavior = "rotateLongLat";
// chart.deltaLatitude = -20;
chart.padding(20, 20, 20, 20);
chart.seriesContainer.draggable = false;
chart.seriesContainer.resizable = false;
chart.maxZoomLevel = 1;
// var map = AmCharts.makeChart("maps", { "preventDragOut": true });

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;
//polygonSeries.include = ["BR", "UA", "MX", "CI"];

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
// polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#000033");
polygonTemplate.stroke = am4core.color("#000033");
polygonTemplate.strokeWidth = 0.5;
polygonTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
// polygonTemplate.url = "https://www.datadrum.com/main.php?package={id}";
// polygonTemplate.urlTarget = "_blank";

var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
graticuleSeries.mapLines.template.line.stroke = am4core.color("#000033");
graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;
graticuleSeries.fitExtent = false;


chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.1;
chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#000033");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);

let animation;
setTimeout(function () {
    animation = chart.animate({ property: "deltaLongitude", to: 100000 }, 20000000);
}, 3000)

chart.seriesContainer.events.on("down", function () {
    //  animation.stop();
})