"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./banner.module.css";

const bannerImages = [
  "/img/cover.jpg",
  "/img/cover2.jpg",
  "/img/cover3.jpg",
  "/img/cover4.jpg",
];

export default function Banner() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const handleChangeBanner = () => {
    setIndex((prev) => (prev + 1) % bannerImages.length);
  };

  return (
    <div className={styles.banner} onClick={handleChangeBanner}>
      <img
        src={bannerImages[index]}
        alt="banner"
        className={styles.bannerImg}
      />

      <div className={styles.textBox}>
        <h1>where every event finds its venue</h1>
        <p>
          Finding the perfect venue has never been easier. Whether it&apos;s a
          wedding, corporate event, or private party, we connect people to the
          perfect place.
        </p>
      </div>

      <button
        className={styles.selectButton}
        onClick={(e) => {
          e.stopPropagation();
          router.push("/venue");
        }}
      >
        Select Venue
      </button>
    </div>
  );
}