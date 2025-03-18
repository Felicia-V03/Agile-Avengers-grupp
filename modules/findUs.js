

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
        zoom: 12,
    };

    const mapContainer = document.querySelector('.map');
    map = new google.maps.Map(mapContainer, mapOptions);

    setupAddressLinks(); 
}

function setupAddressLinks() {
    const locations = [
        { lat: 59.3795, lng: 13.5005 }, 
        { lat: 59.3799, lng: 13.5114 }, 
        { lat: 59.3283, lng: 13.4823 }, 
        { lat: 59.3289, lng: 13.4681 }, 
        { lat: 59.4142, lng: 13.6581 }, 
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

function moveToLocation(lat, lng) {
    if (map) {
        map.setCenter({ lat, lng });
        map.setZoom(15);
    }
}

window.initMap = initMap;


