import './component.css';
import React, { useEffect, useState} from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

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

    return(
        <div className="search">
            <Form className="search-form">
                <FormGroup className="location">
                    <Input className="location-input" placeholder="Choose starting point" type="search"/>
                </FormGroup>
                <FormGroup className="destination ">
                    <Input className="location-input" placeholder="Choose destination" type="search"/>
                </FormGroup>
                <Button className="search-button" onClick={() => console.log("balls")}>Find Route</Button>
            </Form>
        </div>
    );
}

export default Search