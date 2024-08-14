import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ourclients.css';

import amdocsLogo from '../Logos/Ourclients/Artboard 2.png';

import Logo from '../Logos/Ourclients/Artboard 10.png';
import Logo1 from '../Logos/Ourclients/Artboard 11.png';
import Logo2 from '../Logos/Ourclients/Artboard 12.png';
import Logo3 from '../Logos/Ourclients/Artboard 13.png';
import Logo4 from '../Logos/Ourclients/Artboard 14.png';
import Logo5 from '../Logos/Ourclients/Artboard 15.png';
import Logo6 from '../Logos/Ourclients/Artboard 16.png';
import Logo7 from '../Logos/Ourclients/Artboard 17.png';
import Logo8 from '../Logos/Ourclients/Artboard 18.png';
import Logo9 from '../Logos/Ourclients/Artboard 19.png';
import Logo10 from '../Logos/Ourclients/Artboard 20.png';
import Logo11 from '../Logos/Ourclients/Artboard 21.png';
import Logo12 from '../Logos/Ourclients/Artboard 22.png';
import Logo13 from '../Logos/Ourclients/Artboard 23.png';
import Logo14 from '../Logos/Ourclients/Artboard 24.png';
import Logo15 from '../Logos/Ourclients/Artboard 25.png';
import Logo16 from '../Logos/Ourclients/Artboard 26.png';
import Logo17 from '../Logos/Ourclients/Artboard 40.png';
import Logo18 from '../Logos/Ourclients/Artboard 41.png';
import Logo19 from '../Logos/Ourclients/Artboard 42.png';
import Logo20 from '../Logos/Ourclients/Artboard 43.png';
import Logo21 from '../Logos/Ourclients/Artboard 44.png';
import Logo22 from '../Logos/Ourclients/Artboard 45.png';
import Logo23 from '../Logos/Ourclients/Artboard 46.png';
import Logo24 from '../Logos/Ourclients/Artboard 47.png';
import Logo25 from '../Logos/Ourclients/Artboard 48.png';
import Logo26 from '../Logos/Ourclients/Artboard 49.png';
import Logo27 from '../Logos/Ourclients/Artboard 50.png';
import Logo28 from '../Logos/Ourclients/Artboard 51.png';
import Logo29 from '../Logos/Ourclients/Artboard 52.png';
import Logo30 from '../Logos/Ourclients/Artboard 53.png';
import Logo31 from '../Logos/Ourclients/Artboard 54.png';


const clients = [
  { name: 'Amdocs', logo: amdocsLogo },
  
  { name: 'hdfc logo', logo: Logo },
  { name: 'genius logo', logo: Logo1 },
  { name: 'johndeere logo', logo: Logo2 },
  { name: 'volkswagen logo', logo: Logo3 },
  { name: 'capita logo', logo: Logo4 },
  { name: 'crisil logo ', logo: Logo5 },
  { name: 'exl logo', logo: Logo6 },
  { name: 'jindal logo', logo: Logo7 },
  { name: 'cummins logo', logo: Logo8 },
  { name: 'iss logo', logo: Logo9 },
  { name: 'Monginis logo', logo: Logo10 },
  { name: 'weber logo', logo: Logo11 },
  { name: 'syntel logo', logo: Logo12 },
  { name: 'ask logo', logo: Logo13 },
  { name: 'pizzahut logo', logo: Logo14 },
  { name: 'kelly services logo', logo: Logo15 },
  { name: 'godrej logo', logo: Logo16 },
  { name: 'zensar logo', logo: Logo17 },
  { name: 'swiggy logo', logo: Logo18 },
  { name: 'paytm logo', logo: Logo19 },
  { name: 'vyapar logo', logo: Logo21 },
  { name: 'airmeet logo', logo: Logo22 },
  { name: 'moneytap logo', logo: Logo23 },
  { name: 'bharatpe logo', logo: Logo24 },
  { name: 'homelane logo', logo: Logo25 },
  { name: 'ibm logo', logo: Logo26 },
  { name: 'leapfinance logo', logo: Logo27 },
  { name: 'dream11 logo', logo: Logo28 },
  { name: 'sharechat logo', logo: Logo29 },
  { name: 'bharatagri logo', logo: Logo30 },
  { name: 'eatfit logo', logo: Logo31 },
  { name: 'whitehatjr logo', logo: Logo20 },
];

const OurClients = () => {
  console.log(clients);
  return (
    <Container fluid className="our-clients-section text-center">
      <h2 className="section-titleC">OUR CLIENTS</h2>
      <div className="marquee-container">
        <div className="marquee marquee1">
          <div className="marquee-content">
            {clients.concat(clients).map((client, index) => (
              <div key={index} className="client-logo-container">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="client-logo"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="marquee marquee2 reverse">
          <div className="marquee-content">
            {clients.concat(clients).map((client, index) => (
              <div key={index + clients.length} className="client-logo-container">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="client-logo"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="marquee marquee3">
          <div className="marquee-content">
            {clients.concat(clients).map((client, index) => (
              <div key={index} className="client-logo-container">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="client-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurClients;
