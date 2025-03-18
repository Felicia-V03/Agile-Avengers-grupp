

let map;

export function loadGoogleMaps() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDCiC8wDnyi8-cFCNrm6FCSsjmoUkRFOT8`;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);
}

function initMap() {
    const mapOptions = {
        center: { lat: 59.4024, lng: 13.5116 },
        zoom: 10,
    };

    const mapContainer = document.querySelector('.map');
    map = new google.maps.Map(mapContainer, mapOptions);

    setupAddressLinks(); 
    addPins();
}

function setupAddressLinks() {
    const locations = [
        { lat: 59.40535, lng: 13.57969 }, 
        { lat: 59.38127, lng: 13.50468 }, 
        { lat: 59.34459, lng: 13.50450 }, 
        { lat: 59.32294, lng: 13.46565 }, 
        { lat: 59.41304, lng: 13.67427 }, 
    ];

    document.querySelectorAll('.adress-list a').forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const location = locations[index];
            if (location) {
                moveToLocation(location.lat, location.lng);
            }
        });
    });
}

function addPins() {
    const locations = [
        { lat: 59.40535, lng: 13.57969, title: 'Sommargatan 112, Karlstad' },
        { lat: 59.38127, lng: 13.50468, title: 'Östra Torggatan 14, Karlstad' },
        { lat: 59.34459, lng: 13.50450, title: 'Bivägen 7, Hammarö' },
        { lat: 59.32294, lng: 13.46565, title: 'Lillängsvägen 14, Skoghall' },
        { lat: 59.41304, lng: 13.67427, title: 'Skattkärrsvägen 41, Skattkärr' },
    ];

    locations.forEach(location => {
        new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title,
        });
    });
}

function moveToLocation(lat, lng) {
    if (map) {
        map.setCenter({ lat, lng });
        map.setZoom(15);
    }
}

window.initMap = initMap;


