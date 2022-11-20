import './index.css';
import Location from './components/Location';
import HexMap from './components/HexMap';
import { Container, Form, Button } from 'reactstrap';
import { useRef } from 'react';

export default function App() {
  const startRef = useRef();
  const destinationRef = useRef();

  const getCoordinates = async(address) => {
    try {
        const response = await fetch('location/search?q=' + encodeURIComponent(address), {
            method: 'GET',
        });
        
        if(response.status !== 200){
            throw response.status
        }
        
        const resultList = await response.json();
        console.log(resultList[0]) //Assuming top one is the one i want for now
    } catch (err){
        console.error(err);
    }
  }

  const getLocations = () => {
    const start = getCoordinates(startRef.current.getLocation());
    const destination = getCoordinates(destinationRef.current.getLocation());
    console.log(start + '\n' + destination);
  }

  return (
    <div>
      <Container className="route-pane">
        <Form className="route-form">
          <Location placeholder="Choose starting point" ref={startRef}/>
          <Location placeholder="Choose destination" ref={destinationRef}/>
          <Button className="route-button" onClick={getLocations}>Find Route</Button>
        </Form>
      </Container>
      <HexMap></HexMap>
    </div>
  );
}