import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './OurBranches.css';
import L from 'leaflet';


import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const branches = [
  {
    city: 'Pune',
    address: '1st Floor,101, Police, Wireless Colony, Vishal Nagar, Pimple Nilakh, Pune, Pimpri-Chinchwad, Maharashtra 411027',
    position: [18.586392186498944, 73.78140166973165],
    mapLink: 'https://g.co/kgs/2ovQeEb',
  },
  {
    city: 'Mumbai',
    address: 'Office No. 806, 8th Floor, Paradise Tower, next to MCDonalds, Naupada, Thane West, Mumbai, Thane, Maharashtra 400601',
    position: [19.1877496131839, 72.97525703071106],
    mapLink: 'https://g.co/kgs/8oPq6on',
  },
  {
    city: 'Raipur',
    address: ' New Panchsheel Nagar, Civil Lines, Raipur, Chhattisgarh 492001',
    position: [21.237314571201736, 81.6539475802003],
    mapLink: 'https://g.co/kgs/dkg98uo',
  }
];

const Branches = () => {
  return (
    <div className="branches-section">
      <h2 className="branches-title">OUR BRANCHES</h2>
      <div className="branches-container">
        {branches.map((branch, index) => (
          <div className="branch-card" key={index}>
            <MapContainer center={branch.position} zoom={13} scrollWheelZoom={true} className="map-container">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               
              />
              <Marker position={branch.position}>
                <Popup>
                  <b>{branch.city}</b><br />
                  <a href={branch.mapLink} target="_blank" rel="noopener noreferrer">
                    {branch.address}
                  </a>
                </Popup>
              </Marker>
            </MapContainer>
            <h3>{branch.city}</h3>
            <div className='add2'><a  href={branch.mapLink} target="_blank" rel="noopener noreferrer">
              {branch.address}
            </a>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branches;
