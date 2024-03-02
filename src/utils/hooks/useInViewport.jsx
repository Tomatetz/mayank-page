import { useEffect, useState } from 'react';

export const useOnScreen = (ref) => {
  const checkInView = () => {
    const rect = ref.current.getBoundingClientRect();
    setIsInView(rect.top < window.innerHeight && rect.bottom >= 100 && rect.top < 100);
  };
  useEffect(() => {
    document.addEventListener('scroll', checkInView);
    return () => {
      document.removeEventListener('scroll', checkInView);
    };
  }, []);

  const [isInView, setIsInView] = useState(false);

  return { isInView };
};
