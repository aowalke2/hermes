import './index.css';
import Search from './components/Search';
import HexMap from './components/HexMap';
import { Container } from 'reactstrap';

function App() {
  // const geo = geojson2h3.h3SetToFeatureCollection(
  //   Object.keys(hexagons),
  //   hex => ({value: hexagons[hex]})
  // );

  // console.log(geo)
  // console.log(map)

  return (
    <Container>
      <Search></Search>
      <HexMap></HexMap>
    </Container>
  );
}

export default App;
