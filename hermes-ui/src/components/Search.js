import './component.css';
import React, { useEffect, useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

function getCoordinates(){
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

function Search() {
    const [location, setLocation] = useState({latitude: null, longitude: null});

    useEffect(() => {
        async function getLocation(){
            try {
                let position = await getCoordinates();
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                setLocation({latitude, longitude});
            } catch (err){
                console.error(err);
            }
        }

        if(location.latitude === null || location.longitude == null){
            getLocation()
        }

    }, [location]);
    
    getCoordinates()

    console.log(location)
    return(
        <div>
            <Form className="search-form">
                <FormGroup className="location">
                    <Label for="location-input">Location</Label>
                    <Input className="location-input" id="location-input" placeholder="Your Location" type="search"/>
                </FormGroup>
                <FormGroup className="destination ">
                    <Label for="destination-input">Destination</Label>
                    <Input className="location-input" id="destination-input" placeholder="Destination" type="search"/>
                </FormGroup>
                <Button className="search-button" onClick={() => console.log("balls")}>Submit</Button>
            </Form>

            <p className="message">Your location is {location.latitude}, {location.longitude}</p>
        </div>
    );
}

export default Search