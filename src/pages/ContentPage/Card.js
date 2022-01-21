import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Card = ({ category, name, nickname, birthday, img, status }) => {
  return (
    <div className={styles.card}>
      <p>category: {category}</p>
      <h1>{name}</h1>
      <h1>{nickname}</h1>
      <h1>birthday: {birthday}</h1>
      <img src={img} />
      <h5>{status}</h5>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Card;
