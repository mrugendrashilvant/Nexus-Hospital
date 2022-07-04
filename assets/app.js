// Map code
function initMap() {
    // The location of Uluru
    const Nexus = { lat: 18.775439, lng: 72.7958277 };
    // The map, centered at Nexus
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: Nexus,
    });
    // The marker, positioned at Nexus
    const marker = new google.maps.Marker({
        position: Nexus,
        map: map,
    });
}

// window.initMap = initMap;