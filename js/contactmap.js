let contactMap = L.map('contactMap').setView([51.23009, 4.41616], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoid2ltMjEyIiwiYSI6ImNreDBtZHNzYjAzajQyenJ6aGVzYjNvbTEifQ.laNH1SlutejM4RvRLVoWVQ'
}).addTo(contactMap);

let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];

L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(contactMap);
//marker voor op de map
let contactMarker = L.marker([51.23009, 4.41616]).addTo(contactMap);
contactMarker.bindPopup("<b>Wcity</b><br>Ellermanstraat 33").openPopup();