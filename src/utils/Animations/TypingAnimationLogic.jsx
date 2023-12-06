import { useEffect, useState, useRef } from 'react';

const useTypingAnimation = (phrases) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Usamos useRef para almacenar la referencia al temporizador
  const timerRef = useRef();

  useEffect(() => {
    // Usamos la referencia actual de timerRef
    const timer = timerRef.current;

    const handleType = () => {
      const currentPhrase = phrases[index];
      const progress = text.length / currentPhrase.length;

      const typingSpeed = getTypingSpeed(progress, isDeleting);

      if (!isDeleting) {
        if (text.length < currentPhrase.length) {
          setText(currentPhrase.slice(0, text.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (text.length > 0) {
          setText(currentPhrase.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }

      timerRef.current = setTimeout(handleType, typingSpeed);
    };

    // Si hay un temporizador existente, limpiarlo
    if (timer) {
      clearTimeout(timer);
    }

    // Iniciar la animación solo al montar el componente
    handleType();
  }, []); // Dependencia vacía para ejecutar solo una vez al montar el componente

  // Función para calcular la velocidad de escritura
  function getTypingSpeed(progress, isDeleting) {
    const baseSpeed = 15000;
    const acceleration = 0.1; // Factor de aceleración

    if (isDeleting) {
      return baseSpeed * Math.exp(-progress * acceleration);
    } else {
      return baseSpeed * (1 - Math.exp(-progress * acceleration));
    }
  }

  // Devolver el texto actual
  return text;
};

export default useTypingAnimation;
