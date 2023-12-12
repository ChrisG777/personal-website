"use client";

import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import headerbg from "../../public/header_bg.png";
import styles from "./Hero.module.css"; // Assuming you're using CSS Modules

const hero = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    // Set the load state to true to start the header animation when the component mounts
    setLoad(true);
  }, []);

  return (
    <div className="bg-image position-relative d-flex justify-content-center align-items-center">
      <Image
        alt="neon background"
        src={headerbg}
        layout="responsive"
        objectFit="contain"
      ></Image>
      <div className={`text-center position-absolute ${styles.fadeIn}`}>
        <p className="display-2 text-light" id="header-text">
          Chris Ge
        </p>
      </div>
    </div>
  );
};

export default hero;
