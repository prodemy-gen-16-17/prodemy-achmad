import React from 'react';

function StarRating({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      // Bintang penuh
      stars.push(<span key={i}>&#9733;</span>);
    } else {
      // Bintang kosong
      stars.push(<span key={i}>&#9734;</span>);
    }
  }

  return <div>{stars}</div>;
}

export default StarRating;
