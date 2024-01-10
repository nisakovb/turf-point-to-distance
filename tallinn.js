import * as turf from '@turf/turf'

/**
 * GeoJson
 *
 * {
 *   "type": "FeatureCollection",
 *   "features": [
 *     {
 *       "type": "Feature",
 *       "properties": {},
 *       "geometry": {
 *         "coordinates": [
 *           24.73909,
 *           59.44701
 *         ],
 *         "type": "Point"
 *       }
 *     },
 *     {
 *       "type": "Feature",
 *       "properties": {},
 *       "geometry": {
 *         "coordinates": [
 *           [
 *             24.73769,
 *             59.44502
 *           ],
 *           [
 *             24.74181,
 *             59.44829
 *           ]
 *         ],
 *         "type": "LineString"
 *       }
 *     },
 *     {
 *       "type": "Feature",
 *       "properties": {
 *         "label": "my algo suggested"
 *       },
 *       "geometry": {
 *         "coordinates": [
 *           24.739517942589266,
 *           59.446470818511386
 *         ],
 *         "type": "Point"
 *       },
 *       "id": 2
 *     },
 *     {
 *       "type": "Feature",
 *       "properties": {
 *         "label": "nearestPointOnLine output"
 *       },
 *       "geometry": {
 *         "coordinates": [
 *           24.73987512763647,
 *           59.446754312468755
 *         ],
 *         "type": "Point"
 *       },
 *       "id": 3
 *     }
 *   ]
 * }
 */
const line = turf.lineString([
    [
        24.73769,
        59.44502
    ],
    [
        24.74181,
        59.44829
    ]
]);
const pointCoords = [
    24.73909,
    59.44701
];
const pt = turf.point(pointCoords);

console.log(
    turf.nearestPointOnLine(line, pt)
);
console.log(
    turf.pointToLineDistance(pt, line)
);