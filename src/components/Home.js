import React from 'react';
import Painting from './painting.jpg';

export default function Home() {
  return (
    <div id='home'>
      <img src={Painting} alt='Francisco de Goya, Duelo a garrotazos (1819-1823)' />
      <div id='home-heading'>
        <h1>Title</h1>
        <p className='description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae sagittis justo.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae...

        </p>
      </div>
    </div>
  );
}
