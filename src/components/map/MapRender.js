import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper, Circle } from 'google-maps-react';

export class MapRender extends Component {

    render() {

        const coords = {
            lat: this.props.mapData.lat_init  === undefined ? 4.5822966 : parseFloat(this.props.mapData.lat_init),
            lng: this.props.mapData.lat_init  === undefined ? -74.1355864 : parseFloat(this.props.mapData.lon_init)
        };

        const radius = this.props.mapData.radius === undefined ? 5000 : parseFloat(this.props.mapData.radius);

        const markers = this.props.mapData.items === undefined ? null : this.props.mapData.items.map( (item, i) => {
            return <Marker key={i}
                title={item.place}
                name={item.place}
                position={{ lat: parseFloat(item.latitude), lng: parseFloat(item.longitude) }} />
        });

        return (
            <Map
                initialCenter={coords}
                google={this.props.google}
                style={{width: 500, height: 500, position: 'relative'}}
                zoom={10}
            >
                <Circle
                    radius={radius}
                    center={coords}
                    onMouseover={() => console.log('mouseover')}
                    onClick={() => console.log('click')}
                    onMouseout={() => console.log('mouseout')}
                    strokeColor='transparent'
                    strokeOpacity={0}
                    strokeWeight={5}
                    fillColor='#FF0000'
                    fillOpacity={0.2}
                />
                {markers}
            </Map>
        )
    }
};

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBx68I8C0X77bU2YWq_GuOBwS3_2R_gifo')
})(MapRender)
