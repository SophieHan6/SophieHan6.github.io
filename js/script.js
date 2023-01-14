
// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = 'pk.eyJ1IjoiamlhcWlzaGkxODciLCJhIjoiY2thdnI5cjRrMGh1bjJ6a3kwY2l2YWM0aiJ9.BOGjg2QBv1lFFcg4e6RYKA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',//底图自定义
    center: [116.23, 39.54],
    zoom: 3
});


// Beijing
var origin = [116.23, 39.54];

// Guangzhou
var destination = [113.17, 32.8];

// A simple line from origin to destination.
var route = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'LineString',
                'coordinates': [origin, destination]
            }
        }
    ]
};


// A single point that animates along the route.
// Coordinates are initially set to origin.
var point = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'Point',
                'coordinates': origin
            }
        }
    ]
};

// Calculate the distance in kilometers between route start/end point.
var lineDistance = turf.lineDistance(route.features[0], 'kilometers');

var arc = [];

// Number of steps to use in the arc and animation, more steps means
// a smoother arc and animation, but too many steps will result in a
// low frame rate
var steps = 500;

// Draw an arc between the `origin` & `destination` of the two points
for (var i = 0; i < lineDistance; i += lineDistance / steps) {
    var segment = turf.along(route.features[0], i, 'kilometers');
    arc.push(segment.geometry.coordinates);
}

// Update the route with calculated arc coordinates
route.features[0].geometry.coordinates = arc;

// Used to increment the value of the point measurement against the route.
var counter = 0;

map.on('load', function() {
    // Add a source and layer displaying a point which will be animated in a circle.
    map.addSource('route', {
        'type': 'geojson',
        'data': route
    });

    map.addSource('point', {
        'type': 'geojson',
        'data': point
    });

    map.addLayer({
        'id': 'route',
        'source': 'route',
        'type': 'line',
        'paint': {
            'line-width':6,
            'line-blur': 3,
            'line-opacity': 0.4,

            'line-color': '#007cbf'
        }
    });

    map.addLayer({
        'id': 'route2',
        'source': 'route',
        'type': 'line',
        'paint': {
            'line-width':3,
            'line-blur': 3,
            'line-opacity': 0.4,

            'line-color': '#009df2'
        }
    });

    map.addLayer({
        'id': 'route3',
        'source': 'route',
        'type': 'line',
        'paint': {
            'line-width':0.2,
            'line-blur': 1,
            'line-opacity': 1,

            'line-color': '#fafdff'
        }
    });


    map.addLayer({
        'id': 'point',
        'source': 'point',
        'type': 'symbol',
        'layout': {
            'icon-image': 'airport-15',
            'icon-rotate': ['get', 'bearing'],
            'icon-rotation-alignment': 'map',
            'icon-allow-overlap': true,
            'icon-ignore-placement': true
        }
    });

    function animate() {
        // Update point geometry to a new position based on counter denoting
        // the index to access the arc.
        point.features[0].geometry.coordinates =
            route.features[0].geometry.coordinates[counter];

        // Calculate the bearing to ensure the icon is rotated to match the route arc
        // The bearing is calculate between the current point and the next point, except
        // at the end of the arc use the previous point and the current point
        point.features[0].properties.bearing = turf.bearing(
            turf.point(
                route.features[0].geometry.coordinates[
                    counter >= steps ? counter - 1 : counter
                    ]
            ),
            turf.point(
                route.features[0].geometry.coordinates[
                    counter >= steps ? counter : counter + 1
                    ]
            )
        );

        // Update the source with this new data.
        map.getSource('point').setData(point);

        // Request the next frame of animation so long the end has not been reached.
        if (counter < steps) {
            requestAnimationFrame(animate);
        }

        counter = counter + 1;
    }

    document.getElementById('replay').addEventListener('click', function() {
        // Set the coordinates of the original point back to origin
        point.features[0].geometry.coordinates = origin;

        // Update the source layer
        map.getSource('point').setData(point);

        // Reset the counter
        counter = 0;

        // Restart the animation.
        animate(counter);
    });

    // Start the animation.
    animate(counter);
});
window.onresize = function(){
    map.resize();
    //myChart1.resize();若有多个图表变动，可多写
}