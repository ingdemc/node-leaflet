const map = L.map('div-template').setView([51.505, -0.09], 13);
const socket = io();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
map.locate({ enableHighAccuracy: true });
map.on('locationfound', e => {
    const coords = [e.latlng.lat, e.latlng.lng]
    L.marker(coords).addTo(map)
        .bindPopup('You are here')
        .openPopup();

    socket.emit('userCoordinates', e.latlng);
});
socket.on('newUserCoordinate', (coords) => {

    L.marker([coords.lat, coords.lng]).addTo(map)
        .bindPopup('Hello there<br>')
        .openPopup();


});

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('Hello there<br> Easily customizable.')
    .openPopup();