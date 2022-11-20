import React from 'react';
import DeckGL from '@deck.gl/react';
import { H3HexagonLayer } from '@deck.gl/geo-layers';
import { Map } from 'react-map-gl';

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_API_KEY;

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 12,
  pitch: 0,
  bearing: 0
};

// Data to be used by the LineLayer
const hexagons =  [
  {hex: '88283082a3fffff', value: 0.4161847014806268},
  {hex: '88283082a1fffff', value: 0.6778500525390798},
  {hex: '88283082a7fffff', value: 0.010745021421458167},
  {hex: '88283080c9fffff', value: 0.38374171288712255},
  {hex: '88283082b5fffff', value: 0.42002094326474815},
  {hex: '88283082bdfffff', value: 0.5570115480273916},
  {hex: '88283082abfffff', value: 0.3566543750129141},
  {hex: '88283082a9fffff', value: 0.23662780657142934},
  {hex: '88283082adfffff', value: 0.9543801041079576},
  {hex: '88283082a5fffff', value: 0.11042712094323548},
  {hex: '882830801bfffff', value: 0.42034810946854506},
  {hex: '88283080cdfffff', value: 0.018437439298336633},
  {hex: '88283080c1fffff', value: 0.38443756722159894},
  {hex: '88283080cbfffff', value: 0.9856099609788538},
  {hex: '88283082b7fffff', value: 0.6891247249738677},
  {hex: '88283082b1fffff', value: 0.17847041857487222},
  {hex: '88283082b9fffff', value: 0.7024920201157281},
  {hex: '8828308287fffff', value: 0.8308337083280084},
  {hex: '8828308285fffff', value: 0.9436025130141585},
  {hex: '88283082e3fffff', value: 0.5216358456374646},
  {hex: '88283082e7fffff', value: 0.2623194712821695},
  {hex: '882830805bfffff', value: 0.22232937732090052},
  {hex: '8828308053fffff', value: 0.8841567754678386},
  {hex: '8828308019fffff', value: 0.2221740346040122},
  {hex: '8828308011fffff', value: 0.4455356191439175},
  {hex: '8828308013fffff', value: 0.794837892791527},
  {hex: '88283080c5fffff', value: 0.4701945489106787},
  {hex: '88283080c7fffff', value: 0.9797580586562276},
  {hex: '88283080c3fffff', value: 0.02317089186000043},
  {hex: '88283080ddfffff', value: 0.5056937328967093},
  {hex: '88283080d9fffff', value: 0.21656152043478705},
  {hex: '88283082b3fffff', value: 0.2690674005506639},
  {hex: '88283082bbfffff', value: 0.9498949650394646},
  {hex: '8828308295fffff', value: 0.4810296059173611},
  {hex: '8828308283fffff', value: 0.9341104510986631},
  {hex: '8828308281fffff', value: 0.2749470260018454},
  {hex: '882830828dfffff', value: 0.5450589818858134}
]

// DeckGL react component
function HexMap() {
  const layers = new H3HexagonLayer({
    id: 'h3-hexagon-layer',
    data: hexagons,
    pickable: true,
    wireframe: true,
    filled: true,
    extruded: true,
    elevationScale: 0,
    autoHighlight: true,
    getHexagon: d => d.hex,
    getFillColor: d => [(1 - d.value ) * 255, (1 - d.value ) *255, 255, 150],
    getLineColor: d => [(1 - d.value ) * 255, (1 - d.value )* 255, 255],
  });

  return (
    <DeckGL 
      initialViewState={INITIAL_VIEW_STATE} 
      controller={true}
      layers={layers}>
      <Map mapboxAccessToken={MAPBOX_ACCESS_TOKEN} 
          mapStyle="mapbox://styles/mapbox/streets-v11"
      />
    </DeckGL>
  );
}

export default HexMap