import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Container, Header, ImgLogo } from './styles'
import 'leaflet/dist/leaflet.css'
import Leaflet from 'leaflet'
import Logo from '../../assets/logo.png'
import Mark from '../../assets/point-map.png'

function Maps({showSide, setShowSide}) {
  const mapIcon = Leaflet.icon({
    iconUrl: Mark,
    iconSize: [50, 44],
    iconAnchor: [25, 44],
  })
    return (
        <Container>
            <Header>
                <ImgLogo src={Logo} />
                <i className="fas fa-plus" onClick={() => setShowSide(!showSide)}></i>
            </Header>
            <MapContainer 
            center={[-15.8363768,-48.0103629]}
            zoom={15} 
            style={{ width: '100%', height: '100%', margin: '0', padding: '0', zIndex: '5'}}
            >
              <TileLayer 
              url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              <Marker 
              icon={mapIcon}
              position={[-15.8363768,-48.0103629]}>
                <Popup closeButton={false} minWidth={240} maxWidth={240}>
                  Hospital de Base
                </Popup>
              </Marker>
            </MapContainer>
        </Container>
    )
}

export default Maps