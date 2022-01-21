import { useEffect, useState } from 'react';

export default function useGetHero() {
  const [heroes, setHeroes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (fetching) {
      console.log('process');
      const limit = 10;
      const offset = limit * currentPage;
      fetch(`https://breakingbadapi.com/api/characters?limit=${limit}&offset=${offset}`)
        .then((response) => response.json())
        .then((res) => {
          setHeroes([...heroes, ...res]);
          setCurrentPage((prev) => prev + 1);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', infinityScroll);
    return function () {
      document.removeEventListener('scroll', infinityScroll);
    };
  }, []);

  const infinityScroll = (e) => {
    const fullPageSize = e.target.documentElement.scrollHeight;
    const visiblePageSize = e.target.documentElement.scrollTop;
    const viewPortSize = window.innerHeight;
    if (fullPageSize - (visiblePageSize + viewPortSize) < 100) {
      console.log('scroll ');
      setFetching(true);
    }
  };

  return { heroes, fetching };
}
