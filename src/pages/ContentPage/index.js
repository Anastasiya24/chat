import React, { useEffect, useState } from 'react';
import Card from './Card';

const ContentPage = () => {
  const [heroes, setHeroes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (fetching) {
      console.log('process');
      // fetchList(setHeroes, currentPage, setCurrentPage, setFetching);
      const limit = 10;
      const offset = limit * currentPage;
      fetch(`https://breakingbadapi.com/api/characters?limit=${limit}&offset=${offset}`)
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
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
    // console.log('scrollHeight ', e.target.documentElement.scrollHeight);
    // console.log('scrollTop ', e.target.documentElement.scrollTop);
    // console.log('inner height ', window.innerHeight);
    const fullPageSize = e.target.documentElement.scrollHeight;
    const visiblePageSize = e.target.documentElement.scrollTop;
    const viewPortSize = window.innerHeight;
    if (fullPageSize - (visiblePageSize + viewPortSize) < 100) {
      console.log('scroll ');
      setFetching(true);
    }
  };

  return (
    <div>{heroes && heroes.map((hero) => <Card key={hero?.char_id} {...hero} />)}</div>
  );
};

export default ContentPage;
