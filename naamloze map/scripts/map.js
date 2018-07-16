
// on page load show map
document.onload = function() {
  initMap();
};

// init map
var myMap;

function initMap() {
  var myStyles =[
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#FFFFFF"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#303030"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#FFFFFF"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#808080"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#FFFFFF"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#303030"
            }
        ]
    }
]

  // set options for map 
  var mapOptions = {
    center: {
      lat: 52.206042, 
      lng: 4.417249,
    },
    zoom: 17,
    clickableIcons: false,
    styles: myStyles 
  };

  // create map and add to page
  myMap = new google.maps.Map(document.getElementById('map'), mapOptions);

  // create a marker for my house
  var myMarker = new google.maps.Marker({
    position: {
      lat: 52.206042, 
      lng: 4.417249,
    },
    map: myMap,
    title: 'Im right here'
  });
  
}
