// hooks/useScrollNavigation.js
import { useState, useEffect } from 'react';

export function useScrollNavigation({ refs, setActiveSection }) {
  const [activeSection, setActiveState] = useState('home');

  // Handle scroll to update active section
  useEffect(() => {
    const { homeRef, categoriesRef, bestSellersRef } = refs;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for fixed header

      if (
        homeRef.current &&
        scrollPosition < homeRef.current.offsetTop + homeRef.current.offsetHeight
      ) {
        setActiveState('home');
        setActiveSection('home');
      } else if (
        categoriesRef.current &&
        scrollPosition >= categoriesRef.current.offsetTop &&
        scrollPosition < categoriesRef.current.offsetTop + categoriesRef.current.offsetHeight
      ) {
        setActiveState('categories');
        setActiveSection('categories');
      } else if (
        bestSellersRef.current &&
        scrollPosition >= bestSellersRef.current.offsetTop
      ) {
        setActiveState('bestSellers');
        setActiveSection('bestSellers');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [refs, setActiveSection]);

  const scrollToSection = (section) => {
    setActiveState(section);
    setActiveSection(section);

    let ref;
    const { homeRef, categoriesRef, bestSellersRef } = refs;
    
    switch (section) {
      case 'home':
        ref = homeRef;
        break;
      case 'categories':
        ref = categoriesRef;
        break;
      case 'bestSellers':
        ref = bestSellersRef;
        break;
      default:
        ref = homeRef;
    }

    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80, // Offset for fixed header
        behavior: 'smooth',
      });
    }
  };

  return {
    activeSection,
    scrollToSection
  };
}