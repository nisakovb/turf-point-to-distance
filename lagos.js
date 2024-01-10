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
 *             2.617757599183477,
 *             5.7154236356992385
 *           ],
 *           [
 *             4.18954045012768,
 *             6.5237089533979855
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
 *           2.9278982087607233,
 *           5.3405959635942395
 *         ],
 *         "type": "Point"
 *       }
 *     },
 *     {
 *       "type": "Feature",
 *       "properties": {},
 *       "geometry": {
 *         "coordinates": [
 *   2.717486419708366,
 *   5.766708927006023
 * ],
 *         "type": "Point"
 *       }
 *     }
 *   ]
 * }
 */
const line = turf.lineString([
    [
        2.617757599183477,
        5.7154236356992385
    ],
    [
        4.18954045012768,
        6.5237089533979855
    ]
]);
const pointCoords = [
    2.7745286040447183,
    5.661579789191563
];
const pt = turf.point(pointCoords);

console.log(
    turf.nearestPointOnLine(line, pt)
);
console.log(
    turf.pointToLineDistance(pt, line)
);