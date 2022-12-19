let hospitalMap = L.map('hospitalMap').setView([52.52687954966974, 13.3766245], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoid2ltMjEyIiwiYSI6ImNreDBtZHNzYjAzajQyenJ6aGVzYjNvbTEifQ.laNH1SlutejM4RvRLVoWVQ'
}).addTo(hospitalMap);

let bounds = [[52.52687954966974, 13.3766245], [52.52687954966974, 13.3766245]];

L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(hospitalMap);
//marker voor op de map
let hospitalMarker = L.marker([52.52687954966974, 13.3766245]).addTo(hospitalMap);
hospitalMarker.bindPopup("<b>Charité</b><br>Charitépl. 1").openPopup();