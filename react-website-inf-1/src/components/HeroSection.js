import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video from '../components/videos/video-1.mp4'; // Importa el archivo de video

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted/> 
      <h1>CHEFTEANDO</h1>
      <p>¿Qué esperas para empezar a cocinar?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          INICIEMOS
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          SABER MÁS <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );  
}

export default HeroSection;
