import * as turf from '@turf/turf'

/**
 * GeoJSON
 *
 * {
 *   "type": "FeatureCollection",
 *   "features": [
 *     {
 *       "type": "Feature",
 *       "properties": {},
 *       "geometry": {
 *         "coordinates": [
 *           [
 *             -67.53567303389862,
 *             -45.888198287152505
 *           ],
 *           [
 *             -67.51248147296002,
 *             -45.86878400046517
 *           ]
 *         ],
 *         "type": "LineString"
 *       }
 *     },
 *     {
 *       "type": "Feature",
 *       "properties": {},
 *       "geometry": {
 *         "coordinates": [
 *           -67.52855905815098,
 *           -45.86373121166652
 *         ],
 *         "type": "Point"
 *       }
 *     },
 *     {
 *       "type": "Feature",
 *       "properties": {},
 *       "geometry": {
 *         "coordinates": [
 *   -67.51548407390108,
 *   -45.87129755941153
 * ],
 *         "type": "Point"
 *       }
 *     }
 *   ]
 * }
 */
const line = turf.lineString([
    [
        -67.53567303389862,
        -45.888198287152505
    ],
    [
        -67.51248147296002,
        -45.86878400046517
    ]
]);
const pointCoords = [
    -67.52855905815098,
    -45.86373121166652
];
const pt = turf.point(pointCoords);

console.log(
    turf.nearestPointOnLine(line, pt)
);
console.log(
    turf.pointToLineDistance(pt, line)
);