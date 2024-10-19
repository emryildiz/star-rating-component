import React, { useState } from "react";
import styles from "./styles.module.css";
import { Star } from "./star";
import { useStars } from "../../context/star-context";

function StarRating() {
  const { stars, activeStar } = useStars();

  return (
    <div className={styles.starRating}>
      <h2>How many stars would you give to our Online Code Editor?</h2>
      <div className={styles.stars}>
        {stars.map((star) => (
          <Star key={star.id} star={star}></Star>
        ))}
      </div>
      <p>
        {activeStar.text}
      </p>
    </div>
  );
}

export { StarRating };
