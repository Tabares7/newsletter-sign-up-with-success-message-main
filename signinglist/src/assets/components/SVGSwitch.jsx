import React, { useEffect, useState } from 'react'

import mobile from '../images/mobile-img.jpg';
import desktop from "../images/desktop-img.jpg";

const SVGSwitch = () => {
    const [screen, setScreen] = useState('sm');

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 768) {
          setScreen('sm');
        } else {
          setScreen('lg');
        }
      };
  
      // Establecer el color inicial
      handleResize();
  
      // Agregar el event listener
      window.addEventListener('resize', handleResize);
  
      // Limpiar el event listener al desmontar el componente
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <>
        {screen === "sm" ? 
           <img className=' rounded-b-3xl' src={mobile} alt="Mobile" />
        :
           <img className=' rounded-3xl h-[600px]' src={desktop} alt="Desktop" />
        }
        </>
    )
}

export default SVGSwitch