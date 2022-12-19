let factoryMap = L.map('factoryMap').setView([49.05178266618781, 7.038463567225673], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoid2ltMjEyIiwiYSI6ImNreDBtZHNzYjAzajQyenJ6aGVzYjNvbTEifQ.laNH1SlutejM4RvRLVoWVQ'
}).addTo(factoryMap);

let bounds = [[49.05178266618781, 7.038463567225673], [49.05178266618781, 7.038463567225673]];

L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(factoryMap);
//marker voor op de map
let factoryMarker = L.marker([49.05178266618781, 7.038463567225673]).addTo(factoryMap);
factoryMarker.bindPopup("<b> INEOS Automotive S.A.S </b><br>Europôle de Sarreguemines, Rue Hubert Roth, 57910 Hambach").openPopup();