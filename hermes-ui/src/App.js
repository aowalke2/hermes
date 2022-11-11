import './index.css';
import Search from './components/Search';
import HexMap from './components/HexMap';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'
import geojson2h3 from 'geojson2h3';

mapboxgl.accessToken = 'pk.eyJ1IjoiYW93YWxrZTIiLCJhIjoiY2xhYWJudXBxMDF5bTN3bzI5M3Bld2Z6OCJ9.g1JbFN_tHL2EZBHU0_oghQ'

function App() {
  // const geo = geojson2h3.h3SetToFeatureCollection(
  //   Object.keys(hexagons),
  //   hex => ({value: hexagons[hex]})
  // );

  // console.log(geo)
  // console.log(map)

  return (
    <HexMap></HexMap>
  );
}

export default App;
