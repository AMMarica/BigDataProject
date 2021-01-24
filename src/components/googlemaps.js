import React, { useState } from 'react';
import axios from 'axios';
import { Button, Row, Col } from 'react-bootstrap'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Navbar from './Navbar.js'

const mapStyles = {
    width: '70%',
    height: '70%',
};

var latitude = 0, longitude = 0;

const Googlemaps = props => {

    const onclick = (t, map, coord) => {
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();
    }

    return (
        <div>
            <Navbar />
            <div style={{ display: 'inline-flex' }}>
                <div class="container">
                    <br />
                    <div className='box2'>
                        <form>
                            <h5> Selected location </h5>
                            <br />
                            <label for="latitude"> Latitude: </label>
                            <input type="text" class="form-control" id="name" name="name" />
                            <label for="longitude"> Longitude: </label>
                            <input type="text" class="form-control" id="email" name="email" />
                            <br />
                            <div class="text-center">
                                <Button variant='info' block> Save location </Button>
                            </div>
                        </form>
                    </div>
                    <br />
                </div>
                <div>
                    <Map
                        google={props.google}
                        zoom={8}
                        style={mapStyles}
                        initialCenter={{ lat: 47.444, lng: -122.176 }}
                    >
                        <Marker key="marker_1"
                            position={{ lat: 47.444, lng: -122.176 }}
                        />

                        <Marker key="marker_2"
                            position={{
                                lat: 48.444,
                                lng: -120.176
                            }}
                        />
                    </Map>
                </div>
            </div>
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBDOiYlmKlLqOo--60i8XYJKp8Vi1UAr7M'
})(Googlemaps);
