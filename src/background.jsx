import React, { useRef, useEffect, useState } from 'react';
import './main.css';

const Background = () => {
  const containerRef = useRef(null);
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const container = containerRef.current;
    let count = 0;

    const generateRandomNumber = () => {
      const symbols = ['$', '€', '¥', '£', '₹', '₩', '₪', '₺', 'zł', '฿', '₴']; // Add more symbols as needed
      const randomIndex = Math.floor(Math.random() * symbols.length);
      return symbols[randomIndex];
    };

    const createNumberElement = (number) => {
      if (count >= 200) {
        return;
      }

      count++;

      const numberElement = document.createElement('span');
      numberElement.innerText = number;
      numberElement.style.left = Math.random() * 100 + 'vw';
      numberElement.style.animationDuration = Math.random() * 20 + 15 + 's';
      container.appendChild(numberElement);
    };

    const animateNumbers = () => {
      setInterval(() => {
        const number = generateRandomNumber();
        createNumberElement(number);
      }, 500);
    };

    animateNumbers();
  }, []);

  return <div className="container" ref={containerRef}></div>;
};

export default Background;