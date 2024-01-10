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
 *             -94.84700344879657,
 *             74.6953782968809
 *           ],
 *           [
 *             -94.81873529728479,
 *             74.70099181262577
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
 *           -94.82524256978643,
 *           74.70102873699497
 *         ],
 *         "type": "Point"
 *       }
 *     },
 *     {
 *       "type": "Feature",
 *       "properties": {},
 *       "geometry": {
 *         "coordinates": [
 *   -94.82282797382683,
 *   74.70017908512224
 * ],
 *         "type": "Point"
 *       }
 *     }
 *   ]
 * }
 */
const line = turf.lineString([
    [
        -94.84700344879657,
        74.6953782968809
    ],
    [
        -94.81873529728479,
        74.70099181262577
    ]
]);
const pointCoords = [
    -94.82524256978643,
    74.70102873699497
];
const pt = turf.point(pointCoords);

console.log(
    turf.nearestPointOnLine(line, pt)
);
console.log(
    turf.pointToLineDistance(pt, line)
);