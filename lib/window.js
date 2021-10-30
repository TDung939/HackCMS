import { useState, useEffect } from 'react';

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      responsiveWidth: undefined,
      responsiveHeight: undefined
    });
  
    useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          responsiveWidth: window.innerWidth,
          responsiveHeight: window.innerHeight
        })
      }
      window.addEventListener('resize', handleResize)
      handleResize()
      return window.removeEventListener('resize', handleResize)
    }
    }, [])
  
    return windowSize;
  }