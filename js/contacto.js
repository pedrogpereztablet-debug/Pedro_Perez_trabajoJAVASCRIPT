
let options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
};

if (navigator.geolocation){ 
    navigator.geolocation.getCurrentPosition(
        success,
        error,
        options
    );

} else {

    alert("Tu navegador no soporta la geolocalización.");

}


function success(position){
    
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let map = L.map("map", {
        center:[latitude, longitude],
        zoom:15
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{ 
         attribution: 'Ubicacion de oficinas wilton'}).addTo(map);

    let control = L.Routing.control({
        waypoints:[
            L.latLng(latitude, longitude),
            L.latLng(51.880447, -8.507580)
        ],
        language: "es",

    }).addTo(map)

};

function error() {
    alert("No se pudo obtener tu ubicación.");
}

