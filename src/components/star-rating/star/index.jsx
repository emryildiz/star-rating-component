import React from "react";
import styles from "./styles.module.css";
import { useStars } from "../../../context/star-context";

function Star({ star }) {
  const { setActiveStar } = useStars();
  return (
    <div className={styles.starWrapper}
      onMouseEnter={() => {
        setActiveStar(star.id, true);
      }}
      onMouseLeave={() => {
        setActiveStar(star.id, false);
      }}
    >
      <svg
        className={`${styles.star} ${star.active && styles.active}`}
        width="77"
        height="74"
        viewBox="0 0 77 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25.3505 22.69L3.02054 25.9275L2.62504 26.008C2.02632 26.1669 1.48052 26.4819 1.04336 26.9208C0.606199 27.3597 0.293347 27.9067 0.136753 28.506C-0.019842 29.1054 -0.0145694 29.7355 0.152032 30.3322C0.318633 30.9288 0.640593 31.4705 1.08503 31.902L17.262 47.6485L13.447 69.891L13.4015 70.276C13.3649 70.8952 13.4935 71.5131 13.7741 72.0663C14.0548 72.6195 14.4774 73.0881 14.9987 73.4243C15.52 73.7605 16.1213 73.952 16.7411 73.9794C17.3608 74.0067 17.9766 73.8689 18.5255 73.58L38.4965 63.08L58.422 73.58L58.772 73.741C59.3497 73.9686 59.9776 74.0383 60.5912 73.9432C61.2048 73.848 61.782 73.5913 62.2636 73.1994C62.7452 72.8076 63.114 72.2946 63.332 71.7132C63.5499 71.1318 63.6093 70.5029 63.504 69.891L59.6855 47.6485L75.8695 31.8985L76.1425 31.601C76.5325 31.1207 76.7882 30.5456 76.8836 29.9343C76.9789 29.323 76.9105 28.6973 76.6853 28.1211C76.4602 27.5448 76.0863 27.0385 75.6017 26.6538C75.1172 26.2691 74.5393 26.0197 73.927 25.931L51.597 22.69L41.615 2.46C41.3262 1.87387 40.879 1.3803 40.3242 1.03517C39.7694 0.690029 39.129 0.507107 38.4755 0.507107C37.8221 0.507107 37.1817 0.690029 36.6269 1.03517C36.072 1.3803 35.6249 1.87387 35.336 2.46L25.3505 22.69Z" />
      </svg>
    </div>
  );
}

export { Star };
