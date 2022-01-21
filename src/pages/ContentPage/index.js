import React from 'react';
import Card from './Card';
import useGetHero from './service';

const ContentPage = () => {
  const { heroes, fetching } = useGetHero();
  return (
    <div>{heroes && heroes.map((hero) => <Card key={hero?.char_id} {...hero} />)}</div>
  );
};

export default ContentPage;
