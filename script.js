// Initialize the map
var map = L.map('map').setView([20, 0], 2); // Set the initial view to the world map

var markersById = {};

// Add the base map layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);

// Define markers for the countries
var markers = [
    { id: 'brazil', name: 'Brazil', coords: [-14.235, -51.925], img: './imgs/1.png' },
    { id: 'argentina', name: 'Argentina', coords: [-38.416, -63.616], img: './imgs/1.png'  },
    { id: 'usa', name: 'United States', coords: [37.090, -95.712], img: './imgs/1.png'  },
    { id: 'england', name: 'England', coords: [52.355, -1.174], img: './imgs/1.png'  },
    { id: 'china', name: 'China', coords: [35.861, 104.195], img: './imgs/1.png'  },
    { id: 'japan', name: 'Japan', coords: [36.204, 138.252], img: './imgs/1.png'  }
];

// Add markers to the map
markers.forEach(marker => {
    var newMarker = L.marker(marker.coords).addTo(map);
    newMarker._leaflet_id = marker.id;
    markersById[marker.id] = newMarker;

    /*newMarker.on("click", function(){
        console.log("marker", marker.name)
        let div = document.createElement("div");
        document.body.appendChild(div);
    })*/

    var popupContent = document.createElement('div');
    popupContent.className = 'marker-popup-content';

    var image = document.createElement('img');
    image.src = marker.img;
    image.className = 'marker-popup-image';
    popupContent.appendChild(image);

    newMarker.bindPopup(popupContent);
});
