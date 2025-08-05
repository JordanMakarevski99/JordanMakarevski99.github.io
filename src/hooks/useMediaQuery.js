import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const media = window.matchMedia(query);
    const updateMatch = () => {
      if (media.matches !== matches) {
         setMatches(media.matches);
      }
    }
    updateMatch();

    media.addEventListener('change', updateMatch);


    return () => media.removeEventListener('change', updateMatch);

  }, [query, matches]);

  return matches;
};

export default useMediaQuery;