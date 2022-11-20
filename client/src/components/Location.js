import './component.css';
import React, { forwardRef, useImperativeHandle, useState} from 'react';
import { InputGroup, Input } from 'reactstrap';
import { Search } from 'react-bootstrap-icons'

const Location = forwardRef((props, _ref) => {
    const [location, setLocation] = useState('');
    
    const handleEnterKeyPress = e => {
        if(e.keyCode === 13) setLocation(e.target.value);
    }

    useImperativeHandle(_ref, () => ({
        getLocation: () => {
            return location;
        }
    }));

    return(
        <InputGroup className="location">
            <Input 
                className="location-input" 
                placeholder={props.placeholder} 
                type="search" 
                onKeyDown={handleEnterKeyPress}
                onChange={e =>setLocation(e.target.value)}
            />
            <Search className="input-button" onClick={e =>setLocation(e.target.value)}></Search>
        </InputGroup>
    );
});

export default React.memo(Location)