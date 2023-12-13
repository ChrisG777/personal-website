"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
/* eslint-disable react/no-unescaped-entities */

const Hero = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    // Set the load state to true to start the header animation when the component mounts
    setLoad(true);
  }, []);

  return (
    <div className="bg-image position-relative d-flex justify-content-center align-items-center">
      <Image
        alt="neon background"
        src="/header_bg.png"
        sizes="100vw"
        width={500}
        height={500}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
        }}
        className={`${styles.fadeInImage}`}
      ></Image>
      <div className={`text-center position-absolute ${styles.fadeIn}`}>
        <p className="display-2 text-light" id="header-text">
          Chris Ge
        </p>
      </div>
    </div>
  );
};

export default Hero;
